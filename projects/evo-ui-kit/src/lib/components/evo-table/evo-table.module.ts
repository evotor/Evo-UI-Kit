import {NgModule} from '@angular/core';
import {EvoTableComponent} from './evo-table/evo-table.component';
import {EvoTableColumnComponent} from './evo-table-column/evo-table-column.component';

@NgModule({
    imports: [EvoTableComponent, EvoTableColumnComponent],
    exports: [EvoTableComponent, EvoTableColumnComponent],
})
export class EvoTableModule {}
