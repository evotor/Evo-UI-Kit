import {Injector} from '@angular/core';
import {fakeAsync, TestBed, tick} from '@angular/core/testing';
import {OverlayRef} from '@angular/cdk/overlay';
import {Platform} from '@angular/cdk/platform';
import {asyncScheduler} from 'rxjs';
import {EvoRepositionScrollStrategy} from './evo-reposition-scroll-strategy';

interface OverlayRefStub {
    overlayElement: HTMLElement;
    updatePosition: jasmine.Spy;
    detach: jasmine.Spy;
    hasAttached: () => boolean;
}

function createOverlayRefStub(): OverlayRefStub {
    const overlayElement = document.createElement('div');
    // Pin the overlay inside the viewport. The reposition delegate runs CDK's autoClose, which
    // detaches once the overlay scrolls out of view; an unpositioned stub inherits whatever scroll
    // offset / leftover body height earlier specs left behind and would auto-close at random,
    // failing the "stays open" expectation. `position: fixed` gives it a stable in-view rect.
    overlayElement.style.cssText = 'position:fixed;top:10px;left:10px;width:10px;height:10px';
    document.body.appendChild(overlayElement);

    return {
        overlayElement,
        updatePosition: jasmine.createSpy('updatePosition'),
        detach: jasmine.createSpy('detach'),
        hasAttached: () => true,
    };
}

function rect(top: number, bottom: number, left: number, right: number): DOMRect {
    return {top, bottom, left, right, x: left, y: top, width: right - left, height: bottom - top} as DOMRect;
}

// Production throttles repositioning with `auditTime(0, animationFrameScheduler)` — a process-wide
// RxJS singleton that does not flush deterministically under `fakeAsync`/`tick` and leaks state
// across Karma's randomized, `destroyAfterEach: false` suite. The strategy lets specs swap in a
// scheduler, so we drive throttling with `asyncScheduler`: timer-based, advanced by `tick`, and free
// of the shared frame-handle that made these tests order-dependent.
const TEST_SCHEDULER = asyncScheduler;

describe('EvoRepositionScrollStrategy', () => {
    let injector: Injector;
    let host: HTMLElement;
    let container: HTMLElement; // a scroll container that is NOT an ancestor of the overlay/trigger
    let overlayRef: OverlayRefStub;
    let strategies: EvoRepositionScrollStrategy[] = [];

    beforeEach(() => {
        strategies = [];
    });

    afterEach(() => {
        // Detach even when an expectation threw mid-test, so a failing test never leaks its
        // capture-phase window listener into later specs.
        strategies.forEach((strategy) => strategy.detach());
    });

    function buildDom(): void {
        host = document.createElement('div');
        host.innerHTML = `<div id="c" style="height:50px;overflow:auto"><div style="height:1000px"></div></div>`;
        document.body.appendChild(host);
        container = host.querySelector('#c') as HTMLElement;
        overlayRef = createOverlayRefStub();
    }

    function cleanupDom(): void {
        host.remove();
        overlayRef.overlayElement.remove();
    }

    function createStrategy(): EvoRepositionScrollStrategy {
        const strategy = new EvoRepositionScrollStrategy(injector, undefined, TEST_SCHEDULER);
        strategy.attach(overlayRef as unknown as OverlayRef);
        strategies.push(strategy);

        return strategy;
    }

    describe('in a browser', () => {
        beforeEach(() => {
            TestBed.configureTestingModule({});
            injector = TestBed.inject(Injector);
            buildDom();
        });

        afterEach(cleanupDom);

        it('repositions when an inner container that is NOT an ancestor of the trigger scrolls', fakeAsync(() => {
            const strategy = createStrategy();
            strategy.enable();

            expect(container.contains(overlayRef.overlayElement)).toBe(false);

            container.dispatchEvent(new Event('scroll'));
            tick(50);

            expect(overlayRef.updatePosition).toHaveBeenCalled();
            strategy.detach();
        }));

        it('coalesces a same-frame burst of scroll events to a single updatePosition', fakeAsync(() => {
            const strategy = createStrategy();
            strategy.enable();

            for (let i = 0; i < 12; i++) {
                container.dispatchEvent(new Event('scroll'));
            }
            tick(50);

            // auditTime(0, scheduler) is trailing-only: a burst within one window (a frame via rAF in
            // production, here the injected scheduler) collapses to exactly one reposition.
            expect(overlayRef.updatePosition.calls.count()).toBe(1);
            strategy.detach();
        }));

        it('still repositions on page/document scroll (handled by the CDK global listener)', fakeAsync(() => {
            const strategy = createStrategy();
            strategy.enable();

            document.dispatchEvent(new Event('scroll'));
            tick(50);

            expect(overlayRef.updatePosition).toHaveBeenCalled();
            strategy.detach();
        }));

        // `body { height: 100dvh }` makes the page scroll fire on <body>, whose scroll does NOT reach
        // the CDK global listener (it only catches target === document). Our capture stream must keep it.
        it('repositions on body scroll (body height:100dvh case)', fakeAsync(() => {
            const strategy = createStrategy();
            strategy.enable();

            document.body.dispatchEvent(new Event('scroll'));
            tick(50);

            expect(overlayRef.updatePosition).toHaveBeenCalled();
            strategy.detach();
        }));

        it('ignores scrolls that originate inside the overlay', fakeAsync(() => {
            const strategy = createStrategy();
            strategy.enable();

            const innerOverlayScroller = document.createElement('div');
            overlayRef.overlayElement.appendChild(innerOverlayScroller);
            innerOverlayScroller.dispatchEvent(new Event('scroll'));
            tick(50);

            expect(overlayRef.updatePosition).not.toHaveBeenCalled();
            strategy.detach();
        }));

        it('stops reacting after detach', fakeAsync(() => {
            const strategy = createStrategy();
            strategy.enable();
            strategy.detach();

            overlayRef.updatePosition.calls.reset();
            container.dispatchEvent(new Event('scroll'));
            document.dispatchEvent(new Event('scroll'));
            tick(50);

            expect(overlayRef.updatePosition).not.toHaveBeenCalled();
        }));
    });

    describe('without a browser platform (SSR)', () => {
        beforeEach(() => {
            TestBed.configureTestingModule({
                providers: [{provide: Platform, useValue: {isBrowser: false}}],
            });
            injector = TestBed.inject(Injector);
            buildDom();
        });

        afterEach(cleanupDom);

        it('does not touch window or reposition on scroll', fakeAsync(() => {
            const strategy = createStrategy();

            expect(() => strategy.enable()).not.toThrow();

            container.dispatchEvent(new Event('scroll'));
            tick(50);

            expect(overlayRef.updatePosition).not.toHaveBeenCalled();
            strategy.detach();
        }));
    });

    describe('closing when the trigger leaves its scroll container', () => {
        let scrollContainer: HTMLElement;
        let origin: HTMLElement;

        beforeEach(() => {
            TestBed.configureTestingModule({});
            injector = TestBed.inject(Injector);

            host = document.createElement('div');
            host.innerHTML = `
                <div id="sc" style="height:100px;overflow:auto">
                    <div style="height:1000px"><button id="o"></button></div>
                </div>`;
            document.body.appendChild(host);
            scrollContainer = host.querySelector('#sc') as HTMLElement;
            origin = host.querySelector('#o') as HTMLElement;
            overlayRef = createOverlayRefStub();
        });

        afterEach(cleanupDom);

        function createStrategyWithOrigin(): EvoRepositionScrollStrategy {
            const strategy = new EvoRepositionScrollStrategy(injector, {getOrigin: () => origin}, TEST_SCHEDULER);
            strategy.attach(overlayRef as unknown as OverlayRef);
            strategies.push(strategy);

            return strategy;
        }

        it('stays open while the trigger is still inside its container', fakeAsync(() => {
            spyOn(scrollContainer, 'getBoundingClientRect').and.returnValue(rect(0, 100, 0, 100));
            spyOn(origin, 'getBoundingClientRect').and.returnValue(rect(20, 40, 20, 40));

            const strategy = createStrategyWithOrigin();
            strategy.enable();

            scrollContainer.dispatchEvent(new Event('scroll'));
            tick(50);

            expect(overlayRef.detach).not.toHaveBeenCalled();
            strategy.detach();
        }));

        it('closes when the trigger has scrolled out of its container', fakeAsync(() => {
            spyOn(scrollContainer, 'getBoundingClientRect').and.returnValue(rect(0, 100, 0, 100));
            // origin scrolled above the container (bottom -20 < container top 0)
            spyOn(origin, 'getBoundingClientRect').and.returnValue(rect(-60, -20, 20, 40));

            const strategy = createStrategyWithOrigin();
            strategy.enable();

            scrollContainer.dispatchEvent(new Event('scroll'));
            tick(50);

            expect(overlayRef.detach).toHaveBeenCalled();
            strategy.detach();
        }));
    });
});
