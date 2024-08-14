import {DateUnitType} from '../types';
import {isBefore, isEqual} from 'date-fns';
import {getStartOfDateByUnit} from './get-start-of-date-by-unit';

/**
 * Is the first date before the second one
 *
 * @param a
 * @param b
 * @param unit
 * @param includeSame
 */
export function isDateBefore(a: Date, b: Date, unit: DateUnitType, includeSame = false): boolean {
    if (!a || !b) {
        return false;
    }
    const aDate: Date = getStartOfDateByUnit(a, unit);
    const bDate: Date = getStartOfDateByUnit(b, unit);
    return isBefore(aDate, bDate) || (includeSame && isEqual(aDate, bDate));
}
