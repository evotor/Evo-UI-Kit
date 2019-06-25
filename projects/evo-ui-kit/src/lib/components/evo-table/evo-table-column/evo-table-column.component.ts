import { Component, Input, TemplateRef, ContentChild } from '@angular/core';

@Component({
    selector: 'evo-table-column',
    templateUrl: './evo-table-column.component.html',
    styleUrls: ['./evo-table-column.component.scss'],
})
export class EvoTableColumnComponent {

    @Input() prop: string = undefined;
    @Input() label = '';
    @Input() className = '';
    @ContentChild('header', {read: TemplateRef}) header: any;
    @ContentChild('content', {read: TemplateRef}) content: any;

    constructor() {

    }

    @Input() formatter: (row: number, col: number, cellValue: any, item: any) => any = (row, col, cellValue) => cellValue;
}
