import {UnitType} from 'dayjs';
import * as dayjs from 'dayjs';

export function isDateBefore(a: Date, b: Date, unit: UnitType, includeSame = false): boolean {
    if (!a || !b) {
        return false;
    }
    const aDate = dayjs(a);
    const bDate = dayjs(b);
    return aDate.isBefore(bDate, unit) || (includeSame && aDate.isSame(bDate, unit));
}
