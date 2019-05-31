
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvoTabsComponent } from './components/evo-tabs.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ EvoTabsComponent ],
  exports: [ EvoTabsComponent ],
})
export class EvoTabsModule {}
