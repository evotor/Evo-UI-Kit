import {CalendarMonthWithDaysList} from './calendar-month-with-days-list';

export interface Calendar {
    previousMonth: CalendarMonthWithDaysList;
    currentMonth: CalendarMonthWithDaysList;
    nextMonth: CalendarMonthWithDaysList;
}
