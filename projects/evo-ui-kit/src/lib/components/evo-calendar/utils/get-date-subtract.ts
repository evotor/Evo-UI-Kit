import {DateUnitType} from '../types/date-unit-type';
import * as dayjs from 'dayjs';

export function getDateSubtract(date: Date, value: number, units: DateUnitType): Date {
    if (!date) {
        return undefined;
    }
    return dayjs(date).subtract(value, units).toDate();
}
