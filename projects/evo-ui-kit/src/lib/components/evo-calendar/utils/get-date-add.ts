import {DateUnitType} from "../types/date-unit-type";
import * as dayjs from "dayjs";

export function getDateAdd(date: Date, value: number, units: DateUnitType): Date {
    if (!date) {
        return undefined;
    }
    return dayjs(date).add(value, units).toDate();
}
