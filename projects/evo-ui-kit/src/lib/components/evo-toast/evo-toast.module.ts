import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvoToastComponent } from './evo-toast.component';
import { EvoUiKitModule } from '../../evo-ui-kit.module';
import { EvoIconModule } from '../evo-icon/evo-icon.module';
import { iconClose } from '@evotor-dev/ui-kit/icons/header';

@NgModule({
    imports: [
        CommonModule,
        EvoUiKitModule,
        EvoIconModule.forRoot([
            {
                name: 'sidebarIcons',
                shapes: {
                    'close': iconClose,
                },
            }
        ]),
    ],
    declarations: [EvoToastComponent],
    exports: [EvoToastComponent],
})
export class EvoToastModule {
}
