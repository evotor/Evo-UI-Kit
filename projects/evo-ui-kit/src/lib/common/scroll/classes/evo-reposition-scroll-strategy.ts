import {ElementRef, Injector, NgZone} from '@angular/core';
import {OverlayRef, ScrollStrategy, ScrollStrategyOptions} from '@angular/cdk/overlay';
import {CdkScrollable, ScrollDispatcher} from '@angular/cdk/scrolling';
import {Platform} from '@angular/cdk/platform';
import {animationFrameScheduler, fromEvent, Observable, SchedulerLike, Subscription} from 'rxjs';
import {auditTime, filter} from 'rxjs/operators';
import {EvoScrollStrategyParams} from '../interfaces/evo-scroll-strategy-params';
import {getScrollableAncestors} from '../utils/get-scrollable-ancestors';

/** The minimal surface ScrollDispatcher.register()/deregister() actually consume. */
type ScrollDispatcherSource = Pick<CdkScrollable, 'elementScrolled' | 'getElementRef'>;

/**
 * Reposition-on-scroll strategy that reuses CDK's stock RepositionScrollStrategy.
 *
 * The stock strategy reacts to `ScrollDispatcher.scrolled()`, which only sees document/page scroll
 * plus containers explicitly registered via `cdkScrollable`. That misses arbitrary `overflow: auto`
 * containers — e.g. when a project sets `body { height: 100dvh }` (a hack to hide a sidebar
 * scrollbar), page scrolling moves into an inner container that the overlay's trigger may not even
 * be a DOM descendant of, and the overlay never follows.
 *
 * Instead of walking and registering the trigger's ancestors (which still misses containers that are
 * not ancestors of the trigger), this adapter registers ONE synthetic ScrollDispatcher entry whose
 * source is a CAPTURE-phase window listener: capture fires for scroll of ANY element on the page, so
 * coverage no longer depends on the DOM ancestor chain. The actual repositioning / auto-close is
 * still delegated to the stock RepositionScrollStrategy — no reposition logic is reimplemented here.
 *
 * Smoothness: the registered stream is rAF-throttled (`auditTime(0, animationFrameScheduler)`, the
 * same operator CDK uses internally) and the delegate is built with `scrollThrottle: 0` so the
 * dispatcher adds no second, timer-based `auditTime(20)` on top. Net: one frame-aligned
 * `updatePosition` per frame, no trailing lag.
 *
 * Only the normal viewport scroll (`target === document`) is filtered out of the synthetic stream and
 * left to the dispatcher's own global listener, to avoid repositioning twice per tick. Scrolls on
 * <body>/<html>/inner elements are kept, because that bubble-phase listener never receives them — in
 * particular `body { height: 100dvh }` makes the page scroll fire on <body>, which it would miss.
 *
 * Closing: when a `getOrigin` is supplied, the strategy also detaches the overlay once the trigger
 * has scrolled fully out of one of its scroll containers. CDK's own autoClose only compares the
 * overlay against the viewport, so without this the overlay would keep hovering over content that an
 * inner container has already clipped away.
 */
export class EvoRepositionScrollStrategy implements ScrollStrategy {
    private readonly scrollDispatcher = this.injector.get(ScrollDispatcher);
    private readonly platform = this.injector.get(Platform);
    private readonly ngZone = this.injector.get(NgZone);
    private readonly delegate: ScrollStrategy = this.injector
        .get(ScrollStrategyOptions)
        .reposition({autoClose: true, scrollThrottle: 0});

    private overlayRef: OverlayRef | null = null;
    private scrollSource: ScrollDispatcherSource | null = null;
    private closeSubscription: Subscription | null = null;

    constructor(
        private readonly injector: Injector,
        private readonly params?: EvoScrollStrategyParams,
        // Frame-aligned in production; overridable so specs can drive throttling with a `fakeAsync`-
        // friendly scheduler instead of the process-wide `animationFrameScheduler` singleton.
        private readonly scheduler: SchedulerLike = animationFrameScheduler,
    ) {}

    attach(overlayRef: OverlayRef): void {
        this.overlayRef = overlayRef;
        this.delegate.attach(overlayRef);
    }

    enable(): void {
        if (!this.overlayRef) {
            return;
        }

        this.registerScrollSource();
        this.delegate.enable();
        this.observeOriginContainer();
    }

    disable(): void {
        this.delegate.disable();
        this.deregisterScrollSource();
        this.unobserveOriginContainer();
    }

    detach(): void {
        this.delegate.detach();
        this.deregisterScrollSource();
        this.unobserveOriginContainer();
        this.overlayRef = null;
    }

    private registerScrollSource(): void {
        if (this.scrollSource || !this.platform.isBrowser || !this.overlayRef) {
            return;
        }

        this.scrollSource = this.createCaptureScrollSource(this.overlayRef);
        this.scrollDispatcher.register(this.scrollSource as CdkScrollable);
    }

    private deregisterScrollSource(): void {
        if (this.scrollSource) {
            this.scrollDispatcher.deregister(this.scrollSource as CdkScrollable);
            this.scrollSource = null;
        }
    }

    /**
     * A synthetic ScrollDispatcher entry: `register()` only subscribes to `elementScrolled()`.
     *
     * `getElementRef()` must still exist and must point at a DETACHED element: ScrollDispatcher is a
     * root singleton, so any other overlay calling `getAncestorScrollContainers()`/`ancestorScrolled()`
     * would invoke it on every registered source. A detached element is never in another element's
     * ancestor chain, so this global capture source never pollutes their ancestor queries (and never
     * throws on a missing `getElementRef`).
     */
    private createCaptureScrollSource(overlayRef: OverlayRef): ScrollDispatcherSource {
        const scrolled$: Observable<Event> = fromEvent<Event>(window, 'scroll', {
            capture: true,
            passive: true,
        }).pipe(
            filter((event): boolean => this.shouldReposition(event, overlayRef)),
            auditTime(0, this.scheduler),
        );
        const detached = new ElementRef(document.createElement('div'));

        return {
            elementScrolled: (): Observable<Event> => scrolled$,
            getElementRef: (): ElementRef<HTMLElement> => detached,
        };
    }

    private shouldReposition(event: Event, overlayRef: OverlayRef): boolean {
        const target = event.target;

        // Cede ONLY `document`-targeted scroll to ScrollDispatcher's own global listener, to avoid a
        // second updatePosition per tick. That listener sits on `document` in the bubble phase and
        // scroll does not bubble, so it ONLY ever sees `target === document` (the normal viewport
        // scroll). Scrolls on <body> / <html> / inner elements never reach it — e.g. `body { height:
        // 100dvh }` makes the page scroll fire on <body> — so those must stay on our capture stream.
        if (target === document) {
            return false;
        }

        // Ignore scrolls originating inside the overlay itself (stock reposition does not filter).
        return !overlayRef.overlayElement.contains(target as Node);
    }

    private observeOriginContainer(): void {
        if (this.closeSubscription || !this.platform.isBrowser || !this.params?.getOrigin) {
            return;
        }

        // Reuses ScrollDispatcher.scrolled() (no extra window listener): it already carries our
        // synthetic capture source plus page scroll.
        this.closeSubscription = this.scrollDispatcher
            .scrolled(0)
            .subscribe((): void => this.closeIfOriginLeftContainer());
    }

    private unobserveOriginContainer(): void {
        this.closeSubscription?.unsubscribe();
        this.closeSubscription = null;
    }

    private closeIfOriginLeftContainer(): void {
        if (!this.overlayRef?.hasAttached() || !this.originLeftScrollContainer()) {
            return;
        }

        this.ngZone.run((): void => this.overlayRef?.detach());
    }

    /** True once the trigger has scrolled fully outside any of its scroll-container ancestors. */
    private originLeftScrollContainer(): boolean {
        const origin = this.params?.getOrigin?.() ?? null;

        if (!origin) {
            return false;
        }

        const containers = getScrollableAncestors(origin).filter(
            (target): target is Element => target instanceof Element,
        );

        if (!containers.length) {
            return false;
        }

        const originRect = origin.getBoundingClientRect();

        return containers.some((container): boolean => this.isOutside(originRect, container.getBoundingClientRect()));
    }

    private isOutside(origin: DOMRect, container: DOMRect): boolean {
        return (
            origin.bottom < container.top ||
            origin.top > container.bottom ||
            origin.right < container.left ||
            origin.left > container.right
        );
    }
}
