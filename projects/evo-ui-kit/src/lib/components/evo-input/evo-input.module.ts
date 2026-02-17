import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IMaskModule } from 'angular-imask';
import { EvoInputComponent } from './evo-input.component';
import { EvoUiKitModule } from '../../evo-ui-kit.module';
import { EvoControlErrorModule } from '../evo-control-error/evo-control-error.module';
import { FormsModule } from '@angular/forms';
import { EvoIconModule } from '../evo-icon';
import { iconHelp, iconDecline } from '@evotor-dev/evo-icons/dist/monochrome/system';
import { EvoInputIconDirective } from './evo-input-icon/evo-input-icon.directive';
import { EvoLoaderModule } from '../evo-loader';


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
                decline: iconDecline,
            },
        }]),
        EvoLoaderModule,
    ],
    declarations: [
        EvoInputComponent,
        EvoInputIconDirective,
        EvoInputIconDirective,
    ],
    exports: [
        EvoInputComponent,
        EvoInputIconDirective,
    ],
})
export class EvoInputModule {
}
