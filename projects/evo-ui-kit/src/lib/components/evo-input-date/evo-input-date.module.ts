import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OverlayModule} from '@angular/cdk/overlay';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EvoInputDateComponent, EvoInputDateRangeComponent} from './components';
import {EvoCalendarModule} from '../evo-calendar';
import {EvoIconModule} from '../evo-icon';
import {icons} from '@evotor-dev/ui-kit/icons';
import {EvoControlErrorModule, EvoInputModule} from '@evotor-dev/ui-kit';

@NgModule({
    declarations: [EvoInputDateComponent, EvoInputDateRangeComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        OverlayModule,
        EvoCalendarModule,
        EvoIconModule.forChild([...icons]),
        EvoInputModule,
        FormsModule,
        EvoControlErrorModule,
    ],
    exports: [EvoInputDateComponent, EvoInputDateRangeComponent],
})
export class EvoInputDateModule {}
