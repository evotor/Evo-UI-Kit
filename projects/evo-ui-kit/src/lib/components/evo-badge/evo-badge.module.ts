import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EvoBadgeComponent} from './evo-badge.component';
import {EvoUiKitModule} from '../../evo-ui-kit.module';

@NgModule({
  declarations: [EvoBadgeComponent],
    imports: [
        CommonModule,
        EvoUiKitModule,
    ],
    exports: [
        EvoBadgeComponent,
    ]
})
export class EvoBadgeModule { }
