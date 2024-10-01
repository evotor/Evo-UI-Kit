import {ChangeDetectionStrategy, Component, HostBinding} from '@angular/core';
import {skipInitialRenderAnimation} from '../../common/animations/skip-initial-render.animation';

@Component({
    selector: 'evo-accordion',
    template: `
        <ng-content />
    `,
    styleUrls: ['./evo-accordion.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [skipInitialRenderAnimation],
    standalone: true,
})
export class EvoAccordionComponent {
    @HostBinding('@skipInitialRender') skipInitialRender;
}
