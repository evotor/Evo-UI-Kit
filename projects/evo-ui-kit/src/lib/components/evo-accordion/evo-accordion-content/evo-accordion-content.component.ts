import { Component, HostBinding } from '@angular/core';
import { expandAnimation } from '../../../common/animations/expand.animation';

@Component({
    selector: 'evo-accordion-content',
    templateUrl: './evo-accordion-content.component.html',
    styleUrls: ['./evo-accordion-content.component.scss'],
    animations: [expandAnimation]
})
export class EvoAccordionContentComponent {
    @HostBinding('@expand') expandAnimation;

    constructor() { }
}
