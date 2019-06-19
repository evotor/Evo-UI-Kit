import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvoPopoverComponent } from './evo-popover.component';
import { EvoUiKitModule } from '../../evo-ui-kit.module';

@NgModule({
  imports: [
    CommonModule,
    EvoUiKitModule,
  ],
  declarations: [ EvoPopoverComponent ],
  exports: [ EvoPopoverComponent ],
})
export class EvoPopoverModule {}
