import {NgModule} from '@angular/core';
import {EvoIconComponent} from '../evo-icon';
import {EvoAccordionContentComponent} from './evo-accordion-content/evo-accordion-content.component';
import {EvoAccordionPanelComponent} from './evo-accordion-panel/evo-accordion-panel.component';
import {EvoAccordionTitleComponent} from './evo-accordion-title/evo-accordion-title.component';
import {EvoAccordionComponent} from './evo-accordion.component';

@NgModule({
    imports: [
        EvoIconComponent,
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
    ],
})
export class EvoAccordionModule {}
