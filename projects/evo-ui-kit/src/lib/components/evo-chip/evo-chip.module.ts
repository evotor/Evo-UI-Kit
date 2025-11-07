import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EvoChipComponent} from './evo-chip.component';
import {FormsModule} from '@angular/forms';
import {EvoUiKitModule} from '../../evo-ui-kit.module';
import {EvoIconModule} from '../evo-icon';
import {iconClose} from "@evotor-dev/ui-kit/icons/header";
import {EvoCounterModule} from "../evo-counter";

@NgModule({
    declarations: [EvoChipComponent],
    imports: [
        CommonModule,
        FormsModule,
        EvoUiKitModule,
        EvoIconModule.forRoot([
            {
                name: 'system',
                shapes: {
                    close: iconClose,
                },
            },
        ]),
        EvoCounterModule,
    ],
    exports: [EvoChipComponent],
})
export class EvoChipModule {}
