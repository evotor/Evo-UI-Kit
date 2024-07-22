import * as dayjs from 'dayjs';
import {DateUnitType} from '../types';

export function isSameDate(a: Date, b: Date, unit: DateUnitType): boolean {
    if (!a || !b) {
        return false;
    }
    const aDate = dayjs(a);
    const bDate = dayjs(b);
    return aDate.isSame(bDate, unit);
}
