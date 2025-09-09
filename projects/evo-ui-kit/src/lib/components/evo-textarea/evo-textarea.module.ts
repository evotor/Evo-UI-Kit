import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EvoTextareaComponent} from './evo-textarea.component';
import {EvoControlErrorModule} from '../evo-control-error';
import {EvoUiKitModule} from '../../evo-ui-kit.module';

@NgModule({
    imports: [CommonModule, EvoUiKitModule, EvoControlErrorModule],
    declarations: [EvoTextareaComponent],
    exports: [EvoTextareaComponent],
})
export class EvoTextareaModule {}
