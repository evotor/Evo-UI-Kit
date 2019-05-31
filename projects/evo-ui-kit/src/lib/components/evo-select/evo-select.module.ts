import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvoSelectComponent } from './evo-select.component';
import { EvoUiKitModule } from '../../evo-ui-kit.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    EvoUiKitModule,
  ],
  declarations: [ EvoSelectComponent ],
  exports: [ EvoSelectComponent ],
})
export class EvoSelectModule {}
