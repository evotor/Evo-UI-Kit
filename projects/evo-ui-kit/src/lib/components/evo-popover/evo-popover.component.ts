import { Component, HostListener, Input, ElementRef, NgZone, AfterViewInit, OnChanges, OnDestroy, SimpleChanges, ViewChild } from '@angular/core';
import Popper from 'popper.js';

export type EvoPopoverPosition = 'center' | Popper.Placement;

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
        this.placement = position === 'center' ? (this.positionMap[position] as Popper.Placement) : position;
    }

    @Input() show = false;
    @Input() positionFixed = false;
    @Input() eventsEnabled = true;
    @Input() modifiers: Popper.Modifiers;
    @Input() target: string | Element;
    @ViewChild('popover') el: ElementRef;
    @ViewChild('popoverWrap') popoverWrap: ElementRef;

    private popper: Popper;
    private placement: Popper.Placement = 'bottom';
    // Old API Map
    private positionMap = { 'center': 'bottom' };
    private popoverVisibilityTimeout = false;
    private arrowSize = 16;
    private borderRadius = 6;
    private defaultModifiers = {
        offset: {
            // Modifier for Arrow offset
            fn: data => {
                const { offsets, placement, arrowStyles } = data;
                const { reference, popper } = offsets;
                if ( placement === 'bottom-start' && ((reference.width / 2) + this.arrowSize) > popper.width ) {
                    arrowStyles.left = popper.width - this.arrowSize - this.borderRadius + 'px';
                }
                if ( placement === 'bottom-end' && ((reference.width / 2) + this.arrowSize) > popper.width ) {
                    arrowStyles.left = this.borderRadius + 'px';
                }
                return data;
            }
        }
    };

    constructor(
        private zone: NgZone,
    ) { }

    ngAfterViewInit() {
        this.create();
    }

    ngOnDestroy() {
        this.destroy();
    }

    ngOnChanges(changes: SimpleChanges) {
        if (
            changes.target && !changes.target.firstChange ||
            changes.position && !changes.position.firstChange ||
            changes.positionFixed && !changes.positionFixed.firstChange ||
            changes.eventsEnabled && !changes.eventsEnabled.firstChange
        ) {
            this.destroy();
            this.create();
        }
    }

    create() {
        this.zone.runOutsideAngular(() => {
            const { placement, positionFixed, eventsEnabled, modifiers } = this;

            this.popper = new Popper(
                this.getTargetNode(),
                this.popoverWrap.nativeElement,
                {
                    placement,
                    positionFixed,
                    eventsEnabled,
                    modifiers: {
                        ...this.defaultModifiers,
                        ...modifiers,
                    },
                }
            );
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

    private getTargetNode(): Element {
        if (!this.target) {
            return this.el.nativeElement;
        }
        if (typeof this.target === 'string') {
            return document.querySelector(this.target);
        } else {
            return this.target;
        }
    }

}
