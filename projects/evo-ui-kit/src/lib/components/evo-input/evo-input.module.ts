import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IMaskModule } from 'angular-imask';
import { EvoInputComponent } from './evo-input.component';
import { EvoUiKitModule } from '../../evo-ui-kit.module';
import { EvoControlErrorModule } from '../evo-control-error/evo-control-error.module';
import { FormsModule } from '@angular/forms';
import { EvoIconModule } from '../evo-icon';
import { iconHelp } from '@evo/ui-kit/icons/system';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        EvoUiKitModule,
        EvoControlErrorModule,
        IMaskModule,
        EvoIconModule.forRoot([{
            name: 'icons',
            shapes: {
                help: iconHelp,
            },
        }]),
    ],
    declarations: [EvoInputComponent],
    exports: [EvoInputComponent],
})
export class EvoInputModule {
}
