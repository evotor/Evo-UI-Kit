import { Component, HostBinding } from '@angular/core';
import { expandAnimation } from '../../../common/animations/expand.animation';

@Component({
    selector: 'evo-accordion-content',
    template: `<ng-content></ng-content>`,
    styleUrls: ['./evo-accordion-content.component.scss'],
    animations: [expandAnimation]
})
export class EvoAccordionContentComponent {
    @HostBinding('@expand') expandAnimation;

    constructor() { }
}
