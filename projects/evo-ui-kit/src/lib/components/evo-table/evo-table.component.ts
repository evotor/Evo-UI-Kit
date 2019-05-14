import { Component, OnInit, ContentChildren, AfterContentInit, Input, Output, EventEmitter } from '@angular/core';
import { EvoTableColumnComponent } from '../evo-table-column/evo-table-column.component';

export class EvoTableRowClickEvent {
    payload: {
        item: any,
        rowIndex: number,
    };
    event: MouseEvent;
}

export enum EvoTableThemes {
    mobile = 'mobile'
}


@Component({
    selector: 'evo-table',
    templateUrl: './evo-table.component.html',
    styleUrls: [ './evo-table.component.scss' ],
})
export class EvoTableComponent implements OnInit, AfterContentInit {

    @Input() data: any[];
    @Input() showHeader = true;
    @Input() stripe = false;
    @Input() theme: EvoTableThemes;
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

    onRowClick(rowIndex, item, event) {
        this.rowClick.emit({
            payload: {rowIndex, item},
            event: event,
        });
    }

    get totalClasses(): string[] {
        const classes: string[] = [];

        if (this.theme) {
            classes.push(this.theme);
        }

        return classes;
    }
}
