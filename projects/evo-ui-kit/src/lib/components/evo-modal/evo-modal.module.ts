import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvoModalComponent } from './evo-modal.component';
import { EvoButtonModule } from '../evo-button';

@NgModule({
  imports: [
    CommonModule,
    EvoButtonModule,
  ],
  declarations: [ EvoModalComponent ],
  exports: [ EvoModalComponent ],
})
export class EvoModalModule {}
