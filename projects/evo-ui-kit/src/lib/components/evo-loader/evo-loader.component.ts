import { Component, Input, OnInit } from '@angular/core';

export enum EvoLoaderStyles {
    darkblue = 'darkblue',
    green = 'green',
}

@Component({
    selector: 'evo-loader',
    templateUrl: './evo-loader.component.html',
    styleUrls: [ './evo-loader.component.scss' ],
})
export class EvoLoaderComponent implements OnInit {
    @Input() color: EvoLoaderStyles;

    constructor() { }

    ngOnInit() { }

}
