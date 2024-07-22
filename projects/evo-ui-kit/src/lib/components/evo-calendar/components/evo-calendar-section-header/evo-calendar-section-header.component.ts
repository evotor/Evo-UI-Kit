import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {CalendarState} from '../../enums';
import {CalendarMonth} from '../../interfaces';
import {AbstractCalendarSectionComponent} from '../../classes/abstract-calendar-section.component';
import {getDateAdd, getDateSubtract} from '../../utils';

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

    getDateFromMonth(month: CalendarMonth): Date {
        return new Date(month.year, month.month - 1);
    }

    onBackClick(month: CalendarMonth): void {
        const currentMonthDate = this.getDateFromMonth(month);
        let prevMonthDate;

        switch (this.calendarState) {
            case CalendarState.MONTHS:
                prevMonthDate = getDateSubtract(currentMonthDate, 1, 'year');
                break;
            case CalendarState.YEARS:
                prevMonthDate = getDateSubtract(currentMonthDate, 16, 'year');
                break;
            case CalendarState.DAYS:
                prevMonthDate = getDateSubtract(currentMonthDate, 1, 'month');
                break;
        }

        this.back.emit(prevMonthDate);
    }

    onNextClick(month: CalendarMonth): void {
        const currentMonthDate = this.getDateFromMonth(month);
        let nextMonthDate;

        switch (this.calendarState) {
            case CalendarState.MONTHS:
                nextMonthDate = getDateAdd(currentMonthDate, 1, 'year');
                break;
            case CalendarState.YEARS:
                nextMonthDate = getDateAdd(currentMonthDate, 16, 'year');
                break;
            case CalendarState.DAYS:
                nextMonthDate = getDateAdd(currentMonthDate, 1, 'month');
                break;
        }

        this.back.emit(nextMonthDate);
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
