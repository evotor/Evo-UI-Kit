import {Pipe, PipeTransform} from '@angular/core';
import {isUndefined} from 'lodash-es';

@Pipe({
    name: 'declination',
})
export class DeclinationPipe implements PipeTransform {
    transform(value: number | string, titles: string[], noNum: boolean = false): string {
        if (isUndefined(value)) {
            return null;
        }

        const preparedValue: number | string = typeof value === 'string' ? (value as string).replace(',', '.') : value;

        let result = null;
        let count = +preparedValue % 100;
        if (count >= 5 && count <= 20) {
            result = titles['2'];
        } else {
            count = count % 10;
            if (count === 1) {
                result = titles['0'];
            } else if (count >= 2 && count <= 4) {
                result = titles['1'];
            } else {
                result = titles['2'];
            }
        }
        return noNum ? result : preparedValue + ' ' + result;
    }
}
