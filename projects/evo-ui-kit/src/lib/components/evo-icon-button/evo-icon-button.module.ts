import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvoUiKitModule } from '../../evo-ui-kit.module';
import { FormsModule } from '@angular/forms';
import { EvoIconButtonComponent } from './evo-icon-button.component';
import { EvoIconModule } from '../evo-icon/evo-icon.module';
import { icons } from '../../../../icons';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        EvoUiKitModule,
        EvoIconModule.forChild([...icons]),
    ],
    declarations: [EvoIconButtonComponent],
    exports: [EvoIconButtonComponent],
})
export class EvoIconButtonModule {
}
