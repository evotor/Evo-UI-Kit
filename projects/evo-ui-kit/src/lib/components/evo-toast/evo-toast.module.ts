
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvoToastComponent } from './evo-toast.component';
import { EvoUiKitModule } from '../../evo-ui-kit.module';

@NgModule({
  imports: [
    CommonModule,
    EvoUiKitModule,
  ],
  declarations: [ EvoToastComponent ],
  exports: [ EvoToastComponent ],
})
export class EvoToastModule {}
