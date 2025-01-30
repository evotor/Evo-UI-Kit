import {Component, EventEmitter, forwardRef, Input, Output} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { EvoBaseControl } from '../../common/evo-base-control';
import { EvoControlStates } from '../../common/evo-control-state-manager/evo-control-states.enum';
import { EvoTextareaSize } from './types/evo-textarea-size';

@Component({
    selector: 'evo-textarea',
    templateUrl: './evo-textarea.component.html',
    styleUrls: ['./evo-textarea.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => EvoTextareaComponent),
            multi: true,
        },
    ],
})
export class EvoTextareaComponent extends EvoBaseControl implements ControlValueAccessor {
    @Input() size: EvoTextareaSize = 'normal';
    @Input() placeholder = '';
    @Input() rows = 3;

    @Output() blur = new EventEmitter<void>();

    _value: string;
    disabled = false;
    focused = false;

    get value(): string {
        return this._value;
    }

    get textareaClasses(): {[cssClass: string]: boolean} {
        return {
            'focused': this.focused,
            'disabled': this.disabled,
            'valid': this.currentState[EvoControlStates.valid],
            'invalid': this.currentState[EvoControlStates.invalid],
            [`size_${this.size}`]: this.size !== 'normal',
        };
    }

    set value(value: string) {
        this._value = value.trim();
        this.onChange(this.value);
    }

    onFocus(): void {
        if (!this.focused) {
            this.focused = true;
        }
    }

    onBlur(): void {
        this.focused = false;
        this.onTouched();
        this.blur.emit();
    }

    onChange = (_) => {};
    onTouched = () => {};

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    writeValue(value: string): void {
        this.value = value;
    }

}
