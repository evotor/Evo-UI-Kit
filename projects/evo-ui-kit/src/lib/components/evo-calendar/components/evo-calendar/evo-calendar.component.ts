import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Time} from '@angular/common';
import {CalendarState} from '../../enums';
import {Calendar, CalendarDay} from '../../interfaces';
import {EvoCalendarService} from '../../services';

@Component({
    selector: 'evo-calendar',
    templateUrl: './evo-calendar.component.html',
    styleUrls: ['./evo-calendar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [EvoCalendarService],
})
export class EvoCalendarComponent {
    // TODO: add range mode selection turn off on ESCAPE

    @Input() set date(date: Date) {
        if (!date) {
            return;
        }

        this.evoCalendarService.setSingleDate(date);
    }

    @Input() set dateRange(dateRange: [Date, Date]) {
        if (!dateRange || !Array.isArray(dateRange)) {
            return;
        }

        this.evoCalendarService.setRange(dateRange[0], dateRange[1]);
    }

    @Input() set max(maxDate: CalendarDay) {
        this.evoCalendarService.setMaxCalendarDay(maxDate);
    }
    @Input() set min(minDate: CalendarDay) {
        this.evoCalendarService.setMinCalendarDay(minDate);
    }

    @Input() hasTime = false;
    @Input() set rangeMode(isRangeMode: boolean) {
        this.evoCalendarService.setRangeMode(isRangeMode);
    }

    @Output() dateChange = new EventEmitter<Date>();
    @Output() dateRangeChange = new EventEmitter<[Date, Date]>();

    readonly CalendarState = CalendarState;
    readonly calendarState$ = new BehaviorSubject<CalendarState>(CalendarState.DAYS);

    readonly startDate$: Observable<Date> = this.evoCalendarService.startDate$;
    readonly endDate$: Observable<Date> = this.evoCalendarService.endDate$;
    readonly calendar$: Observable<Calendar> = this.evoCalendarService.calendar$;

    constructor(private readonly evoCalendarService: EvoCalendarService) {}

    onBackClick(date: Date): void {
        this.evoCalendarService.setCalendarByDate(date);
    }

    onNextClick(date: Date): void {
        this.evoCalendarService.setCalendarByDate(date);
    }

    onDateChange(date: Date): void {
        if (this.evoCalendarService.isRangeMode) {
            if (this.evoCalendarService.isSelectingRange === true) {
                this.evoCalendarService.setRange(this.evoCalendarService.startDate, date);
                this.evoCalendarService.setSelectingRange(false);
                this.dateRangeChange.emit([this.evoCalendarService.startDate, this.evoCalendarService.endDate]);
            } else {
                this.evoCalendarService.setRange(date, null);
                this.evoCalendarService.setSelectingRange(true);
            }
        } else {
            this.evoCalendarService.setSingleDate(date);
            if (!this.hasTime) {
                this.dateChange.emit(date);
            }
        }
    }

    onTimeChange(time: Time): void {
        const date = this.evoCalendarService.startDate;
        date.setHours(time.hours);
        date.setMinutes(time.minutes);
        this.evoCalendarService.setSingleDate(date);
    }

    onMonthChange(date: Date): void {
        this.calendarState$.next(CalendarState.DAYS);
        this.evoCalendarService.setCalendarByDate(date);
    }

    onYearChange(date: Date): void {
        this.calendarState$.next(CalendarState.MONTHS);
        this.evoCalendarService.setCalendarByDate(date);
    }

    onCalendarStateChange(state: CalendarState): void {
        this.calendarState$.next(state);
    }

    onApplyClick(): void {
        this.dateChange.emit(this.evoCalendarService.startDate);
    }
}
