import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EvoBadgeComponent} from './evo-badge.component';
import {EvoUiKitModule} from '../../evo-ui-kit.module';
import {EvoBadgeIconDirective} from "./directives/evo-badge-icon.directive";

@NgModule({
  declarations: [EvoBadgeComponent, EvoBadgeIconDirective],
    imports: [
        CommonModule,
        EvoUiKitModule,
    ],
    exports: [
        EvoBadgeComponent,
        EvoBadgeIconDirective,
    ]
})
export class EvoBadgeModule { }
