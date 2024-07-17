import * as dayjs from 'dayjs';
import {Injectable} from '@angular/core';
import {Calendar, CalendarDay, CalendarMonth} from '../interfaces';
import {BehaviorSubject, Observable} from 'rxjs';
import {distinctUntilChanged} from 'rxjs/operators';
import {isSameDate} from '../utils/is-same-date';

const DATE_NOW = new Date();

@Injectable()
export class EvoCalendarService {
    readonly DATE_NOW = DATE_NOW;

    readonly calendar$: Observable<Calendar>;

    readonly startDate$: Observable<Date>;
    readonly endDate$: Observable<Date>;

    readonly isRangeMode$: Observable<boolean>;
    readonly isRangeStarted$: Observable<boolean>;

    get calendar(): Calendar {
        return this._calendar$.value;
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

    constructor() {
        this.calendar$ = this._calendar$.asObservable();
        this.startDate$ = this._startDate$.asObservable();
        this.endDate$ = this._endDate$.asObservable();
        this.isRangeMode$ = this._isRangeMode$.pipe(distinctUntilChanged());
    }

    setCalendarByDate(date: Date): void {
        this._calendar$.next(this.getCalendarByDate(date ?? DATE_NOW));
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
            previousMonth: this.getPreviousMonthDays(date),
            currentMonth: this.getCurrentMonthDays(date),
            nextMonth: this.getNextMonthDays(date),
        };
    }

    // TODO: make single method
    private getCurrentMonthDays(date: Date): CalendarMonth {
        const dayjsDate = dayjs(date);
        const days: CalendarDay[] = Array.from({length: dayjsDate.daysInMonth()}, (_, i) => ({
            day: ++i,
            month: dayjsDate.month() + 1,
            year: dayjsDate.year(),
        }));

        return {
            year: dayjsDate.year(),
            month: dayjsDate.month() + 1,
            days: this.getEventsMonth(days, dayjsDate.toDate()),
        };
    }

    private getPreviousMonthDays(date: Date): CalendarMonth {
        const dayjsDate = dayjs(date);
        const startDayOfWeek = dayjsDate.startOf('month').day();
        const prevMonth = dayjsDate.subtract(1, 'months');
        let days: CalendarDay[] = [];

        if (startDayOfWeek !== 1) {
            const daysToAdd = startDayOfWeek === 0 ? 6 : startDayOfWeek - 1;

            for (let i = 0; i < daysToAdd; i++) {
                days.unshift({
                    day: prevMonth.clone().endOf('month').subtract(i, 'days').get('date'),
                    month: dayjsDate.month() + 1,
                    year: dayjsDate.year(),
                });
            }

            days = this.getEventsMonth(days, prevMonth.toDate());
        }

        return {
            year: prevMonth.year(),
            month: prevMonth.month(),
            days,
        };
    }

    private getNextMonthDays(date: Date): CalendarMonth {
        const dayjsDate = dayjs(date);
        const endDayOfWeek = dayjsDate.endOf('month').day();
        const nextMonth = dayjsDate.add(1, 'months');
        let days: CalendarDay[] = [];

        if (endDayOfWeek !== 0) {
            const daysToAdd = Number(endDayOfWeek) === 0 ? 1 : 7 - endDayOfWeek;

            for (let i = 1; i <= daysToAdd; i++) {
                days.push({
                    day: i,
                    month: dayjsDate.month() + 1,
                    year: dayjsDate.year(),
                });
            }

            days = this.getEventsMonth(days, nextMonth.toDate());
        }

        return {
            year: nextMonth.year(),
            month: nextMonth.month(),
            days,
        };
    }

    private getEventsMonth(days: CalendarDay[], date: Date): CalendarDay[] {
        const today = DATE_NOW;
        const daysWithEvents: CalendarDay[] = days;

        if (isSameDate(today, date, 'year') && isSameDate(today, date, 'month')) {
            const day = today.getDay();
            const dayIndex = daysWithEvents.findIndex((i) => i.day === day);
            daysWithEvents[dayIndex] = {
                ...daysWithEvents[dayIndex],
            };
        }

        return daysWithEvents;
    }
}
