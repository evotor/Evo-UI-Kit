import {NgModule} from '@angular/core';
import {
    EvoCalendarComponent,
    EvoCalendarInputTimeComponent,
    EvoCalendarInputTimeInnerComponent,
    EvoCalendarSectionDaysComponent,
    EvoCalendarSectionHeaderComponent,
    EvoCalendarSectionMonthsComponent,
    EvoCalendarSectionYearsComponent,
} from './components';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {OverlayModule} from '@angular/cdk/overlay';
import {EvoIconModule} from '@evotor-dev/ui-kit';
import {icons} from '@evotor-dev/ui-kit/icons';

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
    imports: [CommonModule, ReactiveFormsModule, OverlayModule, EvoIconModule.forChild([...icons])],
})
export class EvoCalendarModule {}
