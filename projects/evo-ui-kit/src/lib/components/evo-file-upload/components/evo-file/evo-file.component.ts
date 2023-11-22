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
    @Input() downloadUrl: string;
    @Input() isClickable = false;
    @Input() disabled = false;

    @Output() fileClick = new EventEmitter<MouseEvent>();
    @Output() deleteFile = new EventEmitter<MouseEvent>();
    @Output() cancelUploadFile = new EventEmitter<MouseEvent>();
    @Output() refreshUploadFile = new EventEmitter<MouseEvent>();

    fileName = '';
    fileExtension = '';

    fileSizeInfo: FileSizeInfo = {
        sizeInBytes: 0,
        formattedSize: null
    };

    fileLabel = '';

    @Input() set label(label: string) {
        this.fileLabel = label;
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

    onCancelUploadClick(event: MouseEvent): void {
        this.cancelUploadFile.emit(event);
    }

    onUploadRefreshClick(event: MouseEvent): void {
        this.refreshUploadFile.emit(event);
    }

    onDeleteFileClick(event: MouseEvent): void {
        this.deleteFile.emit(event);
    }

    onLabelClick(event: MouseEvent): void {
        this.fileClick.emit(event);
    }
}
