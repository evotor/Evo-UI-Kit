import {CalendarMonth} from './calendar-month';

export interface Calendar {
    previousMonth: CalendarMonth;
    currentMonth: CalendarMonth;
    nextMonth: CalendarMonth;
}
