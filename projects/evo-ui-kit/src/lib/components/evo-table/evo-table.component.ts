import { Component, OnInit, ContentChildren, AfterContentInit, Input, Output, EventEmitter } from '@angular/core';
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
    @Output() rowClick: EventEmitter<number> = new EventEmitter<number>();

    states = {
        isRowClickable: false,
    };

    constructor() {
    }

    ngOnInit() {
        this.states.isRowClickable = this.rowClick.observers.length > 0;
    }

    ngAfterContentInit() {
    }

    getRowClasses() {
        return {
            'striped': this.stripe,
        };
    }

    onRowClick(rowIndex) {
        this.rowClick.emit(rowIndex);
    }
}
