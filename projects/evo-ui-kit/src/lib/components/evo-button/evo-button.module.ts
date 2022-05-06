import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvoButtonComponent } from './evo-button.component';
import { EvoUiKitModule } from '../../evo-ui-kit.module';

@NgModule({
  imports: [
    CommonModule,
    EvoUiKitModule,
  ],
  declarations: [ EvoButtonComponent ],
  exports: [ EvoButtonComponent ],
})
export class EvoButtonModule {}
