import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EvoChipComponent} from './evo-chip.component';
import {FormsModule} from '@angular/forms';
import {EvoUiKitModule} from '../../evo-ui-kit.module';
import {EvoIconModule} from '../evo-icon';
import {iconDecline} from '@evotor-dev/ui-kit/icons/system';

@NgModule({
    declarations: [EvoChipComponent],
    imports: [
        CommonModule,
        FormsModule,
        EvoUiKitModule,
        EvoIconModule.forRoot([{
            name: 'system',
            shapes: {
                'decline': iconDecline,
            }
        }]),
    ],
    exports: [EvoChipComponent],
})
export class EvoChipModule {
}
