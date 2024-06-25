import {BaseOptions} from 'flatpickr/dist/types/options';

export interface FlatpickrOptions extends Partial<BaseOptions> {
    defaultDate?: Date | Date[];
    disable?: Array<string | Date>;
    enable?: Array<string | Date>;
    maxDate?: string | Date;
    minDate?: string | Date;
    utc?: boolean;

    // Needed so we can access options[key].
    // eslint-disable-next-line
    [key: string]: any;
}
