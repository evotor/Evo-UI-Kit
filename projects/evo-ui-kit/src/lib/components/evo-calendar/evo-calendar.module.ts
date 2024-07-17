import {NgModule} from '@angular/core';
import {
    EvoCalendarComponent,
    EvoCalendarSectionDaysComponent,
    EvoCalendarSectionHeaderComponent,
    EvoCalendarSectionMonthsComponent,
    EvoCalendarSectionYearsComponent,
    EvoCalendarInputTimeInnerComponent,
    EvoCalendarInputTimeComponent,
} from './components';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {OverlayModule} from '@angular/cdk/overlay';

@NgModule({
    declarations: [
        EvoCalendarInputTimeComponent,
        EvoCalendarInputTimeInnerComponent,
        EvoCalendarSectionHeaderComponent,
        EvoCalendarSectionDaysComponent,
        EvoCalendarSectionMonthsComponent,
        EvoCalendarSectionYearsComponent,
        EvoCalendarComponent,
    ],
    exports: [EvoCalendarComponent],
    imports: [CommonModule, ReactiveFormsModule, OverlayModule],
})
export class EvoCalendarModule {}
