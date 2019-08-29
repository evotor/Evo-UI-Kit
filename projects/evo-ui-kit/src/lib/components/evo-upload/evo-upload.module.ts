import { NgModule } from '@angular/core';
import { EvoUploadComponent } from './evo-upload.component';
import { EvoButtonModule } from '../evo-button';
import { CommonModule } from '@angular/common';
import { EvoIconModule } from '../evo-icon';
import { iconClose } from '@evo/ui-kit/icons/header';
import { iconDecline, iconFile, iconUpload } from '@evo/ui-kit/icons/system';
import { EvoUiKitModule } from '../../evo-ui-kit.module';
import { EvoPipesModule } from '../../pipes/evo-pipes.module';
import { EvoAlertModule } from '../evo-alert';

@NgModule({
    imports: [
        CommonModule,
        EvoAlertModule,
        EvoButtonModule,
        EvoIconModule.forChild([{
            name: 'icons',
            shapes: {
                close: iconClose,
                decline: iconDecline,
                file: iconFile,
                upload: iconUpload,
            },
        }]),
        EvoPipesModule,
        EvoUiKitModule,
    ],
    declarations: [EvoUploadComponent],
    exports: [EvoUploadComponent],
})
export class EvoUploadModule {
}
