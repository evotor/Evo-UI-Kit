import { Component, OnInit } from '@angular/core';
import { EvoIfExpandedService } from '../../../services/evo-if-expanded.service';

@Component({
    selector: 'evo-evo-accordion-panel',
    template: `<ng-content></ng-content>`,
    styleUrls: ['./evo-accordion-panel.component.scss'],
    providers: [EvoIfExpandedService]
})
export class EvoAccordionPanelComponent implements OnInit {
    constructor() { }

    ngOnInit(): void {
    }
}
