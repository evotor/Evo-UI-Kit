import * as dayjs from 'dayjs';
import {DateUnitType} from '../types';

export function isDateAfter(a: Date, b: Date, unit: DateUnitType, includeSame = false): boolean {
    if (!a || !b) {
        return false;
    }
    const aDate = dayjs(a);
    const bDate = dayjs(b);
    return aDate.isAfter(bDate, unit) || (includeSame && aDate.isSame(bDate, unit));
}
