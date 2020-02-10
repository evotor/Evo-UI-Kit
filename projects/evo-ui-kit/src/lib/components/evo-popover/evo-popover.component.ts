import { Component, HostListener, Input, ElementRef, NgZone, AfterViewInit, OnChanges, OnDestroy, SimpleChanges, ViewChild } from '@angular/core';
import { createPopper, Instance, Placement, Modifier } from '@popperjs/core';
import { Subject } from 'rxjs';
import { tap, observeOn, takeUntil } from 'rxjs/operators';
import { async } from 'rxjs/internal/scheduler/async';

export type EvoPopoverPosition = 'center' | Placement;

@Component({
    selector: 'evo-popover',
    templateUrl: 'evo-popover.component.html',
    styleUrls: ['evo-popover.component.scss'],
})
export class EvoPopoverComponent implements AfterViewInit, OnChanges, OnDestroy {

    // TODO: This prop only for support old API. Remove later
    // tslint:disable-next-line
    @Input('media-tablet-position') mediaTabletPosition: 'right' | 'left' | 'center' = 'center';

    @Input('position') set position(position: EvoPopoverPosition) {
        this.placement = position === 'center' ? (this.positionMap[position] as Placement) : position;
    }

    @Input() show = false;
    @Input() modifiers: Partial<Modifier<any>>[] = [];
    @ViewChild('popover') el: ElementRef;
    @ViewChild('popoverWrap') popoverWrap: ElementRef;

    private popper: Instance;
    private placement: Placement = 'bottom';
    // Old API Map
    private positionMap = { 'center': 'bottom' };
    private popoverVisibilityTimeout = false;
    private update$ = new Subject();
    private subscriptions$ = new Subject();

    constructor(
        private zone: NgZone,
    ) { }

    ngAfterViewInit() {
        this.create();
        this.update$.pipe(
            takeUntil(this.subscriptions$),
            observeOn(async),
            tap(() => {
                if (this.popper) {
                    this.popper.update();
                }
            })
        ).subscribe();
    }

    ngOnDestroy() {
        this.destroy();
        this.subscriptions$.next();
        this.subscriptions$.complete();
    }

    ngOnChanges(changes: SimpleChanges) {
        const position = changes.position;
        if ( position && !position.firstChange ) {
            this.destroy();
            this.create();
        }
    }

    create() {
        this.zone.runOutsideAngular(() => {
            this.popper = createPopper(
                this.el.nativeElement,
                this.popoverWrap.nativeElement,
                {
                    placement: this.placement,
                    modifiers: this.modifiers,
                }
            );
            this.update$.next();
        });
    }

    destroy() {
        if (this.popper) {
            this.zone.runOutsideAngular(() => {
                this.popper.destroy();
            });

            this.popper = null;
        }
    }

    @HostListener('mouseenter')
    onEnter() {
        this.showPopover();
    }

    @HostListener('touchend')
    onTouchEnd() {
        this.showPopover();
    }

    @HostListener('mouseleave')
    onLeave() {
        this.popoverVisibilityTimeout = true;
        setTimeout(() => {
            if (this.popoverVisibilityTimeout) {
                this.show = false;
            }
        }, 100);
    }

    onClickOutside(): void {
        this.show = false;
    }

    private showPopover(): void {
        this.popoverVisibilityTimeout = false;
        this.show = true;
    }

}
