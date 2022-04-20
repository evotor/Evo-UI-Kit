import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvoButtonComponent } from './evo-button.component';
import { EvoUiKitModule } from '../../evo-ui-kit.module';
import { EvoLoaderModule } from '../evo-loader';

@NgModule({
    imports: [
        CommonModule,
        EvoUiKitModule,
        EvoLoaderModule,
    ],
  declarations: [ EvoButtonComponent ],
  exports: [ EvoButtonComponent ],
})
export class EvoButtonModule {}
