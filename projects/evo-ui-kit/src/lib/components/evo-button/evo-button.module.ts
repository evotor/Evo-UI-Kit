import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EvoUiKitModule} from '../../evo-ui-kit.module';
import {EvoButtonComponent} from './components/evo-button/evo-button.component';
import {EvoButtonOldComponent} from './components/evo-button-old/evo-button-old.component';
import {EvoLoaderModule} from '../evo-loader';

@NgModule({
    imports: [CommonModule, EvoUiKitModule, EvoLoaderModule],
    declarations: [EvoButtonComponent, EvoButtonOldComponent],
    exports: [EvoButtonComponent, EvoButtonOldComponent],
})
export class EvoButtonModule {}
