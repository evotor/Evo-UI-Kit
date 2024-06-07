import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EvoUiKitModule} from '../../evo-ui-kit.module';
import {EvoNoteComponent} from './evo-note.component';
import {EvoIconModule} from '../evo-icon';
import {iconClose} from '@evotor-dev/ui-kit/icons/header';

@NgModule({
    imports: [
        CommonModule,
        EvoUiKitModule,
        EvoIconModule.forRoot([
            {
                name: 'header',
                shapes: {
                    close: iconClose,
                },
            },
        ]),
    ],
    declarations: [EvoNoteComponent],
    exports: [EvoNoteComponent],
})
export class EvoNoteModule {}
