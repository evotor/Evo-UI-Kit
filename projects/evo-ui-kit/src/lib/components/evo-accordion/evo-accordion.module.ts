import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { iconUnfoldMore, iconUnfoldLess } from '@evotor-dev/ui-kit/icons/navigation';
import { EvoUiKitModule } from '../../evo-ui-kit.module';
import { EvoIconModule } from '../evo-icon';
import { EvoAccordionContentComponent } from './evo-accordion-content/evo-accordion-content.component';
import { EvoAccordionPanelComponent } from './evo-accordion-panel/evo-accordion-panel.component';
import { EvoAccordionTitleComponent } from './evo-accordion-title/evo-accordion-title.component';
import { EvoAccordionComponent } from './evo-accordion.component';

@NgModule({
    imports: [
        CommonModule,
        EvoUiKitModule,
        EvoIconModule.forRoot([
            {
                name: 'navigation',
                shapes: {
                    unfold: iconUnfoldMore,
                    fold: iconUnfoldLess,
                },
            },
        ]),
    ],
    declarations: [
        EvoAccordionComponent,
        EvoAccordionTitleComponent,
        EvoAccordionPanelComponent,
        EvoAccordionContentComponent,
    ],
    exports: [
        EvoAccordionComponent,
        EvoAccordionTitleComponent,
        EvoAccordionPanelComponent,
        EvoAccordionContentComponent,
    ]
})
export class EvoAccordionModule {
}
