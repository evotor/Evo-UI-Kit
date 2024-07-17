import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AbstractCalendarDatesComponent} from '../../classes/abstract-calendar-dates.component';
import {map} from 'rxjs/operators';

@Component({
    selector: 'evo-calendar-years',
    templateUrl: './evo-calendar-dates-years.component.html',
    styleUrls: ['./evo-calendar-dates-years.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvoCalendarDatesYearsComponent extends AbstractCalendarDatesComponent {
    readonly years$ = this.evoCalendarService.calendar$.pipe(
        map((calendar) => this.getYearsList(calendar.currentMonth.year - 4)),
    );
    readonly DEFAULT_DATE = this.evoCalendarService.DATE_NOW;

    yearTrackByFn(_: number, year: number): number {
        return year;
    }

    onYearClick(year: number): void {
        this.dateChange.emit(new Date(year, 0, 1));
    }

    private getYearsList(year: number): number[] {
        return Array.from({length: 16}).map((_, i) => year + i);
    }
}
