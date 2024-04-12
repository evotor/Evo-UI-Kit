import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EvoBannerComponent} from './evo-banner.component';
import {EvoUiKitModule, WINDOW_PROVIDERS} from '../../evo-ui-kit.module';

@NgModule({
    imports: [CommonModule, EvoUiKitModule],
    declarations: [EvoBannerComponent],
    exports: [EvoBannerComponent],
    providers: [WINDOW_PROVIDERS],
})
/**
 * @deprecated
 */
export class EvoBannerModule {}
