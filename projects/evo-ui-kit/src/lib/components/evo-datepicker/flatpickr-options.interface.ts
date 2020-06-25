import { BaseOptions } from 'flatpickr/dist/types/options';

export interface FlatpickrOptions extends Partial<BaseOptions> {
    altFormat?: string;
    altInput?: boolean;
    altInputClass?: string;
    allowInput?: boolean;
    appendTo?: HTMLElement;
    clickOpens?: boolean;
    dateFormat?: string;
    defaultDate?: Date | Date[];
    disable?: Array<string | Date>;
    disableMobile?: boolean;
    enable?: Array<string | Date>;
    enableTime?: boolean;
    enableSeconds?: boolean;
    hourIncrement?: number;
    inline?: boolean;
    maxDate?: string | Date;
    minDate?: string | Date;
    minuteIncrement?: number;
    nextArrow?: string;
    noCalendar?: boolean;
    prevArrow?: string;
    shorthandCurrentMonth?: boolean;
    static?: boolean;
    time_24hr?: boolean;
    utc?: boolean;
    weekNumbers?: boolean;
    wrap?: boolean;

    // Needed so we can access options[key].
    [key: string]: any;
}
