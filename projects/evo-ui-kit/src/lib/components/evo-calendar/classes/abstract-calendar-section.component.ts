import {Component, EventEmitter, Output} from '@angular/core';
import {EvoCalendarService} from '../services';
import {Calendar} from '../interfaces';

@Component({
    template: '',
})
export abstract class AbstractCalendarSectionComponent {
    readonly calendar$ = this.evoCalendarService.calendar$;
    readonly isRangeMode$ = this.evoCalendarService.isRangeMode$;
    readonly startDate$ = this.evoCalendarService.startDate$;
    readonly endDate$ = this.evoCalendarService.endDate$;

    @Output() dateChange = new EventEmitter<Date>();

    get calendar(): Calendar {
        return this.evoCalendarService.calendar;
    }

    get startDate(): Date {
        return this.evoCalendarService.startDate;
    }

    get endDate(): Date {
        return this.evoCalendarService.endDate;
    }

    constructor(protected readonly evoCalendarService: EvoCalendarService) {}
}
