import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvoTabsComponent } from './evo-tabs.component';
import { EvoTabComponent } from './evo-tab/evo-tab.component';
import { EvoUiKitModule } from '../../evo-ui-kit.module';
import { EvoTabsService } from './evo-tabs.service';
import { EvoTabContentComponent } from './evo-tab-content/evo-tab-content.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        EvoUiKitModule,
        RouterModule,
    ],
  declarations: [ EvoTabsComponent, EvoTabComponent, EvoTabContentComponent ],
  providers: [ EvoTabsService ],
  exports: [ EvoTabsComponent, EvoTabComponent, EvoTabContentComponent ],
})
export class EvoTabsModule {}
