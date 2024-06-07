import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EvoInputContenteditableComponent} from './evo-input-contenteditable.component';
import {EvoUiKitModule} from '../../evo-ui-kit.module';
import {EvoControlErrorModule} from '../evo-control-error';

@NgModule({
    declarations: [EvoInputContenteditableComponent],
    imports: [CommonModule, EvoUiKitModule, EvoControlErrorModule],
    exports: [EvoInputContenteditableComponent],
})
export class EvoInputContenteditableModule {}
