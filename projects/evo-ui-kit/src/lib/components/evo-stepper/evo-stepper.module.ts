import {NgModule} from '@angular/core';
import {EvoStepperComponent} from './evo-stepper.component';
import {EvoStepperItemComponent} from './evo-stepper-item/evo-stepper-item.component';

@NgModule({
    imports: [EvoStepperComponent, EvoStepperItemComponent],
    exports: [EvoStepperComponent, EvoStepperItemComponent],
})
export class EvoStepperModule {}
