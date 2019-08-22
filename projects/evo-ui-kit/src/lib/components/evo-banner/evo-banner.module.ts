import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvoBannerComponent } from './evo-banner.component';
import { EvoUiKitModule } from '../../evo-ui-kit.module';

@NgModule({
  imports: [
    CommonModule,
    EvoUiKitModule,
  ],
  declarations: [ EvoBannerComponent ],
  exports: [ EvoBannerComponent ],
})
export class EvoBannerModule {}
