import {CalendarMonth} from './calendar-month';
import {CalendarDay} from './calendar-day';

export interface CalendarMonthWithDaysList extends CalendarMonth {
    days: CalendarDay[];
}
