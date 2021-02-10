import { Component, HostBinding, Optional } from '@angular/core';
import { expandAnimation } from '../../../common/animations/expand.animation';
import { EvoIsExpandedDirective } from '../../../directives/evo-is-expanded.directive';
import { EvoExpandedService } from '../../../services/evo-expanded.service';

@Component({
    selector: 'evo-accordion-content',
    template: `<ng-content></ng-content>`,
    styleUrls: ['./evo-accordion-content.component.scss'],
    animations: [expandAnimation],
})
export class EvoAccordionContentComponent {
    @HostBinding('@expand') get expandAnimation() {
        if (this.evoIsExpandedDirective) {
            return;
        } else {
            return this.evoExpandedService.isExpanded ? 'open' : 'close';
        }
    }

    constructor(@Optional() private evoIsExpandedDirective: EvoIsExpandedDirective,
                private evoExpandedService: EvoExpandedService) { }
}
