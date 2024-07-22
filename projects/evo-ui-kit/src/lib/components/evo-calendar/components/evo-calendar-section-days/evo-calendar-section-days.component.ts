import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AbstractCalendarSectionComponent} from '../../classes/abstract-calendar-section.component';
import {CalendarDay} from '../../interfaces';
import {CalendarMonthType} from '../../enums';
import {isSameDate} from '../../utils/is-same-date';
import {isDateAfter} from '../../utils/is-date-after';
import {isDateInInterval} from '../../utils/is-date-in-interval';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {DateUnitType} from '../../types/date-unit-type';

const UNITS: DateUnitType = 'day';

@Component({
    selector: 'evo-calendar-section-days',
    templateUrl: './evo-calendar-section-days.component.html',
    styleUrls: ['./evo-calendar-section-days.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvoCalendarSectionDaysComponent extends AbstractCalendarSectionComponent {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    readonly CalendarDayMonthType = CalendarMonthType;

    readonly weekdaysList$: Observable<Date[]> = this.calendar$.pipe(
        map((calendar) =>
            [...calendar.previousMonth.days, ...calendar.currentMonth.days]
                .slice(0, 7)
                .map((day) => this.getDateByDay(day)),
        ),
    );

    private hoveredDate: Date | null = null;

    weekTrackByFn(_: number, weekday: Date): number {
        return weekday.valueOf();
    }

    dayTrackByFn(_: number, item: CalendarDay): number {
        return item.day;
    }

    getDateClasses(wrapperClass: string, day: CalendarDay, monthType: CalendarMonthType): string[] {
        const modifiers = [];

        const currentDate = this.getDateByDay(day);

        // basic states
        if (isSameDate(currentDate, this.evoCalendarService.DATE_NOW, UNITS)) {
            modifiers.push(`today`);
        }
        if (monthType === CalendarMonthType.PREVIOUS) {
            modifiers.push(`month-type_prev`);
        }
        if (monthType === CalendarMonthType.NEXT) {
            modifiers.push(`month-type_next`);
        }
        if (monthType === CalendarMonthType.CURRENT) {
            modifiers.push(`month-type_current`);
        }
        if (isSameDate(currentDate, this.hoveredDate, 'day')) {
            modifiers.push('hover');
        }

        // selected and hover modifiers
        modifiers.push(
            ...(this.evoCalendarService.isRangeMode === true
                ? this.getRangeModeDateCssModifiers(currentDate)
                : this.getSingleModeDateCssModifiers(currentDate)),
        );

        return modifiers.map((modifier) => `${wrapperClass}_${modifier}`);
    }

    onDayClick(event: MouseEvent, day: CalendarDay): void {
        this.dateChange.emit(this.getDateByDay(day));
    }

    onDayMouseover(event: MouseEvent, day: CalendarDay): void {
        this.hoveredDate = this.getDateByDay(day);
    }

    onDayMouseout(_event: MouseEvent, _day: CalendarDay): void {
        this.hoveredDate = null;
    }

    private getDateByDay(day: CalendarDay): Date {
        return new Date(day.year, day.month - 1, day.day, 0, 0, 0);
    }

    private getRangeModeDateCssModifiers(currentDate: Date): string[] {
        const result = [];

        if (!this.evoCalendarService.isRangeMode) {
            return result;
        }

        // range selection is complete, start and end dates are set
        if (this.evoCalendarService.isSelectingRange === false && this.startDate && this.endDate) {
            if (isSameDate(currentDate, this.startDate, UNITS)) {
                result.push(`range_start`);
            }
            if (isSameDate(currentDate, this.endDate, UNITS)) {
                result.push(`range_end`);
            }
            if (isDateInInterval(currentDate, this.startDate, this.endDate, UNITS, true)) {
                result.push(`range`);
                result.push(`selected`);
            }
            return result;
        }

        // range selection is started
        if (this.evoCalendarService.isSelectingRange === true && this.startDate) {
            if (this.hoveredDate) {
                // check if hoveredDate is after startDate or not
                const [startDate, endDate] = isDateAfter(this.hoveredDate, this.startDate, UNITS, true)
                    ? [this.startDate, this.hoveredDate]
                    : [this.hoveredDate, this.startDate];

                if (isSameDate(currentDate, startDate, UNITS)) {
                    result.push(`range_start`);
                }
                if (isSameDate(currentDate, endDate, UNITS)) {
                    result.push(`range_end`);
                }
                if (isDateInInterval(currentDate, startDate, endDate, UNITS, true)) {
                    result.push(`range`);
                    result.push(`range_to-select`);
                }
                return result;
            }

            if (!this.hoveredDate && this.startDate) {
                if (isSameDate(currentDate, this.startDate, UNITS)) {
                    result.push(`range_start`);
                    result.push(`range_end`);
                    result.push(`selected`);
                }

                return result;
            }
        }
    }

    private getSingleModeDateCssModifiers(currentDate: Date): string[] {
        const result = [];

        if (isSameDate(currentDate, this.startDate, UNITS) || isSameDate(currentDate, this.endDate, UNITS)) {
            result.push(`selected`);
        }
        return result;
    }
}
