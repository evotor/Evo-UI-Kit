import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvoRadioGroupComponent } from './evo-radio-group.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EvoUiKitModule } from '../../evo-ui-kit.module';

export { EvoRadioGroupDirections, EvoRadioGroupThemes } from './evo-radio-group.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EvoUiKitModule,
  ],
  declarations: [ EvoRadioGroupComponent ],
  exports: [ EvoRadioGroupComponent ],
})
export class EvoRadioGroupModule {}
