import {Component, ViewEncapsulation} from '@angular/core';
import {EvoTooltipPosition} from '@evotor-dev/ui-kit';
import {EvoSidebarService} from '../../projects/evo-ui-kit/src/lib/components/evo-sidebar';
import {TestSidebarComponent} from './test-sidebar/test-sidebar.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
    readonly positions = [
        EvoTooltipPosition.TOP_START,
        EvoTooltipPosition.TOP,
        EvoTooltipPosition.TOP_END,

        EvoTooltipPosition.BOTTOM_START,
        EvoTooltipPosition.BOTTOM,
        EvoTooltipPosition.BOTTOM_END,

        EvoTooltipPosition.RIGHT_START,
        EvoTooltipPosition.RIGHT,
        EvoTooltipPosition.RIGHT_END,

        EvoTooltipPosition.LEFT_START,
        EvoTooltipPosition.LEFT,
        EvoTooltipPosition.LEFT_END,
    ];

    constructor(private readonly evoSidebarService: EvoSidebarService) {
        setTimeout(() => {
            this.evoSidebarService.open({
                component: TestSidebarComponent,
            });
        });
    }
}
