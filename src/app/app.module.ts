import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EvoFileUploadModule } from '../../projects/evo-ui-kit/src/lib/components/evo-file-upload/evo-file-upload.module';
import { AsyncFileUploaderComponent } from './async-file-uploader/async-file-uploader.component';
import { SyncFileUploaderComponent } from './sync-file-uploader/sync-file-uploader.component';

@NgModule({
    declarations: [AppComponent, AsyncFileUploaderComponent, SyncFileUploaderComponent],
    imports: [BrowserModule, EvoFileUploadModule],
    providers: [],
    bootstrap: [AppComponent],
    schemas: []
})
export class AppModule {}
