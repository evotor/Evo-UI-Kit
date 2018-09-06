import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'dateEuroFormat',
})
export class DateEuroFormatPipe implements PipeTransform {
    transform(value: any): any {
        return value.replace(/-/g, '.');
    }
}
