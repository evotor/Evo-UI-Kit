import { Component, OnInit, ContentChildren, AfterContentInit } from '@angular/core';
import { EvoTableColumnComponent } from '../evo-table-column/evo-table-column.component';

@Component({
    selector: 'evo-table',
    templateUrl: './evo-table.component.html',
    styleUrls: [ './evo-table.component.scss' ],
})
export class EvoTableComponent implements OnInit, AfterContentInit {

    @ContentChildren(EvoTableColumnComponent) columns: EvoTableColumnComponent[];

    constructor() { }

    ngOnInit() {
    }

    ngAfterContentInit() {
        console.log(this.columns);
    }
}
