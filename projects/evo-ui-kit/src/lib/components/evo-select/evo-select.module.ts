import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvoSelectComponent } from './evo-select.component';
import { EvoUiKitModule } from '../../evo-ui-kit.module';
import { FormsModule } from '@angular/forms';
import { EvoControlErrorModule } from '../evo-control-error/evo-control-error.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        EvoUiKitModule,
        EvoControlErrorModule,
    ],
    declarations: [EvoSelectComponent],
    exports: [EvoSelectComponent],
})
export class EvoSelectModule {
}
