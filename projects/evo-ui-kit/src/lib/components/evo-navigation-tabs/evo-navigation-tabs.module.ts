import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {EvoNavigationTabsComponent} from './evo-navigation-tabs.component';
import {EvoNavigationTabDirective} from './evo-navigation-tab.directive';

@NgModule({
    declarations: [EvoNavigationTabsComponent, EvoNavigationTabDirective],
    imports: [CommonModule, RouterModule],
    exports: [EvoNavigationTabsComponent, EvoNavigationTabDirective],
})
export class EvoNavigationTabsModule {}
