import {
    AfterViewInit,
    Component,
    ElementRef,
    HostListener,
    Input,
    NgZone,
    OnChanges,
    OnDestroy,
    SimpleChanges,
    ViewChild,
} from '@angular/core';
import {createPopper, Instance, Modifier, Placement, PositioningStrategy} from '@popperjs/core';
import {asyncScheduler, Subject} from 'rxjs';
import {observeOn, takeUntil, tap} from 'rxjs/operators';

export type EvoPopoverPosition = 'center' | Placement;

export interface EvoPopoverDelay {
    show?: number;
    hide?: number;
}

const DEFAULT_DELAY = {
    show: 0,
    hide: 100,
};

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
    @Input() strategy: PositioningStrategy = 'absolute';

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

    @ViewChild('popover') el: ElementRef;
    @ViewChild('popoverWrap') popoverWrap: ElementRef;

    private popper: Instance;
    private placement: Placement = 'bottom';
    private delay: EvoPopoverDelay = {};
    private visibilityTimeout = null;
    // Old API Map
    private positionMap = {'center': 'bottom'};
    private update$ = new Subject<void>();
    private subscriptions$ = new Subject<void>();

    constructor(
        private zone: NgZone,
    ) {
    }

    ngAfterViewInit() {
        this.create();
        this.update$.pipe(
            observeOn(asyncScheduler),
            tap(() => {
                if (this.popper) {
                    this.popper.update();
                }
            }),
            takeUntil(this.subscriptions$),
        ).subscribe();
    }

    ngOnDestroy() {
        this.destroy();
        this.subscriptions$.next();
        this.subscriptions$.complete();
    }

    ngOnChanges(changes: SimpleChanges) {
        const position = changes.position;
        if (position && !position.firstChange) {
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
                    strategy: this.strategy,
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
        this.popper.update();
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

}
