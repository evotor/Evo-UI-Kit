import {isDateAfter} from './is-date-after';
import {isDateBefore} from './is-date-before';
import {DateUnitType} from '../types';

export function isDateInInterval(
    date: Date,
    startDate: Date,
    endDate: Date,
    units: DateUnitType,
    includeSame = false,
): boolean {
    if (!date || !startDate || !endDate) {
        return false;
    }
    const [start, end] = startDate <= endDate ? [startDate, endDate] : [endDate, startDate];
    return isDateAfter(date, start, units, includeSame) && isDateBefore(date, end, units, includeSame);
}
