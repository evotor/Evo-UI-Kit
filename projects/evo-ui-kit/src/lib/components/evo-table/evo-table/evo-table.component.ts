import {
    AfterContentInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChildren,
    DestroyRef,
    EventEmitter,
    inject,
    Input,
    OnChanges,
    Output,
    QueryList,
    SimpleChanges,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {EvoTableColumnComponent} from '../evo-table-column/evo-table-column.component';
import {NgClass, NgTemplateOutlet} from '@angular/common';

/** Клик по этим элементам внутри ячейки не считается кликом по строке. */
const INTERACTIVE_ELEMENTS_SELECTOR = 'a, button, input, select, textarea, label';

// eslint-disable-next-line
export interface EvoTableRowClickEvent<T = any> {
    payload: {
        item: T;
        rowIndex: number;
    };
    event: MouseEvent | KeyboardEvent;
}

@Component({
    selector: 'evo-table',
    templateUrl: './evo-table.component.html',
    styleUrls: ['./evo-table.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [NgClass, NgTemplateOutlet],
})
// eslint-disable-next-line
export class EvoTableComponent<T = any> implements AfterContentInit, OnChanges {
    filteredColumns: EvoTableColumnComponent[] = [];

    @Input() data: T[];
    @Input() showHeader = true;
    @Input() visibleColumns: string[];
    @Input() rowClasses?: NgClass['ngClass'] | ((row: number, item: T) => NgClass['ngClass']);
    @Input() rowTitle?: string | ((row: number, item: T) => string);
    @Input() rowTrackBy?: (index: number, item: T) => unknown;

    @Output() rowClick: EventEmitter<EvoTableRowClickEvent<T>> = new EventEmitter<EvoTableRowClickEvent<T>>();
    @ContentChildren(EvoTableColumnComponent) columns: QueryList<EvoTableColumnComponent>;

    private readonly cdr = inject(ChangeDetectorRef);
    private readonly destroyRef = inject(DestroyRef);

    get isRowClickable(): boolean {
        return this.rowClick.observed;
    }

    ngOnChanges(changes: SimpleChanges): void {
        if ('visibleColumns' in changes) {
            this.filterColumns();
        }
    }

    ngAfterContentInit(): void {
        this.filterColumns();
        this.columns.changes.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((): void => {
            this.filterColumns();
            this.cdr.markForCheck();
        });
    }

    trackRow(index: number, item: T): unknown {
        return this.rowTrackBy ? this.rowTrackBy(index, item) : index;
    }

    onRowClick(rowIndex: number, item: T, event: MouseEvent | KeyboardEvent): void {
        const target = event.target as HTMLElement | null;
        if (target?.closest(INTERACTIVE_ELEMENTS_SELECTOR)) {
            return;
        }

        if (event instanceof KeyboardEvent) {
            // не скроллить страницу по Space на сфокусированной строке
            event.preventDefault();
        }

        this.rowClick.emit({
            payload: {rowIndex, item},
            event: event,
        });
    }

    getClasses(row: number, item: T): NgClass['ngClass'] {
        return typeof this.rowClasses === 'function' ? this.rowClasses(row, item) : this.rowClasses;
    }

    getTitle(row: number, item: T): string | undefined {
        return typeof this.rowTitle === 'function' ? this.rowTitle(row, item) : this.rowTitle;
    }

    // eslint-disable-next-line
    getCellValue(column: EvoTableColumnComponent, row: number, col: number, item: T): any {
        // eslint-disable-next-line
        const cellValue = column.prop !== undefined ? (item as any)[column.prop] : item;
        return column.formatter(row, col, cellValue, item);
    }

    private filterColumns(): void {
        if (!this.columns) {
            return;
        }

        this.filteredColumns = this.visibleColumns
            ? this.columns.filter((col): boolean => col.prop !== undefined && this.visibleColumns.includes(col.prop))
            : this.columns.toArray();
    }
}
