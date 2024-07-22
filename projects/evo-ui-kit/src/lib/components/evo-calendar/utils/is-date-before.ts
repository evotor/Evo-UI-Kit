import * as dayjs from 'dayjs';
import {DateUnitType} from '../types';

export function isDateBefore(a: Date, b: Date, unit: DateUnitType, includeSame = false): boolean {
    if (!a || !b) {
        return false;
    }
    const aDate = dayjs(a);
    const bDate = dayjs(b);
    return aDate.isBefore(bDate, unit) || (includeSame && aDate.isSame(bDate, unit));
}
