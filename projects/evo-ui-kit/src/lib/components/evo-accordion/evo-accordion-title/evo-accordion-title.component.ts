import { Component, HostListener, Input, OnInit } from '@angular/core';
import { EvoExpandedService } from '../../../services/evo-expanded.service';

@Component({
    selector: 'evo-accordion-title',
    templateUrl: './evo-accordion-title.component.html',
    styleUrls: ['./evo-accordion-title.component.scss']
})
export class EvoAccordionTitleComponent implements OnInit {
    @Input() label: string;

    isExpanded$ = this.expandedService.isExpandedChange$;

    constructor(private expandedService: EvoExpandedService) { }

    @HostListener('click') onClick() {
        this.expandedService.isExpanded = !this.expandedService.isExpanded;
    }

    ngOnInit(): void { }
}
