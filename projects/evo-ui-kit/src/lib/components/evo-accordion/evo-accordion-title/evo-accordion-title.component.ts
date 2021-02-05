import { Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { EvoIfExpandedService } from '../../../services/evo-if-expanded.service';

@Component({
    selector: 'evo-accordion-title',
    templateUrl: './evo-accordion-title.component.html',
    styleUrls: ['./evo-accordion-title.component.scss']
})
export class EvoAccordionTitleComponent implements OnInit {
    @Input() label: string;

    @HostListener('click') onClick() {
        this.ifExpandedService.expanded = !this.ifExpandedService.expanded;
    }
    @HostBinding('class.evo-accordion-title') get hostClass() {
        return !!this.label;
    }

    isExpanded$ = this.ifExpandedService.expandedChange$;

    constructor(private ifExpandedService: EvoIfExpandedService) {
    }

    ngOnInit(): void { }
}
