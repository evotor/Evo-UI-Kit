
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvoSubmenuComponent } from './evo-submenu.component';
import { EvoUiKitModule } from '../../evo-ui-kit.module';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    EvoUiKitModule,
    NgxPageScrollModule,
  ],
  declarations: [ EvoSubmenuComponent ],
  exports: [ EvoSubmenuComponent ],
})
export class EvoSubmenuModule {}
