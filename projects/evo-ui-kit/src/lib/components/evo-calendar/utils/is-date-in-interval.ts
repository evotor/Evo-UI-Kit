import {isSameDate} from './is-same-date';
import {isAfterDate} from './is-after-date';
import {isBeforeDate} from './is-before-date';
import {UnitType} from 'dayjs';

export function isDayjsDateInInterval(
    date: Date,
    startDate: Date,
    endDate: Date,
    units: UnitType,
    includeSame = false,
): boolean {
    const [dayjsStartDate, dayjsEndDate] = startDate <= endDate ? [startDate, endDate] : [endDate, startDate];
    return (
        isSameDate(date, dayjsStartDate, units) ||
        isSameDate(date, dayjsEndDate, units) ||
        (isAfterDate(date, dayjsStartDate, units, includeSame) && isBeforeDate(date, dayjsEndDate, units, includeSame))
    );
}
