
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvoStepperComponent } from './components/evo-stepper.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ EvoStepperComponent ],
  exports: [ EvoStepperComponent ],
})
export class EvoStepperModule {}
