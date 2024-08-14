import {DateUnitType} from '../types';
import {startOfDay, startOfMonth, startOfWeek, startOfYear} from 'date-fns';

export function getStartOfDateByUnit(date: Date, unit: DateUnitType): Date {
    switch (unit) {
        case 'day':
            return startOfDay(date);
        case 'month':
            return startOfMonth(date);
        case 'week':
            return startOfWeek(date);
        case 'year':
            return startOfYear(date);
    }
}
