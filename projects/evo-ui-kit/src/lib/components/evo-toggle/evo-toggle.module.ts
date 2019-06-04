
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvoToggleComponent } from './evo-toggle.component';
import { EvoUiKitModule } from '../../evo-ui-kit.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    EvoUiKitModule,
  ],
  declarations: [ EvoToggleComponent ],
  exports: [ EvoToggleComponent ],
})
export class EvoToggleModule {}
