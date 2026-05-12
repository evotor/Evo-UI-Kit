import {Injector, NgZone} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {ScrollStrategy} from '@angular/cdk/overlay';
import {OverlayReference} from '@angular/cdk/overlay/overlay-reference';
import {Subscription} from 'rxjs';
import {tap} from 'rxjs/operators';
import {createScrollStream} from '../utils/create-scroll-stream';

export class EvoRepositionScrollStrategy implements ScrollStrategy {
    private readonly document: Document;
    private readonly ngZone: NgZone;

    private overlayRef: OverlayReference | null = null;

    private scrollSubscription: Subscription | null = null;

    constructor(private readonly injector: Injector) {
        this.document = this.injector.get(DOCUMENT);
        this.ngZone = this.injector.get(NgZone);
    }

    attach(overlayRef: OverlayReference): void {
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
            this.scrollSubscription = createScrollStream(this.document, this.overlayRef)
                .pipe(
                    tap(() => {
                        if (this.isOverlayScrolledOutsideView()) {
                            this.detachOverlay();
                            return;
                        }

                        this.updatePosition();
                    }),
                )
                .subscribe();
        });
    }

    private updatePosition(): void {
        if (!this.overlayRef?.hasAttached()) {
            return;
        }

        this.ngZone.run(() => this.overlayRef.updatePosition());
    }

    private detachOverlay(): void {
        if (!this.overlayRef?.hasAttached()) {
            return;
        }

        this.disable();
        this.ngZone.run(() => this.overlayRef.detach());
    }

    private isOverlayScrolledOutsideView(): boolean {
        if (!this.overlayRef?.hasAttached()) {
            return true;
        }

        const overlayRect = this.overlayRef.overlayElement.getBoundingClientRect();
        const pageHeight = this.document.documentElement.clientHeight;
        const pageWidth = this.document.documentElement.clientWidth;

        return (
            overlayRect.bottom < 0 ||
            overlayRect.top > pageHeight ||
            overlayRect.right < 0 ||
            overlayRect.left > pageWidth
        );
    }
}
