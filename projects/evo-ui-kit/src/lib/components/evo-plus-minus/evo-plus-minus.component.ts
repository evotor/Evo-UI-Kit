import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
    selector: 'evo-plus-minus',
    templateUrl: './evo-plus-minus.component.html',
    styleUrls: [ './evo-plus-minus.component.scss' ],
})
export class EvoPlusMinusComponent implements OnInit {
    @Input() id: any;
    @Input() disabledMinus: boolean;
    @Input() disabledPlus: boolean;

    @Output() increase: EventEmitter<string> = new EventEmitter<string>();
    @Output() decrease: EventEmitter<string> = new EventEmitter<string>();

    constructor() { }

    ngOnInit() { }

}
