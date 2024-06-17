import {ChangeDetectionStrategy, Component, HostBinding, OnInit} from '@angular/core';
import {skipInitialRenderAnimation} from '../../common/animations/skip-initial-render.animation';

@Component({
    selector: 'evo-accordion',
    template: `
        <ng-content />
    `,
    styleUrls: ['./evo-accordion.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [skipInitialRenderAnimation],
})
export class EvoAccordionComponent implements OnInit {
    @HostBinding('@skipInitialRender') skipInitialRender;
    constructor() {}

    ngOnInit(): void {}
}
