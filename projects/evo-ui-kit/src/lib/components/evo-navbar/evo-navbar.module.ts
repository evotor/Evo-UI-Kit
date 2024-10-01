import {NgModule} from '@angular/core';
import {EvoNavbarComponent} from './evo-navbar.component';
import {EvoNavbarItemComponent} from './evo-navbar-item/evo-navbar-item.component';
import {MobileViewProvider} from '../../common/constants/view-breakpoint-streams';

@NgModule({
    imports: [EvoNavbarComponent, EvoNavbarItemComponent],
    exports: [EvoNavbarComponent],
    providers: [MobileViewProvider],
})
export class EvoNavbarModule {}
