import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EvoUiKitModule} from '../../evo-ui-kit.module';
import {EvoButtonComponent} from './components/evo-button/evo-button.component';
import {EvoLoaderModule} from '../evo-loader';

@NgModule({
    imports: [CommonModule, EvoUiKitModule, EvoLoaderModule],
    declarations: [EvoButtonComponent],
    exports: [EvoButtonComponent],
})
export class EvoButtonModule {}
