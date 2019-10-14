import {
    Component,
    HostListener,
    Input,
    ElementRef,
    NgZone,
    AfterViewInit,
    OnChanges,
    OnDestroy,
    SimpleChanges,
    ViewChild
} from '@angular/core';
import Popper from 'popper.js';

const DEFAULT_DELAY = {
    show: 0,
    hide: 100,
};

export type EvoPopoverPosition = 'center' | Popper.Placement;

export interface EvoPopoverDelay {
    show?: number;
    hide?: number;
}

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

    @Input('delay') set setDelay(value: any) {
        if (typeof value === 'number' && value >= 0) {
            this.delay = {
                show: value,
                hide: value,
            };
            return;
        }

        if (typeof value === 'object') {
            this.delay = {
                show: value.show >= 0 ? value.show : DEFAULT_DELAY.show,
                hide: value.hide >= 0 ? value.hide : DEFAULT_DELAY.hide,
            };
            return;
        }

        this.delay.show = DEFAULT_DELAY.show;
        this.delay.hide = DEFAULT_DELAY.hide;
    }

    @ViewChild('popover', {static: false}) el: ElementRef;
    @ViewChild('popoverWrap', {static: false}) popoverWrap: ElementRef;

    private popper: Popper;
    private placement: Popper.Placement = 'bottom';
    private delay: EvoPopoverDelay = {};
    private visibilityTimeout = null;

    // Old API Map
    private positionMap = {'center': 'bottom'};
    private arrowSize = 16;
    private borderRadius = 6;
    private defaultModifiers = {
        offset: {
            // Modifier for Arrow offset
            fn: data => {
                const {offsets, placement, arrowStyles} = data;
                const {reference, popper} = offsets;
                if (placement === 'bottom-start' && ((reference.width / 2) + this.arrowSize) > popper.width) {
                    arrowStyles.left = popper.width - this.arrowSize - this.borderRadius + 'px';
                }
                if (placement === 'bottom-end' && ((reference.width / 2) + this.arrowSize) > popper.width) {
                    arrowStyles.left = this.borderRadius + 'px';
                }
                return data;
            }
        }
    };

    constructor(
        private zone: NgZone,
    ) {
    }

    ngAfterViewInit() {
        this.create();
    }

    ngOnDestroy() {
        this.destroy();
    }

    ngOnChanges(changes: SimpleChanges) {
        const {target, position, positionFixed, eventsEnabled} = changes;
        if (
            target && !target.firstChange ||
            position && !position.firstChange ||
            positionFixed && !positionFixed.firstChange ||
            eventsEnabled && !eventsEnabled.firstChange
        ) {
            this.destroy();
            this.create();
        }
    }

    create() {
        this.zone.runOutsideAngular(() => {
            const {placement, positionFixed, eventsEnabled, modifiers} = this;

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
        const delayValue = this.delay && this.delay[action] > 0 ? this.delay[action] : 0;
        const toggle = () => {
            if (show) {
                this.showPopover();
            } else {
                this.hidePopover();
            }
        };
        if (this.visibilityTimeout) {
            clearTimeout(this.visibilityTimeout);
        }
        if (delayValue > 0) {
            this.visibilityTimeout = setTimeout(() => {
                toggle();
            }, delayValue);
        } else {
            toggle();
        }
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
