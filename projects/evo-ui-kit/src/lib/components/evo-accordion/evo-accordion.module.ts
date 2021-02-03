
import { NgModule } from '@angular/core';
import { EvoAccordionPanelComponent } from './evo-accordion-panel/evo-accordion-panel.component';
import { EvoAccordionTitleComponent } from './evo-accordion-title/evo-accordion-title.component';
import { EvoAccordionComponent } from './evo-accordion.component';

@NgModule({
    declarations: [EvoAccordionComponent, EvoAccordionTitleComponent, EvoAccordionPanelComponent],
    exports: [EvoAccordionComponent, EvoAccordionTitleComponent, EvoAccordionPanelComponent]
})
export class EvoAccordionModule {
}
