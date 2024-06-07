import {Component, forwardRef, Input} from '@angular/core';
import {EvoBaseControl} from '../../../common/evo-base-control';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {isEqual} from 'lodash-es';

@Component({
    selector: 'evo-radioshape',
    templateUrl: 'evo-radioshape.component.html',
    styleUrls: ['evo-radioshape.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => EvoRadioshapeComponent),
            multi: true,
        },
    ],
})
export class EvoRadioshapeComponent extends EvoBaseControl implements ControlValueAccessor {
    @Input() forceChecked: boolean;
    // eslint-disable-next-line
    @Input() value: any;
    @Input() name = Math.random();

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
