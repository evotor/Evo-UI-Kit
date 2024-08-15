import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    forwardRef,
    Inject,
    Input,
    LOCALE_ID,
    OnDestroy,
    ViewChild,
} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';
import {CalendarDay} from '../../../evo-calendar';
import {Maskito} from '@maskito/core';
import {maskitoDateRangeOptionsGenerator} from '@maskito/kit';
import {formatDate} from '@angular/common';

const RANGE_SEPARATOR = ' – ';
const DATE_SEPARATOR = '.';

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
export class EvoInputDateRangeComponent implements ControlValueAccessor, AfterViewInit, OnDestroy {
    @Input() disabled = false;
    @Input() min: CalendarDay;
    @Input() max: CalendarDay;
    @Input() hasTime = false;

    isOpen = false;
    startDate: Date = new Date();
    endDate: Date = new Date();
    maskedInput: Maskito = null;

    readonly startDateControl = new FormControl(this.startDate, [Validators.required]);
    readonly endDateControl = new FormControl(this.endDate, [Validators.required]);

    @ViewChild('inputElement', {read: ElementRef}) private readonly inputElement: ElementRef;

    constructor(@Inject(LOCALE_ID) private readonly locale: string) {}

    get inputValue(): string {
        return `${this.startDate ? formatDate(this.startDate, 'dd.MM.YYYY', this.locale) : ''} – ${
            this.endDate ? formatDate(this.endDate, 'dd.MM.YYYY', this.locale) : ''
        }`;
    }

    set inputValue(value) {}

    onInputFocus(): void {}

    onInputBlur(): void {}

    ngAfterViewInit(): void {
        this.maskedInput = new Maskito(
            this.inputElement.nativeElement,
            maskitoDateRangeOptionsGenerator({
                mode: 'dd/mm/yyyy',
                dateSeparator: DATE_SEPARATOR,
                rangeSeparator: RANGE_SEPARATOR,
            }),
        );
    }

    ngOnDestroy(): void {
        if (!this.maskedInput) {
            return;
        }
        this.maskedInput.destroy();
    }

    onChange: any = (): void => {};
    onTouched: any = (): void => {};

    writeValue(dates: [Date, Date]): void {
        this.startDate = dates ? dates[0] : undefined;
        this.endDate = dates ? dates[1] : undefined;
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
