import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EvoUploadFileStatus } from '../../enums/evo-upload-file-status';
import { getFileSizeInfo } from '../../utils/get-file-size-info';
import { FileSizeInfo } from '../../interfaces/file-size-info';

@Component({
    selector: 'evo-file',
    templateUrl: './evo-file.component.html',
    styleUrls: ['./evo-file.component.scss']
})
export class EvoFileComponent {
    @Input() status: EvoUploadFileStatus;
    @Input() uploadedPercentages: number;
    @Input() url: string;
    @Input() isClickableFile = false;
    @Input() disabled = false;

    @Output() fileClick = new EventEmitter<void>();
    @Output() deleteFile = new EventEmitter<void>();
    @Output() cancelUploadFile = new EventEmitter<void>();
    @Output() refreshUploadFile = new EventEmitter<void>();

    fileName = '';
    fileExtension = '';

    fileSizeInfo: FileSizeInfo = {
        sizeInBytes: 0,
        formattedSize: null
    };

    @Input() set label(label: string) {
        const slicedLabel = label.split('.');
        this.fileExtension = slicedLabel.length > 1 ? slicedLabel.pop() : '';
        this.fileName = slicedLabel.join('.');
    }

    /**
     * file size evo-added-files.ts bytes or string with units
     * @param size
     */
    @Input() set fileSize(size: number | string) {
        this.fileSizeInfo = getFileSizeInfo(size);
    }

    get hasRefreshButton(): boolean {
        return (
            this.status === EvoUploadFileStatus.CANCELED ||
            this.status === EvoUploadFileStatus.UPLOAD_ERROR
        );
    }

    get hasCancelButton(): boolean {
        return this.status === EvoUploadFileStatus.UPLOADING;
    }

    get isFileUploaded(): boolean {
        return this.status === EvoUploadFileStatus.UPLOADED;
    }

    get isUploadedPercentagesVisible(): boolean {
        return (
            this.status === EvoUploadFileStatus.UPLOADING &&
            typeof this.uploadedPercentages === 'number'
        );
    }

    get isFileSizeVisible(): boolean {
        return this.isFileUploaded && !!this.fileSizeInfo.formattedSize;
    }

    onCancelUploadClick(): void {
        this.cancelUploadFile.emit();
    }

    onUploadRefreshClick(): void {
        this.refreshUploadFile.emit();
    }

    onDeleteFileClick(): void {
        this.deleteFile.emit();
    }

    onLabelClick($event: MouseEvent): void {
        this.fileClick.emit();
    }
}
