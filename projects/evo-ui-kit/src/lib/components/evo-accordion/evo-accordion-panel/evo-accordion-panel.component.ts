import { Component } from '@angular/core';
import { EvoIfExpandedService } from '../../../services/evo-if-expanded.service';

@Component({
    selector: 'evo-accordion-panel',
    template: `<ng-content></ng-content>`,
    styleUrls: ['./evo-accordion-panel.component.scss'],
    providers: [EvoIfExpandedService]
})
export class EvoAccordionPanelComponent {
    constructor(private evoIfExpandedService: EvoIfExpandedService) { }

    public toggle() {
        this.evoIfExpandedService.expanded = !this.evoIfExpandedService.expanded;
    }
}
