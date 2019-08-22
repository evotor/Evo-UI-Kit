
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvoTabsComponent } from './evo-tabs.component';
import { EvoTabItemComponent } from './evo-tab-item/evo-tab-item.component';
import { EvoUiKitModule } from '../../evo-ui-kit.module';

@NgModule({
  imports: [
    CommonModule,
    EvoUiKitModule,
  ],
  declarations: [ EvoTabsComponent, EvoTabItemComponent ],
  exports: [ EvoTabsComponent, EvoTabItemComponent ],
})
export class EvoTabsModule {}
