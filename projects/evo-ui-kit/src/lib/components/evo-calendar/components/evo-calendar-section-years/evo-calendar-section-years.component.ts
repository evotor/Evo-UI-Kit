import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AbstractCalendarSectionComponent} from '../../classes/abstract-calendar-section.component';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {isSameDate} from '../../utils/is-same-date';

const UNITS = 'year';

@Component({
    selector: 'evo-calendar-section-years',
    templateUrl: './evo-calendar-section-years.component.html',
    styleUrls: ['./evo-calendar-section-years.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvoCalendarSectionYearsComponent extends AbstractCalendarSectionComponent {
    readonly yearsList$: Observable<Date[]> = this.evoCalendarService.calendar$.pipe(
        map((calendar) => this.getYearsList(calendar.currentMonth.year - 4, calendar.currentMonth.month)),
    );

    getDateClasses(wrapperClass: string, monthDate: Date): string[] {
        const result = [];

        if (isSameDate(this.evoCalendarService.DATE_NOW, monthDate, UNITS)) {
            result.push(`today`);
        }

        if (!this.evoCalendarService.isRangeMode) {
            if (this.startDate && isSameDate(this.startDate, monthDate, UNITS)) {
                result.push(`selected`);
            }
        }

        return result.map((modifier) => `${wrapperClass}_${modifier}`);
    }

    dateTrackByFn(_: number, date: Date): number {
        return date.valueOf();
    }

    onDateClick(month: Date): void {
        this.dateChange.emit(month);
    }

    private getYearsList(year: number, calendarMonth: number): Date[] {
        return Array.from({length: 16}).map((_, i) => new Date(year + i, calendarMonth - 1));
    }
}
