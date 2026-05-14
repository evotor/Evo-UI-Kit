import {NgModule} from '@angular/core';
import {EvoTooltipDirective} from './directives/evo-tooltip.directive';

@NgModule({
    imports: [EvoTooltipDirective],
    exports: [EvoTooltipDirective],
})
export class EvoTooltipModule {
}
