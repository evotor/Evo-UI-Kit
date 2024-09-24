import {AfterViewInit, ChangeDetectionStrategy, Component, forwardRef, OnDestroy} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {Maskito} from '@maskito/core';
import {maskitoDateRangeOptionsGenerator} from '@maskito/kit';
import {formatDate} from '@angular/common';
import {AbstractInputDateComponent} from '../../classes/abstract-input-date.component';
import {DATE_SEPARATOR, MASKITO_DATE_MODE} from '../../constants';
import {parse} from 'date-fns';
import {DATE_RANGE_SEPARATOR} from '../../constants/date-range-separator';
import {DATE_COMPOSE_FORMAT} from '../../constants/date-compose-format';

@Component({
    selector: 'evo-input-date-range',
    templateUrl: './evo-input-date-range.component.html',
    styleUrls: ['../../assets/evo-input-date-common.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => EvoInputDateRangeComponent),
            multi: true,
        },
    ],
})
export class EvoInputDateRangeComponent
    extends AbstractInputDateComponent
    implements ControlValueAccessor, AfterViewInit, OnDestroy {
    startDate: Date = new Date();
    endDate: Date = new Date();

    writeValue(dates: [Date, Date]): void {
        this.startDate = dates ? dates[0] : undefined;
        this.endDate = dates ? dates[1] : undefined;
        this.cdr.detectChanges();
    }

    /**
     * input ngModel value formatter
     */
    get inputValue(): string {
        return this.startDate && this.endDate
            ? `${formatDate(this.startDate, DATE_COMPOSE_FORMAT, this.locale)}` +
                  `${DATE_RANGE_SEPARATOR}` +
                  `${formatDate(this.endDate, DATE_COMPOSE_FORMAT, this.locale)}`
            : '';
    }

    /**
     * input ngModel value parser
     */
    set inputValue(value: string) {
        const dates: [Date, Date] = this.getRangeFromString(value);
        if (dates) {
            this.changeValue(dates);
            this._isCalendarOpen$.next(false);
        } else {
            this._isCalendarOpen$.next(true);
        }
    }

    onInputChange(event: Event): void {
        const input = event?.target as HTMLInputElement;
        if (!input.value || !this.getRangeFromString(input.value)) {
            this.changeValue(null);
            (event?.target as HTMLInputElement).value = '';
        }
    }

    onSelectedDate(dates: [Date, Date]): void {
        this.writeValue(dates);
        this.onChange(dates);
    }

    /**
     * Change ngControl value
     *
     * @param dates
     */
    protected changeValue(dates: [Date, Date]): void {
        this.startDate = dates[0];
        this.endDate = dates[1];
        this.onChange(dates);
    }

    /**
     * Parse full date from string
     *
     * @param value
     */
    protected getRangeFromString(value: string): [Date, Date] {
        if (value.length !== MASKITO_DATE_MODE.length * 2 + DATE_RANGE_SEPARATOR.length) {
            return null;
        }
        const valuesList = (event?.target as HTMLInputElement)?.value.split(DATE_RANGE_SEPARATOR);
        const parsedStart = parse(valuesList[0], `dd.MM.yyyy`, new Date());
        const parsedEnd = parse(valuesList[1], `dd.MM.yyyy`, new Date());
        return isNaN(parsedStart.valueOf()) || isNaN(parsedEnd.valueOf()) ? null : [parsedStart, parsedEnd];
    }

    protected initInputMaskSubscription(): void {
        this._maskitoInstance = new Maskito(
            this.inputElement.nativeElement,
            maskitoDateRangeOptionsGenerator({
                mode: 'dd/mm/yyyy',
                dateSeparator: DATE_SEPARATOR,
                rangeSeparator: DATE_RANGE_SEPARATOR,
            }),
        );
    }
}
