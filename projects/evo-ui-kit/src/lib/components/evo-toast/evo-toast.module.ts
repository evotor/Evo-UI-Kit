
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvoToastComponent } from './components/evo-toast.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ EvoToastComponent ],
  exports: [ EvoToastComponent ],
})
export class EvoToastModule {}
