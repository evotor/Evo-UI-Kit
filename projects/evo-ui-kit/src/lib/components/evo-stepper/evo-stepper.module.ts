import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EvoStepperComponent} from './evo-stepper.component';
import {EvoStepperItemComponent} from './evo-stepper-item/evo-stepper-item.component';
import {EvoUiKitModule} from '../../evo-ui-kit.module';

@NgModule({
    imports: [CommonModule, EvoUiKitModule],
    declarations: [EvoStepperComponent, EvoStepperItemComponent],
    exports: [EvoStepperComponent, EvoStepperItemComponent],
})
export class EvoStepperModule {}
