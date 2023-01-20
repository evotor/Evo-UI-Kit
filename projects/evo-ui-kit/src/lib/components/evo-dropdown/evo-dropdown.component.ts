import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnChanges,
    Output,
    SimpleChanges,
} from '@angular/core';
import { EvoDropdownOriginDirective } from './evo-dropdown-origin.directive';
import { ConnectedPosition } from '@angular/cdk/overlay';
import { EVO_DROPDOWN_POSITION_DESCRIPTION } from './evo-dropdown-position-description';
import { EvoDropdownPositions } from './types/evo-dropdown-positions';

type Position = EvoDropdownPositions | ConnectedPosition;

const DEFAULT_POSITION = [EVO_DROPDOWN_POSITION_DESCRIPTION['bottom-right']];

@Component({
    selector: 'evo-dropdown',
    templateUrl: './evo-dropdown.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvoDropdownComponent implements OnChanges {
    @Input() dropdownOrigin!: EvoDropdownOriginDirective;
    @Input() set positions(value: Position[] | Position) {
        this.connectedPositions = value ? [].concat(value).map(p => EVO_DROPDOWN_POSITION_DESCRIPTION[p] || p) : DEFAULT_POSITION;
    }
    connectedPositions: ConnectedPosition[] = DEFAULT_POSITION;

    // @Input() needCloseOnOutsideClick = true; // TODO: add after update to ng12

    /**
     * Whether to automatically scroll to dropdown view when opened
     */
    @Input() autoScrollIntoView = false;

    @Input() isOpen = false;
    @Output() isOpenChange = new EventEmitter<boolean>();

    constructor(private cdr: ChangeDetectorRef, private el: ElementRef) {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.isOpen?.currentValue !== changes.isOpen?.previousValue) {
            this.scrollIntoViewIfNeed();
        }
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
        this.scrollIntoViewIfNeed();
        this.cdr.markForCheck();
    }

    close(): void {
        if (!this.isOpen) {
            return;
        }

        this.isOpen = false;
        this.isOpenChange.emit(this.isOpen);
        this.cdr.markForCheck();
    }

    private scrollIntoViewIfNeed() {
        if (!(this.autoScrollIntoView && this.isOpen)) {
            return;
        }

        this.el.nativeElement.scrollIntoViewIfNeeded
            ? this.el.nativeElement.scrollIntoViewIfNeeded()
            : this.el.nativeElement.scrollIntoView();
    }
}
