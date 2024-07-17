import {CalendarDay} from './calendar-day';

export interface CalendarMonth {
    year: number;
    month: number;
    days: CalendarDay[];
}
