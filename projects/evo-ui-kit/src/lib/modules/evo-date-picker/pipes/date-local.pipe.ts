import { Pipe, PipeTransform } from '@angular/core';

const MonthRuLocale = {
    'January': 'Январь',
    'February': 'Февраль',
    'March': 'Март',
    'April': 'Апрель',
    'May': 'Май',
    'June': 'Июнь',
    'July': 'Июль',
    'August': 'Август',
    'September': 'Сентябрь',
    'October': 'Октябрь',
    'November': 'Ноябрь',
    'December': 'Декабрь',
};

@Pipe({
    name: 'dateLocale',
})
export class DateLocalePipe implements PipeTransform {
    transform(value: any): any {
        return MonthRuLocale[value];
    }
}
