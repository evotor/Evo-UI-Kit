import { Component, OnInit, Input, TemplateRef, ContentChild } from '@angular/core';

@Component({
    selector: 'evo-table-column',
    templateUrl: './evo-table-column.component.html',
    styleUrls: [ './evo-table-column.component.scss' ],
})
export class EvoTableColumnComponent implements OnInit {

    @Input() prop: string = undefined;
    @Input() label = '';
    @ContentChild('header', { read: TemplateRef }) header: any;
    @ContentChild('content', { read: TemplateRef }) content: any;
    @Input() formatter: (row: number, col: number, cellValue: any, item: any) => any = (row, col, cellValue) => cellValue;

    constructor() { }

    ngOnInit() {
    }

}
