import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { EvoBaseControl } from '../../common/evo-base-control';

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
export class EvoRadioComponent extends EvoBaseControl implements ControlValueAccessor {
    @Input() value: any;
    @Input() name: string;
    @Input() forceChecked: boolean;

    disabled: boolean;

    onChange = (_): void => {};
    onTouch = (): void => {};

    get checked(): boolean {
        return this.forceChecked || this.control?.value === this.value;
    }

    handleOnChange(): void {
        this.onChange(this.value);
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouch = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    writeValue(obj: any): void {

    }
}
