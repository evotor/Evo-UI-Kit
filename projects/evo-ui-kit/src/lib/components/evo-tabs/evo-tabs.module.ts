import {NgModule} from '@angular/core';
import {EvoTabsComponent} from './evo-tabs.component';
import {EvoTabComponent} from './evo-tab/evo-tab.component';
import {EvoTabsService} from './evo-tabs.service';
import {EvoTabContentComponent} from './evo-tab-content/evo-tab-content.component';

@NgModule({
    imports: [EvoTabsComponent, EvoTabComponent, EvoTabContentComponent],
    providers: [EvoTabsService],
    exports: [EvoTabsComponent, EvoTabComponent, EvoTabContentComponent],
})
export class EvoTabsModule {}
