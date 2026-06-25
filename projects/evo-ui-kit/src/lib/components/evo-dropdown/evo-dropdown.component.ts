import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output} from '@angular/core';
import {EvoDropdownOriginDirective} from './evo-dropdown-origin.directive';
import {CdkConnectedOverlay, ConnectedPosition, ScrollStrategy} from '@angular/cdk/overlay';
import {EVO_DROPDOWN_POSITION_DESCRIPTION} from './evo-dropdown-position-description';
import {EvoDropdownPositions} from './types/evo-dropdown-positions';
import {EvoScrollStrategy, EvoScrollStrategyOptions} from '../../common/scroll';

type Position = EvoDropdownPositions | ConnectedPosition;

const DEFAULT_POSITION = [EVO_DROPDOWN_POSITION_DESCRIPTION['bottom-right']];
const DEFAULT_SCROLL_STRATEGY: EvoScrollStrategy = 'close';

@Component({
    selector: 'evo-dropdown',
    templateUrl: './evo-dropdown.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [CdkConnectedOverlay],
})
export class EvoDropdownComponent {
    @Input() closeOnOutsideClick = true;
    @Input() dropdownOrigin!: EvoDropdownOriginDirective;

    @Output() isOpenChange = new EventEmitter<boolean>();
    @Output() outsideClick = new EventEmitter<MouseEvent>();

    connectedPositions: ConnectedPosition[] = DEFAULT_POSITION;

    connectedScrollStrategy: ScrollStrategy;

    private _isOpen = false;

    get isOpen(): boolean {
        return this._isOpen;
    }

    @Input() set isOpen(value: boolean) {
        this._isOpen = value;
    }

    @Input() set positions(value: Position[] | Position) {
        this.connectedPositions = value
            ? [].concat(value).map((p) => EVO_DROPDOWN_POSITION_DESCRIPTION[p] || p)
            : DEFAULT_POSITION;
    }

    @Input() set scrollStrategy(strategy: EvoScrollStrategy) {
        this.connectedScrollStrategy = this.createScrollStrategy(strategy);
    }

    constructor(
        private readonly evoScrollStrategyOptions: EvoScrollStrategyOptions,
        private readonly cdr: ChangeDetectorRef,
    ) {
        this.connectedScrollStrategy = this.createScrollStrategy(DEFAULT_SCROLL_STRATEGY);
    }

    private createScrollStrategy(strategy: EvoScrollStrategy): ScrollStrategy {
        // getOrigin is resolved lazily on enable(), so the dropdown origin input does not
        // need to be set before the strategy is created.
        return this.evoScrollStrategyOptions.create(strategy, {
            getOrigin: () => this.dropdownOrigin?.elementRef?.nativeElement ?? null,
        });
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

        this.cdr.detectChanges();
    }

    onOverlayOutsideClick(event: MouseEvent): void {
        this.outsideClick.emit(event);

        const originNativeElement = this.dropdownOrigin?.elementRef?.nativeElement;

        // check if origin is clicked through overlay
        if (this.closeOnOutsideClick && !originNativeElement?.contains(event.target)) {
            this.close();
        }
    }
}
