import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OverlayModule} from '@angular/cdk/overlay';
import {ReactiveFormsModule} from '@angular/forms';
import {EvoInputDateComponent} from './components';
import {EvoInputDateInnerComponent} from './components/evo-input-date-inner/evo-input-date-inner.component';
import {EvoInputDateRangeComponent} from './components';
import {EvoCalendarModule} from '../evo-calendar';
import {EvoIconModule} from '../evo-icon';
import {icons} from '@evotor-dev/ui-kit/icons';
import {EvoInputModule} from '@evotor-dev/ui-kit';
import {IMaskDirectiveModule} from 'angular-imask';

@NgModule({
    declarations: [EvoInputDateComponent, EvoInputDateRangeComponent, EvoInputDateInnerComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        OverlayModule,
        EvoCalendarModule,
        EvoIconModule.forChild([...icons]),
        EvoInputModule,
        IMaskDirectiveModule,
    ],
    exports: [EvoInputDateComponent, EvoInputDateRangeComponent],
})
export class EvoInputDateModule {}
