import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvoFileUploadComponent } from './components/evo-file-upload/evo-file-upload.component';
import { EvoIconButtonModule } from '../evo-icon-button';
import { EvoIconModule } from '../evo-icon';
import { icons } from '@evo/ui-kit/icons';
import { EvoFileUploadDragNDropDirective } from './directives/evo-file-upload-drag-n-drop.directive';
import { EvoFileComponent } from './components/evo-file/evo-file.component';
import { EvoFileDownloadDirective } from './directives/evo-file-download.directive';

@NgModule({
    declarations: [
        EvoFileUploadComponent,
        EvoFileUploadDragNDropDirective,
        EvoFileComponent,
        EvoFileDownloadDirective
    ],
    exports: [EvoFileUploadComponent, EvoFileComponent],
    imports: [
        CommonModule,
        EvoIconModule.forRoot([...icons]),
        EvoIconButtonModule
    ]
})
export class EvoFileUploadModule {}
