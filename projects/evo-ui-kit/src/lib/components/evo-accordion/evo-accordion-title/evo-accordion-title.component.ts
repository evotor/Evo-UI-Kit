import {Component, HostListener, Input} from '@angular/core';
import {EvoExpandedService} from '../../../services/evo-expanded.service';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'evo-accordion-title',
    templateUrl: './evo-accordion-title.component.html',
    styleUrls: ['./evo-accordion-title.component.scss'],
    animations: [
        trigger('toggleBlock', [
            transition(':leave', [
                style({opacity: 1}),
                animate(
                    '.3s ease-in-out',
                    style({
                        opacity: 0,
                    }),
                ),
            ]),
            transition(':enter', [
                style({opacity: 0}),
                animate(
                    '.3s ease-in-out',
                    style({
                        opacity: 1,
                    }),
                ),
            ]),
        ]),
    ],
})
export class EvoAccordionTitleComponent {
    @Input() label: string;

    isExpanded$ = this.expandedService.isExpandedChange$;

    constructor(private readonly expandedService: EvoExpandedService) {}

    @HostListener('click') onClick() {
        this.expandedService.isExpanded = !this.expandedService.isExpanded;
    }
}
