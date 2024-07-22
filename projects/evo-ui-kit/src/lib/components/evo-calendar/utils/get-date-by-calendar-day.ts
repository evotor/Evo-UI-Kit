import {CalendarDay} from '../interfaces';

export function getDateByCalendarDay(day: CalendarDay): Date {
    return day ? new Date(day.year, day.month - 1, day.day, 0, 0, 0) : undefined;
}
