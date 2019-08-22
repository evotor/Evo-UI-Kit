import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvoPaginatorComponent } from './evo-paginator.component';

@NgModule({
  declarations: [EvoPaginatorComponent],
  imports: [
    CommonModule,
  ],
  exports: [EvoPaginatorComponent]
})
export class EvoPaginatorModule { }
