import {Component, ContentChild, Input, TemplateRef} from '@angular/core';

@Component({
    selector: 'evo-table-column',
    templateUrl: './evo-table-column.component.html',
    styleUrls: ['./evo-table-column.component.scss'],
})
export class EvoTableColumnComponent {
    @Input() prop: string = undefined;
    @Input() label = '';
    @Input() className = '';
    // eslint-disable-next-line
    @ContentChild('header', {read: TemplateRef}) header: any;
    // eslint-disable-next-line
    @ContentChild('content', {read: TemplateRef}) content: any;

    constructor() {}

    // eslint-disable-next-line
    @Input() formatter: (row: number, col: number, cellValue: any, item: any) => any = (row, col, cellValue) =>
        cellValue;
}
