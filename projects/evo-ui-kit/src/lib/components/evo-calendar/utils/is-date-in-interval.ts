import {isDateAfter} from './is-date-after';
import {isDateBefore} from './is-date-before';
import {DateUnitType} from '../types';
import {getStartOfDateByUnit} from './get-start-of-date-by-unit';

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

    const [start, end] =
        startDate <= endDate
            ? [getStartOfDateByUnit(startDate, units), getStartOfDateByUnit(endDate, units)]
            : [getStartOfDateByUnit(endDate, units), getStartOfDateByUnit(startDate, units)];
    return isDateAfter(date, start, units, includeSame) && isDateBefore(date, end, units, includeSame);
}
