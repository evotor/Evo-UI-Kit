import {NgModule} from '@angular/core';
import {
    EvoCalendarComponent,
    EvoCalendarDatesDaysComponent,
    EvoCalendarHeaderComponent,
    EvoCalendarDatesMonthsComponent,
    EvoCalendarDatesYearsComponent,
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
        EvoCalendarHeaderComponent,
        EvoCalendarDatesDaysComponent,
        EvoCalendarDatesMonthsComponent,
        EvoCalendarDatesYearsComponent,
        EvoCalendarComponent,
    ],
    exports: [EvoCalendarComponent],
    imports: [CommonModule, ReactiveFormsModule, OverlayModule],
})
export class EvoCalendarModule {}
