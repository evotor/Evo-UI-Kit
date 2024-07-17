import * as dayjs from 'dayjs';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MONTHS} from '../../constants';
import {AbstractCalendarSectionComponent} from '../../classes/abstract-calendar-section.component';

@Component({
    selector: 'evo-calendar-section-months',
    templateUrl: './evo-calendar-section-months.component.html',
    styleUrls: ['./evo-calendar-section-months.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvoCalendarSectionMonthsComponent extends AbstractCalendarSectionComponent {
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
