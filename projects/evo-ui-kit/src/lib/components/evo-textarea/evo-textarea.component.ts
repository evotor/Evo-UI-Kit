import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { EvoBaseControl } from '../../common/evo-base-control';
import { EvoControlStates } from '../../common/evo-control-state-manager/evo-control-states.enum';

@Component({
  selector: 'evo-textarea',
  templateUrl: './evo-textarea.component.html',
  styleUrls: [ './evo-textarea.component.scss' ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => EvoTextareaComponent),
            multi: true,
        },
    ],
})
export class EvoTextareaComponent extends EvoBaseControl implements ControlValueAccessor {
    @Input() placeholder: string;

    _value: string;
    disabled = false;
    focused = false;

    onFocus(): void {
        if (!this.focused) {
            this.focused = true;
        }
    }

    onBlur(): void {
        this.focused = false;
        this.onTouched();
    }

    get value(): string {
        return this._value;
    }

    set value(value: string) {
        this._value = value.trim();
        this.onChange(this.value);
    }

    onChange = (_) => {};
    onTouched = () => {};

    constructor() {
        super();
    }

    get textareaClasses(): { [ cssClass: string ]: boolean } {
        return {
            'focused': this.focused,
            'disabled': this.disabled,
            'valid': this.currentState[ EvoControlStates.valid ],
            'invalid': this.currentState[ EvoControlStates.invalid ],
        };
    }

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
