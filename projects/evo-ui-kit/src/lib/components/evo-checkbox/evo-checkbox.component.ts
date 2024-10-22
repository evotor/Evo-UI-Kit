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
import {EvoControlErrorComponent} from '../evo-control-error/evo-control-error.component';
import {EvoUiClassDirective} from '../../directives/evo-ui-class.directive';

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
    private _value: boolean;

    constructor(
        protected injector: Injector,
        private readonly cdr: ChangeDetectorRef,
    ) {
        super(injector);
    }

    onChange(_) {}

    onTouched() {}

    get value(): boolean {
        return this._value;
    }

    set value(value: boolean) {
        this._value = value;
        this.onChange(value);
        this.cdr.detectChanges();
    }

    get checkboxClass() {
        return {
            invalid: this.currentState[EvoControlStates.invalid],
        };
    }

    onInputChange(value) {
        this.value = value;
        if (this.indeterminate === true) {
            this.indeterminate = false;
            this.indeterminateChange.emit(false);
        }
    }

    writeValue(value: boolean): void {
        this._value = value;
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
        this.cdr.detectChanges();
    }
}
