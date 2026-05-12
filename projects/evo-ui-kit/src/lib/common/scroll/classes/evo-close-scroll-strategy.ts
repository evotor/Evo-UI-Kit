import {Injector, NgZone} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {OverlayRef, ScrollStrategy} from '@angular/cdk/overlay';
import {EvoCloseScrollStrategyParams} from '../interfaces/evo-close-scroll-strategy-params';
import {filter, first, tap} from 'rxjs/operators';
import {createScrollStream} from '../utils/create-scroll-stream';
import {Subscription} from 'rxjs';
import {ScrollPosition} from '../interfaces/scroll-position';

export class EvoCloseScrollStrategy implements ScrollStrategy {
    private readonly document: Document;
    private readonly ngZone: NgZone;

    private overlayRef: OverlayRef | null = null;
    private scrollSubscription: Subscription | null = null;

    private initialScrollPosition: ScrollPosition | null = null;

    constructor(private readonly injector: Injector, private readonly params?: EvoCloseScrollStrategyParams) {
        this.document = this.injector.get(DOCUMENT);
        this.ngZone = this.injector.get(NgZone);
    }

    attach(overlayRef: OverlayRef): void {
        this.overlayRef = overlayRef;
    }

    detach(): void {
        this.disable();
        this.overlayRef = null;
    }

    disable(): void {
        if (!this.scrollSubscription) {
            return;
        }

        this.scrollSubscription.unsubscribe();
        this.scrollSubscription = null;
    }

    enable(): void {
        if (this.scrollSubscription || !this.overlayRef) {
            return;
        }

        this.ngZone.runOutsideAngular(() => {
            this.initialScrollPosition = this.getCurrentScrollPosition();

            this.scrollSubscription = createScrollStream(this.document, this.overlayRef)
                .pipe(
                    filter(() => this.checkThreshold()),
                    first(),
                    tap(() => this.detachOverlay()),
                )
                .subscribe();
        });
    }

    private detachOverlay(): void {
        if (!this.overlayRef?.hasAttached()) {
            return;
        }

        this.disable();
        this.ngZone.run(() => this.overlayRef.detach());
    }

    private checkThreshold(): boolean {
        const threshold = this.params?.threshold ?? 0;
        const triggerEl = this.params?.triggerRef?.nativeElement;

        if (!triggerEl || !this.initialScrollPosition) {
            return true;
        }

        const scrollPosition = this.getCurrentScrollPosition();

        if (!scrollPosition) {
            return false;
        }

        const distanceY = Math.abs(scrollPosition.vertical - this.initialScrollPosition.vertical);
        const distanceX = Math.abs(scrollPosition.horizontal - this.initialScrollPosition.horizontal);

        return Math.max(distanceX, distanceY) > threshold;
    }

    private getCurrentScrollPosition(): ScrollPosition | null {
        const element = this.params?.triggerRef?.nativeElement as Element;

        if (!element) {
            return null;
        }

        const rect = element.getBoundingClientRect();

        return {
            vertical: rect.top,
            horizontal: rect.left,
        };
    }
}
