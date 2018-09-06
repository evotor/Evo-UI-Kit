import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'evo-segmented-bar',
    templateUrl: './evo-segmented-bar.component.html',
    styleUrls: [ './evo-segmented-bar.component.scss' ],
})
export class EvoSegmentedBarComponent implements OnInit {

    @Input() label: string;
    @Input() labelShort: string;

    constructor() {
    }

    ngOnInit() {
    }

}
