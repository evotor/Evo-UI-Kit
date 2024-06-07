import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    EventEmitter,
    Input,
    NgZone,
    OnDestroy,
    Output,
    ViewContainerRef,
} from '@angular/core';
import {EvoDropdownOriginDirective} from './evo-dropdown-origin.directive';
import {ConnectedPosition} from '@angular/cdk/overlay';
import {EVO_DROPDOWN_POSITION_DESCRIPTION} from './evo-dropdown-position-description';
import {EvoDropdownPositions} from './types/evo-dropdown-positions';
import {fromEvent, Subject, Subscription} from 'rxjs';
import {filter, take, takeUntil, throttleTime} from 'rxjs/operators';

type Position = EvoDropdownPositions | ConnectedPosition;

const DEFAULT_POSITION = [EVO_DROPDOWN_POSITION_DESCRIPTION['bottom-right']];

@Component({
    selector: 'evo-dropdown',
    templateUrl: './evo-dropdown.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvoDropdownComponent implements OnDestroy {
    @Input() scrollStrategy: 'noop' | 'close' = 'close';

    @Input() dropdownOrigin!: EvoDropdownOriginDirective;
    @Output() isOpenChange = new EventEmitter<boolean>();
    connectedPositions: ConnectedPosition[] = DEFAULT_POSITION;

    // @Input() needCloseOnOutsideClick = true; // TODO: add after update to ng12

    private scrollEventSubscription: Subscription;
    private readonly destroy$ = new Subject<void>();
    private _isOpen = false;

    constructor(
        protected readonly viewContainerRef: ViewContainerRef,
        private readonly ngZone: NgZone,
        private readonly cdr: ChangeDetectorRef,
    ) {}

    get isOpen(): boolean {
        return this._isOpen;
    }

    @Input() set isOpen(value: boolean) {
        this._isOpen = value;

        if (value) {
            this.listenScroll();
        }
    }

    @Input() set positions(value: Position[] | Position) {
        this.connectedPositions = value
            ? [].concat(value).map((p) => EVO_DROPDOWN_POSITION_DESCRIPTION[p] || p)
            : DEFAULT_POSITION;
    }

    private get element(): HTMLElement | null {
        if (!this.viewContainerRef) {
            return;
        }

        return this.viewContainerRef?.element instanceof ElementRef
            ? (this.viewContainerRef.element?.nativeElement as HTMLElement)
            : (this.viewContainerRef.element as HTMLElement);
    }

    toggle(): void {
        if (this.isOpen) {
            this.close();
        } else {
            this.open();
        }
    }

    open(): void {
        if (this.isOpen) {
            return;
        }

        this.isOpen = true;
        this.isOpenChange.emit(this.isOpen);
        this.cdr.detectChanges();
    }

    close(): void {
        if (!this.isOpen) {
            return;
        }

        this.isOpen = false;
        this.isOpenChange.emit(this.isOpen);

        if (this.scrollEventSubscription && !this.scrollEventSubscription.closed) {
            this.scrollEventSubscription.unsubscribe();
        }

        this.cdr.detectChanges();
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.unsubscribe();
    }

    /**
     * Listens to the scroll in the dropdown container and closes it
     */
    private listenScroll() {
        if (this.scrollStrategy === 'noop') {
            return;
        }

        this.scrollEventSubscription = this.ngZone.runOutsideAngular(() => {
            return fromEvent(document, 'scroll', {capture: true})
                .pipe(
                    throttleTime(10),
                    filter((scrollEvent: Event) => {
                        return (
                            (scrollEvent.target instanceof HTMLElement || scrollEvent.target instanceof HTMLDocument) &&
                            (scrollEvent.target.contains(this.element) || !this.element)
                        );
                    }),
                    take(1),
                    takeUntil(this.destroy$),
                )
                .subscribe(() => {
                    this.ngZone.run(() => {
                        this.close();
                    });
                });
        });
    }
}
