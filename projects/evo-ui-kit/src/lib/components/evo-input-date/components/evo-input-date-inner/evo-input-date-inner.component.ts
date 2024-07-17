import {ChangeDetectionStrategy, Component, forwardRef, Inject, Input, LOCALE_ID} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';
import {formatDate} from '@angular/common';

@Component({
    selector: 'evo-input-date-inner',
    templateUrl: './evo-input-date-inner.component.html',
    styleUrls: ['./evo-input-date-inner.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => EvoInputDateInnerComponent),
            multi: true,
        },
    ],
})
export class EvoInputDateInnerComponent implements ControlValueAccessor {
    @Input() disabled = false;
    @Input() min = '1000-01-01';
    @Input() max = '9999-12-31';
    @Input() hasTime = false;

    value: Date = new Date();
    readonly valueControl = new FormControl('', [Validators.required]);

    constructor(@Inject(LOCALE_ID) private locale: string) {}

    onChange: any = (): void => {};
    onTouched: any = (): void => {};

    writeValue(value: Date): void {
        this.value = value;
        this.setValueControl(value);
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

    updateValue(event: Event): void {
        const inputElement = event.target as HTMLInputElement;

        if (this.valueControl.invalid) {
            this.onChange(inputElement.value);
            this.onTouched();
            return;
        }

        const dateValue = new Date(inputElement.value);
        this.value = dateValue;
        this.setValueControl(dateValue);
        this.onChange(dateValue);
        this.onTouched();
    }

    private setValueControl(date: Date): void {
        this.valueControl.setValue(
            date ? formatDate(date, this.hasTime ? 'YYYY-MM-DDTHH:mm' : 'YYYY-MM-DD', this.locale) : undefined,
        );
    }
}
