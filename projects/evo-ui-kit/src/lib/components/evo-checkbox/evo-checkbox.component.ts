import {
    ChangeDetectorRef,
    Component,
    ElementRef,
    EventEmitter,
    forwardRef,
    Injector,
    Input,
    Output,
    ViewChild,
} from '@angular/core';
import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR} from '@angular/forms';
import {EvoControlStates} from '../../common/evo-control-state-manager/evo-control-states.enum';
import {EvoBaseControl} from '../../common/evo-base-control';
import {EvoControlErrorComponent} from '../evo-control-error';
import {EvoUiClassDirective} from '../../directives';

@Component({
    selector: 'evo-checkbox',
    templateUrl: './evo-checkbox.component.html',
    styleUrls: ['./evo-checkbox.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => EvoCheckboxComponent),
            multi: true,
        },
    ],
    standalone: true,
    imports: [FormsModule, EvoUiClassDirective, EvoControlErrorComponent],
})
export class EvoCheckboxComponent extends EvoBaseControl implements ControlValueAccessor {
    @Input('indeterminate') set setIndeterminate(value) {
        this.indeterminate = value;
    }

    @Output() indeterminateChange = new EventEmitter<boolean>();

    @ViewChild('inputElement') inputElement: ElementRef;

    indeterminate = undefined;

    disabled = false;
    value: boolean;

    constructor(
        protected injector: Injector,
        private readonly cdr: ChangeDetectorRef,
    ) {
        super(injector);
    }

    // eslint-disable-next-line
    onChange = (_value: boolean): void => {}
    onTouched = (): void => {}

    get checkboxClass() {
        return {
            invalid: this.currentState[EvoControlStates.invalid],
        };
    }

    onInputChange(value: boolean): void {
        this.value = value;
        this.onChange(value);

        if (this.indeterminate === true) {
            this.indeterminate = false;
            this.indeterminateChange.emit(false);
        }

        this.cdr.markForCheck();
    }

    writeValue(value: boolean): void {
        this.value = value;
        this.cdr.markForCheck();
    }

    // eslint-disable-next-line
    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    // eslint-disable-next-line
    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState(state: boolean): void {
        this.disabled = state;
        this.cdr.markForCheck();
    }
}
