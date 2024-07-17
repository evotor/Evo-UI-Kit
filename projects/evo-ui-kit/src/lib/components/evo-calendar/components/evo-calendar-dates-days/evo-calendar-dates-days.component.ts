import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AbstractCalendarDatesComponent} from '../../classes/abstract-calendar-dates.component';
import {DAYS_OF_WEEK} from '../../constants';
import {CalendarDay} from '../../interfaces';
import {CalendarDayMonthType} from '../../enums';
import {isSameDate} from '../../utils/is-same-date';
import {isAfterDate} from '../../utils/is-after-date';
import {isDayjsDateInInterval} from '../../utils/is-date-in-interval';
import {UnitType} from 'dayjs';

const UNITS: UnitType = 'day';

@Component({
    selector: 'evo-calendar-days',
    templateUrl: './evo-calendar-dates-days.component.html',
    styleUrls: ['./evo-calendar-dates-days.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvoCalendarDatesDaysComponent extends AbstractCalendarDatesComponent {
    readonly DAYS_OF_WEEK = DAYS_OF_WEEK;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    readonly CalendarDayMonthType = CalendarDayMonthType;

    private hoveredDate: Date | null = null;

    weekTrackByFn(_: number, week: string): string {
        return week;
    }

    dayTrackByFn(_: number, item: CalendarDay): number {
        return item.day;
    }

    getDayClasses(wrapperClass: string, day: CalendarDay, monthType: CalendarDayMonthType): string[] {
        const result = [];

        const dayDate = this.getDateByDay(day);

        // basic states
        if (isSameDate(dayDate, this.evoCalendarService.DATE_NOW, UNITS)) {
            result.push(`${wrapperClass}_today`);
        }
        if (monthType === CalendarDayMonthType.PREVIOUS) {
            result.push(`${wrapperClass}_prev-month`);
        }
        if (monthType === CalendarDayMonthType.NEXT) {
            result.push(`${wrapperClass}_next-month`);
        }

        if (this.evoCalendarService.isRangeMode) {
            // range mode
            if (this.evoCalendarService.isSelectingRange === false && this.startDate && this.endDate) {
                // range selection complete
                if (isSameDate(dayDate, this.startDate, UNITS)) {
                    result.push(`${wrapperClass}_range-start`);
                }
                if (isSameDate(dayDate, this.endDate, UNITS)) {
                    result.push(`${wrapperClass}_range-end`);
                }
                if (isDayjsDateInInterval(dayDate, this.startDate, this.endDate, UNITS)) {
                    result.push(`${wrapperClass}_selected`);
                }
            } else {
                // range selection is in progress
                if (this.hoveredDate) {
                    if (isSameDate(dayDate, this.startDate, UNITS)) {
                        result.push(
                            isSameDate(this.hoveredDate, this.startDate, UNITS) ||
                                isAfterDate(this.hoveredDate, this.startDate, UNITS)
                                ? `${wrapperClass}_range-start`
                                : `${wrapperClass}_range-end`,
                        );
                    }
                    if (isSameDate(this.hoveredDate, dayDate, UNITS)) {
                        result.push(
                            isSameDate(this.hoveredDate, this.startDate, UNITS) ||
                                isAfterDate(this.hoveredDate, this.startDate, UNITS)
                                ? `${wrapperClass}_range-end`
                                : `${wrapperClass}_range-start`,
                        );
                    }
                    if (isDayjsDateInInterval(dayDate, this.startDate, this.hoveredDate, UNITS)) {
                        result.push(`${wrapperClass}_range-hovered`);
                    }
                } else {
                    if (isSameDate(dayDate, this.startDate, UNITS)) {
                        result.push(`${wrapperClass}_range-start`);
                        result.push(`${wrapperClass}_range-end`);
                    }
                }
            }
        } else {
            // single date mode
            if (isSameDate(dayDate, this.startDate, UNITS) || isSameDate(dayDate, this.endDate, UNITS)) {
                result.push(`${wrapperClass}_selected`);
            }
        }

        return result;
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

    isSelected(day: CalendarDay): boolean {
        const dayDate = this.getDateByDay(day);
        if (this.evoCalendarService.isRangeMode && this.evoCalendarService.isSelectingRange === false) {
            return isDayjsDateInInterval(dayDate, this.startDate, this.endDate, UNITS);
        } else {
            return isSameDate(dayDate, this.startDate, UNITS) || isSameDate(dayDate, this.endDate, UNITS);
        }
    }

    private getDateByDay(day: CalendarDay): Date {
        return new Date(day.year, day.month - 1, day.day, 0, 0, 0);
    }
}
