import * as dayjs from 'dayjs';
import {UnitType} from 'dayjs';

export function isDateAfter(a: Date, b: Date, unit: UnitType, includeSame = false): boolean {
    if (!a || !b) {
        return false;
    }
    const aDate = dayjs(a);
    const bDate = dayjs(b);
    return aDate.isAfter(bDate, unit) || (includeSame && aDate.isSame(bDate, unit));
}
