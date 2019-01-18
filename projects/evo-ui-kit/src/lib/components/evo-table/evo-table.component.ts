import { Component, OnInit, ContentChildren, AfterContentInit, Input, Output, EventEmitter } from '@angular/core';
import { EvoTableColumnComponent } from '../evo-table-column/evo-table-column.component';

export class EvoTableRowClickEvent {
    rowIndex: number;
    event: MouseEvent;
}

@Component({
    selector: 'evo-table',
    templateUrl: './evo-table.component.html',
    styleUrls: [ './evo-table.component.scss' ],
})
export class EvoTableComponent implements OnInit, AfterContentInit {

    @Input() data: any[];
    @Input() stripe = false;
    @Output() rowClick: EventEmitter<EvoTableRowClickEvent> = new EventEmitter<EvoTableRowClickEvent>();
    @ContentChildren(EvoTableColumnComponent) columns: EvoTableColumnComponent[];

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

    onRowClick(rowIndex, event) {
        this.rowClick.emit({
            rowIndex: rowIndex,
            event: event,
        });
    }
}
