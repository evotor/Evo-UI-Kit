import {DateUnitType} from '../types';
import {sub} from 'date-fns';
import {getDateFnsDuration} from './get-date-fns-duration';

export function getDateSubtract(date: Date, value: number, units: DateUnitType): Date {
    if (!date) {
        return undefined;
    }
    return sub(date, getDateFnsDuration(units, value));
}
