import {UnitType} from 'dayjs';
import * as dayjs from 'dayjs';

export function isSameDate(a: Date, b: Date, unit: UnitType): boolean {
    if (!a || !b) {
        return false;
    }
    const aDate = dayjs(a);
    const bDate = dayjs(b);
    return aDate.isSame(bDate, unit);
}
