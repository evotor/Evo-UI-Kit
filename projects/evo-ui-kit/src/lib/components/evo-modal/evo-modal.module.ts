import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvoModalComponent } from './evo-modal.component';
import { EvoButtonModule } from '../evo-button';
import { EvoModalService } from './evo-modal.service';

@NgModule({
  imports: [
    CommonModule,
    EvoButtonModule,
  ],
  declarations: [ EvoModalComponent ],
  exports: [ EvoModalComponent ],
  providers: [ EvoModalService ]
})
export class EvoModalModule {}
