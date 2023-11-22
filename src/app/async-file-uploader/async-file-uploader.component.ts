import { Component, OnInit } from '@angular/core';
import { EvoUploadFileStatus } from '../../../projects/evo-ui-kit/src/lib/components/evo-file-upload';
import { AbstractFileUploadExampleComponent } from '../abstract-file-upload-example/abstract-file-upload-example.component';

@Component({
    selector: 'async-file-uploader',
    templateUrl: './async-file-uploader.component.html',
    styleUrls: ['./async-file-uploader.component.scss']
})
export class AsyncFileUploaderComponent
    extends AbstractFileUploadExampleComponent
    implements OnInit {
    readonly asyncMode = true;

    ngOnInit(): void {
        this.files$.next([
            {
                fileSize: 1566184,
                label: 'Файл.txt',
                status: EvoUploadFileStatus.UPLOADED,
                isClickable: true
            },
            {
                fileSize: 70000,
                label: 'Файл_1.txt',
                status: EvoUploadFileStatus.UPLOADED,
                isClickable: false
            }
        ]);
    }
}
