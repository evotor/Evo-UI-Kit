import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'evo-toggle',
    templateUrl: './evo-toggle.component.html',
    styleUrls: [ './evo-toggle.component.scss' ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => EvoToggleComponent),
            multi: true,
        },
    ],
})
export class EvoToggleComponent implements OnInit, ControlValueAccessor {
    get value(): any {
        return this._value;
    }

    set value(value: any) {
        if (value !== this._value) {
            this._value = value;
            this.onChange(value);
        }
    }

    randomId = Math.random().toString(36).substr(2, 5);

    _value;
    onChange = (_value) => { };
    onTouched = () => { };

    constructor() { }

    ngOnInit() { }

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

}
