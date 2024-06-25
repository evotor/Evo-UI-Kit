import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR} from '@angular/forms';
import {EvoBaseControl} from '../../common/evo-base-control';
import {EvoControlStates} from '../../common/evo-control-state-manager/evo-control-states.enum';
import {EvoControlErrorComponent} from '../evo-control-error/evo-control-error.component';
import {EvoUiClassDirective} from '../../directives/evo-ui-class.directive';

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
    standalone: true,
    imports: [FormsModule, EvoUiClassDirective, EvoControlErrorComponent],
})
export class EvoTextareaComponent extends EvoBaseControl implements ControlValueAccessor {
    @Input() placeholder = '';

    @Input() rows = 3;

    _value: string;
    disabled = false;
    focused = false;

    get value(): string {
        return this._value;
    }

    get textareaClasses(): {[cssClass: string]: boolean} {
        return {
            focused: this.focused,
            disabled: this.disabled,
            valid: this.currentState[EvoControlStates.valid],
            invalid: this.currentState[EvoControlStates.invalid],
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
    }

    onChange = (_) => {};
    onTouched = () => {};

    // eslint-disable-next-line
    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    // eslint-disable-next-line
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
