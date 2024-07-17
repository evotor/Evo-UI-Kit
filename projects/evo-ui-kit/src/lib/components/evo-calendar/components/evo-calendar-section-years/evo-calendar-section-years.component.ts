import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AbstractCalendarSectionComponent} from '../../classes/abstract-calendar-section.component';
import {map} from 'rxjs/operators';

@Component({
    selector: 'evo-calendar-section-years',
    templateUrl: './evo-calendar-section-years.component.html',
    styleUrls: ['./evo-calendar-section-years.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvoCalendarSectionYearsComponent extends AbstractCalendarSectionComponent {
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
