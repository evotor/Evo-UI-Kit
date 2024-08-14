import {DateUnitType} from '../types';
import {add} from 'date-fns';
import {Duration} from 'date-fns/types';
import {getDateFnsDuration} from './get-date-fns-duration';

export function getDateAdd(date: Date, value: number, units: DateUnitType): Date {
    if (!date) {
        return undefined;
    }
    return add(date, getDateFnsDuration(units, value));
}
