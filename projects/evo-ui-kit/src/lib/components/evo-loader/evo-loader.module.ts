import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvoLoaderComponent } from './evo-loader.component';
import { EvoUiKitModule } from '../../evo-ui-kit.module';

@NgModule({
  imports: [
    CommonModule,
    EvoUiKitModule,
  ],
  declarations: [ EvoLoaderComponent ],
  exports: [ EvoLoaderComponent ],
})
export class EvoLoaderModule {}
