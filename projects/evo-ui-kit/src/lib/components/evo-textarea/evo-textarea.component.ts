import {
    Component,
    EventEmitter,
    forwardRef,
    Input,
    Output,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Injector,
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {EvoBaseControl} from '../../common/evo-base-control';
import {EvoControlStates} from '../../common/evo-control-state-manager/evo-control-states.enum';
import {EvoTextareaSize} from './types/evo-textarea-size';

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
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvoTextareaComponent extends EvoBaseControl implements ControlValueAccessor {
    @Input() size: EvoTextareaSize = 'normal';
    @Input() placeholder = '';
    @Input() rows = 3;

    @Output() blur = new EventEmitter<void>();

    value: string = '';

    private _focused = false;
    private _disabled = false;

    constructor(protected injector: Injector, private readonly cdr: ChangeDetectorRef) {
        super(injector);
    }

    get textareaClasses(): {[cssClass: string]: boolean} {
        return {
            focused: this._focused,
            disabled: this._disabled,
            valid: this.currentState[EvoControlStates.valid],
            invalid: this.currentState[EvoControlStates.invalid],
            [`size_${this.size}`]: this.size !== 'normal',
        };
    }

    handleOnChange(event: Event): void {
        const target = event.target as HTMLTextAreaElement;
        this.value = target.value;
        this.onChange(this.value);
    }

    onFocus(): void {
        if (!this._focused && !this._disabled) {
            this._focused = true;
            this.cdr.markForCheck();
        }
    }

    onBlur(): void {
        this._focused = false;
        if (this.value) {
            this.value = this.value.trim();
        }
        this.onTouched();
        this.blur.emit();
        this.cdr.markForCheck();
    }

    onChange = (_) => {};
    onTouched = () => {};

    registerOnChange(fn: never): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: never): void {
        this.onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        this._disabled = isDisabled;
        this.cdr.markForCheck();
    }

    writeValue(value: string): void {
        console.log(value);
        this.value = value ?? '';
        this.cdr.markForCheck();
    }
}
