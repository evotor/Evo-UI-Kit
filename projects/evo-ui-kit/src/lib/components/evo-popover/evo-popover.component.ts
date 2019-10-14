import { Component, HostListener, Input, ElementRef, NgZone, AfterViewInit, OnChanges, OnDestroy, SimpleChanges, ViewChild } from '@angular/core';
import Popper from 'popper.js';

const DEFAULT_DELAY_SHOW = 0;
const DEFAULT_DELAY_HIDE = 100;

export type EvoPopoverPosition = 'center' | Popper.Placement;

export interface EvoPopoverDelay {
    show?: number;
    hide?: number;
}

@Component({
    selector: 'evo-popover',
    templateUrl: 'evo-popover.component.html',
    styleUrls: [ 'evo-popover.component.scss' ],
})
export class EvoPopoverComponent {

    /**
     * Расположение стрелки на media-tablet разрешении
     */
        // tslint:disable-next-line
    @Input('media-tablet-position')
    mediaTabletPosition: 'right' | 'left' | 'center' = 'center';

    /**
     * Расположение стрелки
     */
    @Input('position')
    position: 'right' | 'left' | 'center' = 'center';

    @Input() show = false;
    @Input() positionFixed = false;
    @Input() eventsEnabled = true;
    @Input() modifiers: Popper.Modifiers;
    @Input() target: string | Element;
    @ViewChild('popover', {static: false}) el: ElementRef;
    @ViewChild('popoverWrap', {static: false}) popoverWrap: ElementRef;

    private popper: Popper;
    private placement: Popper.Placement = 'bottom';
    private delay: EvoPopoverDelay = {};
    private visibilityTimeout = null;

    // Old API Map
    private positionMap = { 'center': 'bottom' };
    private popoverVisibilityTimeout = false;

    @HostListener('mouseenter')
    onEnter() {
        this.onMouseoverPopover();
    }

    @HostListener('touchend')
    onTouchEnd() {
        this.onMouseoverPopover();
    }

    @HostListener('mouseleave')
    onLeave() {
        this.onMouseleavePopover();
    }

    onClickOutside(): void {
        this.hidePopover();
    }

    showPopover(): void {
        this.show = true;
    }

    hidePopover() {
        this.show = false;
    }

    private onMouseoverPopover() {
        this.togglePopover(true);
    }

    private onMouseleavePopover() {
        this.togglePopover(false);
    }

    private togglePopover(show: boolean = false) {
        const action = show ? 'show' : 'hide';
        if (this.visibilityTimeout) {
            clearTimeout(this.visibilityTimeout);
        }
        if (this.delay && this.delay[action] > 0) {
            this.visibilityTimeout = setTimeout(() => {
                show ? this.showPopover() : this.hidePopover();
            }, this.delay[action]);
        } else {
            show ? this.showPopover() : this.hidePopover();
        }
    }
}
