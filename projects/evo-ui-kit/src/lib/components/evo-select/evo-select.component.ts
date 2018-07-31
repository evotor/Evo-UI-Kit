import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'evo-select',
    templateUrl: './evo-select.component.html',
    styleUrls: [ './evo-select.component.scss' ],
})
export class EvoSelectComponent implements OnInit {

    @Input() style: 'input' | 'inline' = 'input';
    @Input() label: string;

    constructor() { }

    ngOnInit() {
    }

    getSelectClasses() {
        return {
            [ this.style ]: true,
        };
    }

}
