import {ChangeDetectionStrategy, Component, forwardRef, Inject, Input, LOCALE_ID} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';
import {formatDate} from '@angular/common';
import {CalendarDay, getDateByCalendarDay} from '../../../evo-calendar';

import IMask from 'imask';
import {parse} from 'date-fns';

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
    @Input() min: CalendarDay;
    @Input() max: CalendarDay;
    @Input() hasTime = false;
    @Input() placeholder = 'ДД.ММ.ГГГГ';
    @Input() rangeMode: boolean;

    value: Date = new Date();

    readonly getDateByCalendarDay = getDateByCalendarDay;
    readonly valueControl = new FormControl('', [Validators.required]);

    constructor(@Inject(LOCALE_ID) private readonly locale: string) {}

    isValidDate(value: Date): boolean {
        return isNaN(value?.valueOf()) === false;
    }

    get mask(): IMask.AnyMaskedOptions {
        const momentFormat = 'dd.MM.yyyy';

        return {
            mask: Date,
            pattern: momentFormat,
            lazy: false,
            min: new Date(1970, 0, 1),
            max: new Date(2030, 0, 1),

            format: (date: Date) => {
                console.log('format', date);
                return formatDate(date, momentFormat, this.locale);
            },
            parse: (str: string) => {
                console.log('parse', parse(str, momentFormat, new Date()));
                return parse(str, momentFormat, new Date());
            },

            blocks: {
                YYYY: {
                    mask: IMask.MaskedRange,
                    from: 1970,
                    to: 2030,
                },
                MM: {
                    mask: IMask.MaskedRange,
                    from: 1,
                    to: 12,
                },
                DD: {
                    mask: IMask.MaskedRange,
                    from: 1,
                    to: 31,
                },
                HH: {
                    mask: IMask.MaskedRange,
                    from: 0,
                    to: 23,
                },
                mm: {
                    mask: IMask.MaskedRange,
                    from: 0,
                    to: 59,
                },
            },
        };
    }

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

        console.log(inputElement.value);
        const dateValue = new Date(inputElement.value);

        if (!isNaN(dateValue?.valueOf())) {
            this.value = dateValue;
            this.onChange(dateValue);
            this.onTouched();
        }
    }

    private setValueControl(date: Date): void {
        if (!date || isNaN(date.valueOf())) {
            return;
        }
        this.valueControl.setValue(formatDate(date, this.hasTime ? 'yyyy-MM-DDTHH:mm' : 'yyyy-MM-DD', this.locale));
    }
}
