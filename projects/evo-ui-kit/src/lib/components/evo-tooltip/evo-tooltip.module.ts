import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EvoTooltipComponent} from './evo-tooltip.component';
import {EvoTooltipDirective} from './directives/evo-tooltip.directive';
import {OverlayModule} from '@angular/cdk/overlay';

@NgModule({
    imports: [OverlayModule, CommonModule],
    declarations: [EvoTooltipComponent, EvoTooltipDirective],
    exports: [EvoTooltipDirective],
})
export class EvoTooltipModule {}
