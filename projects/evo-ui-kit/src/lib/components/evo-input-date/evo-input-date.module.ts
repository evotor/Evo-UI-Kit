import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OverlayModule} from '@angular/cdk/overlay';
import {ReactiveFormsModule} from '@angular/forms';
import {EvoInputDateComponent} from './components';
import {EvoInputDateInnerComponent} from './components/evo-input-date-inner/evo-input-date-inner.component';
import {EvoInputDateRangeComponent} from './components';
import {EvoCalendarModule} from '../evo-calendar';

@NgModule({
    declarations: [EvoInputDateComponent, EvoInputDateRangeComponent, EvoInputDateInnerComponent],
    imports: [CommonModule, ReactiveFormsModule, OverlayModule, EvoCalendarModule],
    exports: [EvoInputDateComponent, EvoInputDateRangeComponent],
})
export class EvoInputDateModule {}
