import {AfterViewInit, ChangeDetectionStrategy, Component, forwardRef, OnDestroy, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {getDateByCalendarDay} from '../../../evo-calendar';
import {maskitoDateOptionsGenerator, maskitoDateTimeOptionsGenerator} from '@maskito/kit';
import {Maskito, MaskitoOptions} from '@maskito/core';
import {formatDate} from '@angular/common';
import {parse} from 'date-fns';
import {DATE_SEPARATOR, DATE_TIME_SEPARATOR, MASKITO_DATE_MODE, MASKITO_DATE_OPTIONS_DEFAULTS} from '../../constants';
import {combineLatest} from 'rxjs';
import {takeUntil, tap} from 'rxjs/operators';
import {AbstractInputDateComponent} from '../../classes/abstract-input-date.component';
import {DATE_PARSE_FORMAT} from '../../constants/date-parse-format';
import {DATE_COMPOSE_FORMAT} from '../../constants/date-compose-format';
import {DATE_TIME_COMPOSE_FORMAT} from '../../constants/date-time-compose-format';

@Component({
    selector: 'evo-input-date',
    templateUrl: './evo-input-date.component.html',
    styleUrls: ['../../assets/evo-input-date-common.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => EvoInputDateComponent),
            multi: true,
        },
    ],
})
export class EvoInputDateComponent
    extends AbstractInputDateComponent
    implements ControlValueAccessor, OnInit, AfterViewInit, OnDestroy {
    date: Date = new Date();

    /**
     * input ngModel value formatter
     */
    get inputValue(): string {
        return this.date
            ? formatDate(this.date, this.hasTime ? DATE_TIME_COMPOSE_FORMAT : DATE_COMPOSE_FORMAT, this.locale)
            : '';
    }

    /**
     * input ngModel value parser
     */
    set inputValue(value: string) {
        const date: Date = this.getDateFromString(value);
        if (date) {
            this.changeValue(date);
            this._isCalendarOpen$.next(false);
        } else {
            this._isCalendarOpen$.next(true);
        }
    }

    onInputChange(event: Event): void {
        const input = event?.target as HTMLInputElement;
        if (!input.value || !this.getDateFromString(input.value)) {
            this.changeValue(null);
            (event?.target as HTMLInputElement).value = '';
        }
    }

    /**
     * Handle date selection via Calendar
     *
     * @param date
     */
    onCalendarDateChange(date: Date): void {
        this.changeValue(date);
    }

    writeValue(date: Date): void {
        this.date = date;
        this.cdr.detectChanges();
    }

    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    protected initInputMaskSubscription(): void {
        combineLatest([this._hasTime$, this._minCalendarDay$, this._maxCalendarDay$])
            .pipe(
                tap(([hasTime, min, max]) =>
                    this.initInputMask(hasTime, getDateByCalendarDay(min), getDateByCalendarDay(max)),
                ),
                takeUntil(this._destroy$),
            )
            .subscribe();
    }

    /**
     * Change ngControl value
     *
     * @param date
     */
    protected changeValue(date: Date): void {
        this.date = date;
        this.onChange(date);
    }

    /**
     * Parse full date from string
     *
     * @param value
     */
    protected getDateFromString(value: string): Date {
        if (value.length !== MASKITO_DATE_MODE.length) {
            return null;
        }
        const parsedDate = parse((event?.target as HTMLInputElement)?.value, DATE_PARSE_FORMAT, new Date());
        return isNaN(parsedDate.valueOf()) ? null : parsedDate;
    }

    protected initInputMask(hasTime: boolean, min: Date, max: Date): void {
        const maskitoOptions: MaskitoOptions = {
            ...MASKITO_DATE_OPTIONS_DEFAULTS,
            ...(hasTime
                ? maskitoDateTimeOptionsGenerator({
                      dateMode: MASKITO_DATE_MODE,
                      timeMode: this.timeMode,
                      dateSeparator: DATE_SEPARATOR,
                      dateTimeSeparator: DATE_TIME_SEPARATOR,
                      ...(min ? {min} : {}),
                      ...(max ? {max} : {}),
                  })
                : maskitoDateOptionsGenerator({
                      mode: MASKITO_DATE_MODE,
                      separator: DATE_SEPARATOR,
                      ...(min ? {min} : {}),
                      ...(max ? {max} : {}),
                  })),
        };
        this._maskitoInstance = new Maskito(this.inputElement.nativeElement, maskitoOptions);
    }
}
