import { Component, ElementRef, EventEmitter, forwardRef, Input, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { EvoControlStates } from '../../common/evo-control-state-manager/evo-control-states.enum';
import { EvoBaseControl } from '../../common/evo-base-control';

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
})
export class EvoCheckboxComponent extends EvoBaseControl implements ControlValueAccessor {

    @Input('indeterminate') set setIndeterminate(value) {
        this.indeterminate = value;
    }

    @Output() indeterminateChange = new EventEmitter<boolean>();

    @ViewChild('inputElement', {static: false}) inputElement: ElementRef;

    indeterminate = undefined;

    disabled = false;
    private _value: boolean;

    onChange = (_) => {
    };
    onTouched = () => {
    };

    get value(): boolean {
        return this._value;
    }

    set value(value: boolean) {
        this._value = value;
        this.onChange(value);
    }

    get checkboxClass() {
        return {
            'invalid': this.currentState[EvoControlStates.invalid],
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
        this.value = value;
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState(state: boolean): void {
        this.disabled = state;
    }

}
