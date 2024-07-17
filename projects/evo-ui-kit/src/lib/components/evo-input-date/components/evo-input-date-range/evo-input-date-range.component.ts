import {ChangeDetectionStrategy, Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';

enum DatePosition {
    FIRST = 0,
    SECOND = 1,
}

@Component({
    selector: 'evo-input-date-range',
    templateUrl: './evo-input-date-range.component.html',
    styleUrls: ['./evo-input-date-range.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => EvoInputDateRangeComponent),
            multi: true,
        },
    ],
})
export class EvoInputDateRangeComponent implements ControlValueAccessor {
    @Input() disabled = false;
    @Input() min = '1000-01-01';
    @Input() max = '9999-12-31';
    @Input() hasTime = false;

    startDate: Date = new Date();
    endDate: Date = new Date();
    readonly startDateControl = new FormControl(this.startDate, [Validators.required]);
    readonly endDateControl = new FormControl(this.endDate, [Validators.required]);

    onChange: any = (): void => {};
    onTouched: any = (): void => {};

    writeValue(dates: [Date, Date]): void {
        this.startDate = dates ? dates[DatePosition.FIRST] : undefined;
        this.endDate = dates ? dates[DatePosition.SECOND] : undefined;
        this.startDateControl.setValue(this.startDate);
        this.endDateControl.setValue(this.endDate);
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

    updateStartValue(event: Event): void {
        const inputElement = event.target as HTMLInputElement;

        if (this.startDateControl.invalid) {
            return;
        }

        const dateValue = new Date(inputElement.value);
        this.startDate = dateValue;
        this.startDateControl.setValue(dateValue);
        this.onChange(dateValue);
        this.onTouched();
    }

    updateEndValue(event: Event): void {
        const inputElement = event.target as HTMLInputElement;

        if (this.endDateControl.invalid) {
            return;
        }

        const dateValue = new Date(inputElement.value);
        this.endDate = dateValue;
        this.endDateControl.setValue(dateValue);
        this.onChange(dateValue);
        this.onTouched();
    }

    onSelectedDate(dates: [Date, Date]): void {
        this.writeValue(dates);
        this.onChange(dates);
    }
}
