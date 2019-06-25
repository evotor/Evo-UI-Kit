import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvoTextareaComponent } from './evo-textarea.component';
import { EvoControlErrorModule } from '../evo-control-error/evo-control-error.module';
import { EvoUiKitModule } from '../../evo-ui-kit.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EvoUiKitModule,
    EvoControlErrorModule,
  ],
  declarations: [ EvoTextareaComponent ],
  exports: [ EvoTextareaComponent ],
})
export class EvoTextareaModule {}
