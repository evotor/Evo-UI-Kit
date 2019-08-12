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

    // @Input() show = true;
    @Input() positionFixed = false;
    @Input() eventsEnabled = true;
    @Input() modifiers: Popper.Modifiers;
    @Input() target: string | Element;
    @ViewChild('popoverWrap') popoverWrap: ElementRef;

    private popper: Popper;
    private placement: Popper.Placement = 'bottom';
    // Old API Map
    private positionMap = {
        'center': 'bottom',
    };

    constructor(
        private el: ElementRef,
        private zone: NgZone,
    ) { }

    ngAfterViewInit() {
        console.log(this.el);

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
                    modifiers
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

    private getTargetNode(): Element {
        if (this.target) {
            if (typeof this.target === 'string') {
                return document.querySelector(this.target);
            } else {
                return this.target;
            }
        } else {
            return this.el.nativeElement;
        }
    }

}
