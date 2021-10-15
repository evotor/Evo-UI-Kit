import { ChangeDetectionStrategy, Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'evo-toggle',
    templateUrl: './evo-toggle.component.html',
    styleUrls: ['./evo-toggle.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => EvoToggleComponent),
            multi: true,
        },
    ],
})
export class EvoToggleComponent implements ControlValueAccessor {
    isDisabled = false;

    randomId = Math.random().toString(36).substr(2, 5);

    _value;

    constructor() {
    }

    get value(): any {
        return this._value;
    }

    set value(value: any) {
        if (value !== this._value) {
            this._value = value;
            this.onChange(value);
        }
    }

    get totalClasses(): string[] {
        const classes: string[] = [];

        if (this.isDisabled) {
            classes.push('disabled');
        }

        return classes;
    }

    onChange = (_value) => {};
    onTouched = () => {};

    writeValue(value: any): void {
        if (value !== this._value) {
            this._value = value;
        }
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState(state: boolean): void {
        this.isDisabled = state;
    }
}
