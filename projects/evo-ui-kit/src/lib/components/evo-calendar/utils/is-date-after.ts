import {DateUnitType} from '../types';
import {getStartOfDateByUnit} from './get-start-of-date-by-unit';
import {isAfter, isEqual} from 'date-fns';

export function isDateAfter(a: Date, b: Date, unit: DateUnitType, includeSame = false): boolean {
    if (!a || !b) {
        return false;
    }
    const aDate: Date = getStartOfDateByUnit(a, unit);
    const bDate: Date = getStartOfDateByUnit(b, unit);
    return isAfter(aDate, bDate) || (includeSame && isEqual(aDate, bDate));
}
