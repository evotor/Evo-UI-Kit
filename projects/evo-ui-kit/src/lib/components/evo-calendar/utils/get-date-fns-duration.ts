import {DateUnitType} from '../types';
import {Duration} from 'date-fns/types';

export function getDateFnsDuration(unit: DateUnitType, value: number): Duration {
    const result: Duration = {};
    switch (unit) {
        case 'day':
            result.days = value;
            break;
        case 'month':
            result.months = value;
            break;
        case 'year':
            result.years = value;
            break;
        case 'week':
            result.weeks = value;
            break;
    }
    return result;
}
