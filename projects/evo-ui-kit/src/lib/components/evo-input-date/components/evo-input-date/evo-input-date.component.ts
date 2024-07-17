import {ChangeDetectionStrategy, Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';
import {ScrollStrategyOptions} from '@angular/cdk/overlay';

@Component({
    selector: 'evo-input-date',
    templateUrl: './evo-input-date.component.html',
    styleUrls: ['./evo-input-date.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => EvoInputDateComponent),
            multi: true,
        },
    ],
})
export class EvoInputDateComponent implements ControlValueAccessor {
    @Input() disabled = false;
    @Input() min = '1000-01-01';
    @Input() max = '9999-12-31';
    @Input() hasTime = false;

    isOpen = false;
    value: Date = new Date();
    readonly valueControl = new FormControl(this.value, [Validators.required]);
    readonly scrollStrategy = this.scrollStrategyOptions.close();

    constructor(private readonly scrollStrategyOptions: ScrollStrategyOptions) {}

    onChange: any = (): void => {};
    onTouched: any = (): void => {};

    writeValue(date: Date): void {
        this.value = date;
        this.valueControl.setValue(date);
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
            return;
        }

        const dateValue = new Date(inputElement.value);
        this.value = dateValue;
        this.valueControl.setValue(dateValue);
        this.onChange(dateValue);
        this.onTouched();
    }

    onSelectedDate(date: Date): void {
        this.value = date;
        this.valueControl.setValue(date);
        this.onChange(date);
    }
}
