import {Component, Input, OnInit} from '@angular/core';

export enum EvoLoaderStyles {
    darkblue = 'darkblue',
    green = 'green',
    white = 'white',
}

@Component({
    selector: 'evo-loader',
    templateUrl: './evo-loader.component.html',
    styleUrls: ['./evo-loader.component.scss'],
})
/**
 * @deprecated use `EvoCircularLoaderComponent`
 */
export class EvoLoaderComponent implements OnInit {
    @Input() color: EvoLoaderStyles = EvoLoaderStyles.darkblue;

    constructor() {}

    ngOnInit() {}
}
