import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AbstractFileUploadExampleComponent } from '../abstract-file-upload-example/abstract-file-upload-example.component';

@Component({
    selector: 'sync-file-uploader',
    templateUrl: './sync-file-uploader.component.html',
    styleUrls: ['./sync-file-uploader.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SyncFileUploaderComponent extends AbstractFileUploadExampleComponent {
    readonly asyncMode = false;
}
