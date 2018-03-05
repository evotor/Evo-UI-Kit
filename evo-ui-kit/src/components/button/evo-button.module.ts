import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EVOButtonComponent } from './evo-button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EVOButtonComponent],
  exports: [
    EVOButtonComponent
  ]
})
export class EvoButtonModule { }
