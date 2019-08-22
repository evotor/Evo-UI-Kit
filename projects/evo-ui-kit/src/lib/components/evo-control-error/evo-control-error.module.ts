import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvoControlErrorComponent } from './evo-control-error.component';
import { EvoUiKitModule } from '../../evo-ui-kit.module';

@NgModule({
  imports: [
    CommonModule,
    EvoUiKitModule,
  ],
  declarations: [ EvoControlErrorComponent ],
  exports: [ EvoControlErrorComponent ],
})
export class EvoControlErrorModule {}
