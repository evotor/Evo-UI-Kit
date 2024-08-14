import {DateUnitType} from '../types';
import {getStartOfDateByUnit} from './get-start-of-date-by-unit';
import {isEqual} from 'date-fns';

export function isSameDate(a: Date, b: Date, unit: DateUnitType): boolean {
    if (!a || !b) {
        return false;
    }
    const aDate: Date = getStartOfDateByUnit(a, unit);
    const bDate: Date = getStartOfDateByUnit(b, unit);
    return isEqual(aDate, bDate);
}
