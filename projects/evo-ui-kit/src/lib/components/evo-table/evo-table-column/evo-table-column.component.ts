import {Component, ContentChild, Input, TemplateRef} from '@angular/core';

export interface EvoTableColumnHeaderContext {
    label: string;
}

// eslint-disable-next-line
export interface EvoTableColumnCellContext<T = any> {
    row: number;
    col: number;
    item: T;
    // eslint-disable-next-line
    value: any;
}

@Component({
    selector: 'evo-table-column',
    templateUrl: './evo-table-column.component.html',
    styleUrls: ['./evo-table-column.component.scss'],
    standalone: true,
})
export class EvoTableColumnComponent {
    @Input() prop?: string;
    @Input() label = '';
    @Input() className = '';

    @ContentChild('header', {read: TemplateRef}) header?: TemplateRef<EvoTableColumnHeaderContext>;
    @ContentChild('content', {read: TemplateRef}) content?: TemplateRef<EvoTableColumnCellContext>;

    // eslint-disable-next-line
    @Input() formatter: (row: number, col: number, cellValue: any, item: any) => any = (row, col, cellValue) =>
        cellValue;
}
