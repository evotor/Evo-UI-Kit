import { Component, OnInit, Input, TemplateRef, ContentChild } from '@angular/core';

@Component({
    selector: 'evo-table-column',
    templateUrl: './evo-table-column.component.html',
    styleUrls: [ './evo-table-column.component.scss' ],
})
export class EvoTableColumnComponent implements OnInit {

    @Input() prop: string = undefined;
    @Input() label = '';
    @ContentChild('content', { read: TemplateRef }) content: any;

    constructor() { }

    ngOnInit() {
    }

}
