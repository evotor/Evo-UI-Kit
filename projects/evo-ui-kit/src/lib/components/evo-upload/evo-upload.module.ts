import { NgModule } from '@angular/core';
import { EvoUploadLabelComponent } from './evo-upload-label/evo-upload-label.component';
import { EvoUploadComponent } from './evo-upload.component';
import { EvoButtonModule } from '../evo-button/evo-button.module';
import { CommonModule } from '@angular/common';
import { EvoIconModule } from '../evo-icon/evo-icon.module';
import { iconClose } from '@evo/ui-kit/icons/header';
import { iconDelete, iconFile, iconUpload } from '@evo/ui-kit/icons/system';
import { EvoUiKitModule } from '../../evo-ui-kit.module';
import { EvoPipesModule } from '../../pipes/evo-pipes.module';
import { EvoAlertModule } from '../evo-alert/evo-alert.module';
import { EvoControlErrorModule } from '../evo-control-error';

@NgModule({
    imports: [
        CommonModule,
        EvoAlertModule,
        EvoButtonModule,
        EvoIconModule.forRoot([{
            name: 'icons',
            shapes: {
                close: iconClose,
                delete: iconDelete,
                file: iconFile,
                upload: iconUpload,
            },
        }]),
        EvoPipesModule,
        EvoUiKitModule,
        EvoControlErrorModule,
    ],
    declarations: [EvoUploadComponent, EvoUploadLabelComponent],
    exports: [EvoUploadComponent, EvoUploadLabelComponent],
})
export class EvoUploadModule {
}
