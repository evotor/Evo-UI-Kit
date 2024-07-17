import * as dayjs from 'dayjs';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MONTHS} from '../../constants';
import {AbstractCalendarDatesComponent} from '../../classes/abstract-calendar-dates.component';

@Component({
    selector: 'evo-calendar-months',
    templateUrl: './evo-calendar-dates-months.component.html',
    styleUrls: ['./evo-calendar-dates-months.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvoCalendarDatesMonthsComponent extends AbstractCalendarDatesComponent {
    readonly MONTHS = MONTHS;
    readonly DEFAULT_DATE = this.evoCalendarService.DATE_NOW;

    monthTrackByFn(_: number, month: string): string {
        return month;
    }

    onMonthClick(month: number): void {
        console.log(month);
        const date = dayjs(`${this.calendar.currentMonth.year}-${month}`, 'YYYY-M');
        this.dateChange.emit(date.toDate());
    }
}
