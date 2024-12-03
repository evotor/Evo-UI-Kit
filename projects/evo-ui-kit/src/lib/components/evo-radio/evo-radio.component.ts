import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {EvoBaseControl} from '../../common/evo-base-control';
import {isEqual} from 'lodash-es';

@Component({
    selector: 'evo-radio',
    templateUrl: './evo-radio.component.html',
    styleUrls: ['./evo-radio.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => EvoRadioComponent),
            multi: true,
        },
    ],
    standalone: true,
})
export class EvoRadioComponent extends EvoBaseControl implements ControlValueAccessor {
    @Input() forceChecked: boolean;
    // eslint-disable-next-line
    @Input() value: any;
    @Input() name: string;

    disabled: boolean;

    onChange = (_) => {};
    onTouch = () => {};

    get checked() {
        return this.control ? isEqual(this.control.value, this.value) || this.forceChecked : this.forceChecked;
    }

    handleOnChange() {
        this.onChange(this.value);
    }

    // eslint-disable-next-line
    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    // eslint-disable-next-line
    registerOnTouched(fn: any): void {
        this.onTouch = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    // eslint-disable-next-line
    writeValue(obj: any): void {}
}
