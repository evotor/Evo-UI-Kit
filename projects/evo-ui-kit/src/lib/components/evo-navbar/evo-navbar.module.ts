import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EvoNavbarComponent} from './evo-navbar.component';
import {RouterModule} from '@angular/router';
import {EvoNavbarItemComponent} from './evo-navbar-item/evo-navbar-item.component';
import {MobileViewProvider} from '../../common/constants/view-breakpoint-streams';
import {EvoUiKitModule} from '../../evo-ui-kit.module';
import {EvoDropdownModule} from '../evo-dropdown';

@NgModule({
    declarations: [EvoNavbarComponent, EvoNavbarItemComponent],
    imports: [CommonModule, EvoUiKitModule, RouterModule, EvoDropdownModule],
    exports: [EvoNavbarComponent],
    providers: [MobileViewProvider],
})
export class EvoNavbarModule {}
