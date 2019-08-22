import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvoSwitcherComponent } from './evo-switcher.component';
import { EvoSwitcherItemComponent } from './components/evo-switcher-item/evo-switcher-item.component';
import { EvoUiKitModule } from '../../evo-ui-kit.module';

@NgModule({
  imports: [
    CommonModule,
    EvoUiKitModule,
  ],
  declarations: [ EvoSwitcherComponent, EvoSwitcherItemComponent ],
  exports: [ EvoSwitcherComponent, EvoSwitcherItemComponent ],
})
export class EvoSwitcherModule {}
