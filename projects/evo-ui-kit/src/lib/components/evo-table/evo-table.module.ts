import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvoTableComponent } from './evo-table/evo-table.component';
import { EvoTableColumnComponent } from './evo-table-column/evo-table-column.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [ EvoTableComponent, EvoTableColumnComponent ],
  exports: [ EvoTableComponent, EvoTableColumnComponent ],
})
export class EvoTableModule {}
