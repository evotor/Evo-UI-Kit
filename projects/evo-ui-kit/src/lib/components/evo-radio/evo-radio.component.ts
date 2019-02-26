import { Component, forwardRef, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'evo-radio',
    templateUrl: './evo-radio.component.html',
    styleUrls: [ './evo-radio.component.scss' ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => EvoRadioComponent),
            multi: true,
        },
    ],
})
export class EvoRadioComponent implements OnInit, ControlValueAccessor {
    get value(): any {
        return this._value;
    }

    @Input()
    set value(value: any) {
        this._value = value;
    }

    @Input() name: string;
    checked = false;

    private _value: any;
    onChange = (_) => {
    }
    onTouch = () => {
    }

    ngOnInit(): void {
    }

    handleOnChange() {
        this.onChange(this.value);
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouch = fn;
    }

    setDisabledState(isDisabled: boolean): void {
    }

    writeValue(obj: any): void {
        this.checked = this.value === obj;
    }
}
