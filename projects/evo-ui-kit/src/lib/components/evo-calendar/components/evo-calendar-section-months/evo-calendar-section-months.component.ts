import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AbstractCalendarSectionComponent} from '../../classes/abstract-calendar-section.component';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {isDateAfter, isDateBefore, isSameDate} from '../../utils';
import {DateUnitType} from '../../types';

const UNITS: DateUnitType = 'month';

@Component({
    selector: 'evo-calendar-section-months',
    templateUrl: './evo-calendar-section-months.component.html',
    styleUrls: ['./evo-calendar-section-months.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvoCalendarSectionMonthsComponent extends AbstractCalendarSectionComponent {
    readonly monthsList$: Observable<Array<Date>> = this.calendar$.pipe(
        map((calendar) => Array.from({length: 12}).map((_, i: number) => new Date(calendar.currentMonth.year, i))),
    );

    getDateClasses(wrapperClass: string, monthDate: Date): string[] {
        const result = [];

        if (isSameDate(this.evoCalendarService.DATE_NOW, monthDate, UNITS)) {
            result.push(`today`);
        }

        if (isDateAfter(monthDate, this.evoCalendarService.maxCalendarDayDate, UNITS)) {
            result.push(`disabled`);
        }

        if (isDateBefore(monthDate, this.evoCalendarService.minCalendarDayDate, UNITS)) {
            result.push(`disabled`);
        }

        if (!this.evoCalendarService.isRangeMode) {
            if (this.startDate && isSameDate(this.startDate, monthDate, UNITS)) {
                result.push(`selected`);
            }
        }

        return result.map((modifier) => `${wrapperClass}_${modifier}`);
    }

    dateTrackByFn(_: number, month: Date): number {
        return month.valueOf();
    }

    onDateClick(month: Date): void {
        this.dateChange.emit(month);
    }
}
