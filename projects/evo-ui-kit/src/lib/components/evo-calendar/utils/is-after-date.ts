import * as dayjs from 'dayjs';
import {UnitType} from 'dayjs';

export function isAfterDate(a: Date, b: Date, unit: UnitType, includeSame = true) {
    const aDate = dayjs(a);
    const bDate = dayjs(b);
    return aDate.isAfter(bDate, 'years') || (includeSame && aDate.isSame(bDate, 'years'));
}
