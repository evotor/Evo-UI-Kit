import { Component, HostListener, OnInit } from '@angular/core';
import { EvoIfExpandedService } from '../../../services/evo-if-expanded.service';

@Component({
    selector: 'evo-accordion-title',
    templateUrl: './evo-accordion-title.component.html',
    styleUrls: ['./evo-accordion-title.component.scss']
})
export class EvoAccordionTitleComponent implements OnInit {
    @HostListener('click')
    onClick() {
        this.ifExpandedService.expanded = !this.ifExpandedService.expanded;
    }

    constructor(private ifExpandedService: EvoIfExpandedService) { }

    ngOnInit(): void { }
}
