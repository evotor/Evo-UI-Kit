import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EvoCheckboxComponent} from './evo-checkbox.component';
import {EvoUiKitModule} from '../../evo-ui-kit.module';
import {EvoControlErrorModule} from '../evo-control-error/evo-control-error.module';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [CommonModule, FormsModule, EvoUiKitModule, EvoControlErrorModule],
    declarations: [EvoCheckboxComponent],
    exports: [EvoCheckboxComponent],
})
export class EvoCheckboxModule {}
