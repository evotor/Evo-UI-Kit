import { Component, OnInit, ContentChildren, AfterContentInit, Input } from '@angular/core';
import { EvoTableColumnComponent } from '../evo-table-column/evo-table-column.component';

@Component({
    selector: 'evo-table',
    templateUrl: './evo-table.component.html',
    styleUrls: [ './evo-table.component.scss' ],
})
export class EvoTableComponent implements OnInit, AfterContentInit {

    @Input() data: any[];
    @ContentChildren(EvoTableColumnComponent) columns: EvoTableColumnComponent[];
    @Input() stripe = false;

    constructor() { }

    ngOnInit() {
    }

    ngAfterContentInit() {
    }

    getRowClasses(index: number) {
        return {
            'evo-table__body__row_striped': index % 2 === 0,
        };
    }

}
