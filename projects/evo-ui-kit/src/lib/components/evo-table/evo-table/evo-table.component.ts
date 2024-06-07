import {
    AfterContentInit,
    Component,
    ContentChildren,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges,
} from '@angular/core';
import {EvoTableColumnComponent} from '../evo-table-column/evo-table-column.component';

export class EvoTableRowClickEvent {
    payload: {
        // eslint-disable-next-line
        item: any;
        rowIndex: number;
    };
    event: MouseEvent;
}

@Component({
    selector: 'evo-table',
    templateUrl: './evo-table.component.html',
    styleUrls: ['./evo-table.component.scss'],
})
export class EvoTableComponent implements OnInit, AfterContentInit, OnChanges {
    filteredColumns: EvoTableColumnComponent[] = [];

    // eslint-disable-next-line
    @Input() data: any[];
    // eslint-disable-next-line
    @Input() showHeader = true;
    @Input() stripe = false;
    @Input() visibleColumns: string[];
    // eslint-disable-next-line
    @Input() rowClasses?: string | string[] | Set<string> | {[klass: string]: any};

    @Output() rowClick: EventEmitter<EvoTableRowClickEvent> = new EventEmitter<EvoTableRowClickEvent>();
    @ContentChildren(EvoTableColumnComponent) columns: EvoTableColumnComponent[];

    states = {
        isRowClickable: false,
    };

    ngOnChanges(changes: SimpleChanges) {
        if ('visibleColumns' in changes) {
            this.filterColumns();
        }
    }

    ngOnInit() {
        this.states.isRowClickable = this.rowClick.observers.length > 0;
    }

    ngAfterContentInit() {
        this.filteredColumns = this.columns;
        this.filterColumns();
    }

    getRowClasses() {
        return {
            striped: this.stripe,
        };
    }

    onRowClick(rowIndex, item, event) {
        this.rowClick.emit({
            payload: {rowIndex, item},
            event: event,
        });
    }

    private filterColumns() {
        if (this.visibleColumns && this.columns) {
            this.filteredColumns = this.columns.filter((col) => this.visibleColumns.includes(col.prop));
        }
    }
}
