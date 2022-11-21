import { Component } from '@angular/core';
import { EvoExpandedService } from '../../../services/evo-expanded.service';

@Component({
    selector: 'evo-accordion-panel',
    template: `<ng-content></ng-content>`,
    styleUrls: ['./evo-accordion-panel.component.scss'],
    providers: [EvoExpandedService],
})
export class EvoAccordionPanelComponent {
    constructor(private evoExpandedService: EvoExpandedService) { }

    toggle() {
        this.evoExpandedService.isExpanded = !this.evoExpandedService.isExpanded;
    }
}
