import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvoTooltipComponent } from './evo-tooltip.component';
import { EvoTooltipDirective } from './directives/evo-tooltip.directive';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [EvoTooltipComponent, EvoTooltipDirective],
    exports: [EvoTooltipComponent],
})
export class EvoTooltipModule {
}
