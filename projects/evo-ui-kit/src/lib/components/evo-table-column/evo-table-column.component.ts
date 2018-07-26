import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'evo-table-column',
  templateUrl: './evo-table-column.component.html',
  styleUrls: [ './evo-table-column.component.scss' ],
})
export class EvoTableColumnComponent implements OnInit {

    @Input() data: any[];

    constructor() { }

    ngOnInit() {
    }

}
