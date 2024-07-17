import * as dayjs from 'dayjs';
import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {CalendarState} from '../../enums';
import {CalendarMonth} from '../../interfaces';
import {MONTHS} from '../../constants';
import {AbstractCalendarSectionComponent} from '../../classes/abstract-calendar-section.component';

@Component({
    selector: 'evo-calendar-section-header',
    templateUrl: './evo-calendar-section-header.component.html',
    styleUrls: ['./evo-calendar-section-header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvoCalendarSectionHeaderComponent extends AbstractCalendarSectionComponent {
    @Input() calendarState: CalendarState;

    @Output() back = new EventEmitter<Date>();
    @Output() next = new EventEmitter<Date>();
    @Output() calendarStateChange = new EventEmitter<CalendarState>();

    readonly CalendarState = CalendarState;
    readonly MONTHS = MONTHS;

    getDateFromMonth(month: CalendarMonth): Date {
        return new Date(month.year, month.month - 1);
    }

    onBackClick(month: CalendarMonth): void {
        let prevDate = dayjs(new Date(month.year, month.month - 1));

        switch (this.calendarState) {
            case CalendarState.MONTHS:
                prevDate = prevDate.subtract(1, 'years');
                break;
            case CalendarState.YEARS:
                prevDate = prevDate.subtract(16, 'years');
                break;
            case CalendarState.DAYS:
                prevDate = prevDate.subtract(1, 'months');
                break;
        }

        this.back.emit(prevDate.toDate());
    }

    onNextClick(month: CalendarMonth): void {
        let nextDate = dayjs(new Date(month.year, month.month - 1));

        switch (this.calendarState) {
            case CalendarState.MONTHS:
                nextDate = nextDate.add(1, 'years');
                break;
            case CalendarState.YEARS:
                nextDate = nextDate.add(16, 'years');
                break;
            case CalendarState.DAYS:
                nextDate = nextDate.add(1, 'months');
                break;
        }

        this.next.emit(nextDate.toDate());
    }

    onTitleClick(): void {
        switch (this.calendarState) {
            case CalendarState.DAYS:
                this.calendarStateChange.emit(CalendarState.MONTHS);
                break;
            case CalendarState.MONTHS:
                this.calendarStateChange.emit(CalendarState.YEARS);
                break;
        }
    }
}
