import {UnitType} from 'dayjs';
import * as dayjs from 'dayjs';

export function isBeforeDate(a: Date, b: Date, unit: UnitType, includeSame = true): boolean {
    const aDate = dayjs(a);
    const bDate = dayjs(b);
    return aDate.isBefore(bDate, unit) || (includeSame && aDate.isSame(bDate, unit));
}
