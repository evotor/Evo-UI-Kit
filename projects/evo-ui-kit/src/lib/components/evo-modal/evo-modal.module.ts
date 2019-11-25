import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvoModalComponent } from './evo-modal.component';
import { EvoButtonModule } from '../evo-button/evo-button.module';
import { EvoModalService } from './evo-modal.service';
import { EvoUiKitModule } from '../../evo-ui-kit.module';

@NgModule({
    imports: [
        CommonModule,
        EvoButtonModule,
        EvoUiKitModule,
    ],
    declarations: [EvoModalComponent],
    exports: [EvoModalComponent],
    providers: [EvoModalService]
})
export class EvoModalModule {
}
