import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvoAlertComponent } from './evo-alert.component';
import { EvoUiKitModule } from '../../evo-ui-kit.module';

@NgModule({
  imports: [
    CommonModule,
    EvoUiKitModule,
  ],
  declarations: [ EvoAlertComponent ],
  exports: [ EvoAlertComponent ],
})
/**
 * @deprecated use `EvoNoteModule`
 */
export class EvoAlertModule {}
