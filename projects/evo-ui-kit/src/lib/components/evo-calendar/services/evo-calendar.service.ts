import * as dayjs from 'dayjs';
import {Injectable} from '@angular/core';
import {Calendar, CalendarDay} from '../interfaces';
import {BehaviorSubject, Observable} from 'rxjs';
import {distinctUntilChanged} from 'rxjs/operators';
import {CalendarMonthType} from '../enums';
import {CalendarMonthWithDaysList} from '../interfaces/calendar-month-with-days-list';
import {getDateByCalendarDay} from '../utils/get-date-by-calendar-day';

const DATE_NOW = new Date();
const START_OF_WEEK = 0; // 0 for Monday, 6 for Sunday

@Injectable()
export class EvoCalendarService {
    readonly DATE_NOW = DATE_NOW;
    readonly START_OF_WEEK = START_OF_WEEK;

    readonly calendar$: Observable<Calendar>;

    readonly startDate$: Observable<Date>;
    readonly endDate$: Observable<Date>;

    readonly isRangeMode$: Observable<boolean>;
    readonly isRangeStarted$: Observable<boolean>;

    get calendar(): Calendar {
        return this._calendar$.value;
    }

    get maxCalendarDay(): CalendarDay {
        return this._maxCalendarDay$.value;
    }

    get minCalendarDay(): CalendarDay {
        return this._minCalendarDay$.value;
    }

    get maxCalendarDayDate(): Date {
        return getDateByCalendarDay(this.maxCalendarDay);
    }

    get minCalendarDayDate(): Date {
        return getDateByCalendarDay(this.minCalendarDay);
    }

    get startDate(): Date {
        return this._startDate$.value;
    }

    get endDate(): Date {
        return this._endDate$.value;
    }

    get isRangeMode(): boolean {
        return this._isRangeMode$.value;
    }

    get isSelectingRange(): boolean {
        return this._isSelectingRange$.value;
    }

    private readonly _calendar$ = new BehaviorSubject<Calendar>(this.getCalendarByDate(DATE_NOW));
    private readonly _startDate$ = new BehaviorSubject<Date>(undefined);
    private readonly _endDate$ = new BehaviorSubject<Date>(undefined);
    private readonly _isRangeMode$ = new BehaviorSubject<boolean>(false);
    private readonly _isSelectingRange$ = new BehaviorSubject<boolean>(false);
    private readonly _minCalendarDay$ = new BehaviorSubject<CalendarDay>(undefined);
    private readonly _maxCalendarDay$ = new BehaviorSubject<CalendarDay>(undefined);

    constructor() {
        this.calendar$ = this._calendar$.asObservable();
        this.startDate$ = this._startDate$.asObservable();
        this.endDate$ = this._endDate$.asObservable();
        this.isRangeMode$ = this._isRangeMode$.pipe(distinctUntilChanged());
    }

    setCalendarByDate(date: Date): void {
        this._calendar$.next(this.getCalendarByDate(date ?? DATE_NOW));
    }

    setMaxCalendarDay(date: CalendarDay): void {
        this._maxCalendarDay$.next(date);
    }

    setMinCalendarDay(date: CalendarDay): void {
        this._minCalendarDay$.next(date);
    }

    setRangeMode(isRangeMode: boolean): void {
        this._isRangeMode$.next(isRangeMode);
    }

    setSelectingRange(isRangeStarted: boolean): void {
        this._isSelectingRange$.next(isRangeStarted);
    }

    setSingleDate(date: Date): void {
        this.setStartDate(date);
    }

    setRange(startDate: Date, endDate?: Date): void {
        if (!startDate) {
            this.setStartDate(null);
            this.setEndDate(null);
        }
        if (!endDate || startDate <= endDate) {
            this.setStartDate(startDate);
            this.setEndDate(endDate);
        } else {
            this.setStartDate(endDate);
            this.setEndDate(startDate);
        }
    }

    private setStartDate(date: Date): void {
        this._startDate$.next(date);
    }

    private setEndDate(date: Date): void {
        this._endDate$.next(date);
    }

    private getCalendarByDate(date: Date): Calendar {
        return {
            previousMonth: this.getCalendarMonthWithDays(dayjs(date).subtract(1, 'month'), CalendarMonthType.PREVIOUS),
            currentMonth: this.getCalendarMonthWithDays(dayjs(date), CalendarMonthType.CURRENT),
            nextMonth: this.getCalendarMonthWithDays(dayjs(date).add(1, 'month'), CalendarMonthType.NEXT),
        };
    }

    /**
     * Get CalendarMonth by date and monthType
     *
     * @param dayjsDate
     * @param monthType
     * @private
     */
    private getCalendarMonthWithDays(dayjsDate: dayjs.Dayjs, monthType: CalendarMonthType): CalendarMonthWithDaysList {
        const year: CalendarMonthWithDaysList['year'] = dayjsDate.year();
        const month: CalendarMonthWithDaysList['month'] = dayjsDate.month() + 1; // dayjs returns months from 0
        const daysListLength = this.getDaysListLength(dayjsDate, monthType);
        const days: CalendarMonthWithDaysList['days'] = Array.from({length: daysListLength}, (_, i: number) => ({
            day: ++i + (monthType === CalendarMonthType.PREVIOUS ? dayjsDate.daysInMonth() - daysListLength : 0),
            month,
            year,
        }));

        return {
            year,
            month,
            days,
        };
    }

    /**
     * Get number of days for current monthType
     *
     * @param dayjsDate
     * @param monthType
     * @private
     */
    private getDaysListLength(dayjsDate: dayjs.Dayjs, monthType: CalendarMonthType): number {
        switch (monthType) {
            case CalendarMonthType.CURRENT:
                return dayjsDate.daysInMonth();
            case CalendarMonthType.PREVIOUS:
                return (7 - START_OF_WEEK + dayjsDate.endOf('month').day()) % 7;
            case CalendarMonthType.NEXT:
                return (7 - dayjsDate.startOf('month').day() + START_OF_WEEK + 1) % 7;
        }
    }
}
