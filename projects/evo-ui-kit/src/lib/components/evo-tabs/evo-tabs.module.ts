
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvoTabsComponent } from './evo-tabs.component';
import { EvoTabComponent } from './evo-tab/evo-tab.component';
import { EvoUiKitModule } from '../../evo-ui-kit.module';
import { TabsService } from './evo-tabs.service';
import { EvoTabContentComponent } from './evo-tab-content/evo-tab-content.component';

@NgModule({
  imports: [
    CommonModule,
    EvoUiKitModule,
  ],
  declarations: [ EvoTabsComponent, EvoTabComponent, EvoTabContentComponent ],
  providers: [ TabsService ],
  exports: [ EvoTabsComponent, EvoTabComponent, EvoTabContentComponent ],
})
export class EvoTabsModule {}
