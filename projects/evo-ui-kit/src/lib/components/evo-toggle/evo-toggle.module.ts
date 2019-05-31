
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvoToggleComponent } from './components/evo-toggle.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ EvoToggleComponent ],
  exports: [ EvoToggleComponent ],
})
export class EvoToggleModule {}
