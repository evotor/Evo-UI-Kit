import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvoPortalService } from './evo-portal.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    EvoPortalService,
  ]
})
export class EvoPortalModule {}
