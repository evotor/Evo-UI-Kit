import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl } from '@angular/forms';
import autobind from 'autobind-decorator';
import bytes from 'bytes';
import { last } from 'lodash-es';

@Component({
    selector: 'evo-upload',
    styleUrls: ['./evo-upload.component.scss'],
    templateUrl: './evo-upload.component.html',
})
export class EvoUploadComponent {
    @Input() accept = null;
    @Input() dropZoneLabel = 'Перетащите сюда файлы для загрузки';
    @Input() dropZoneHint;

    @Input() set fileSizeLimit(fileSize) {
        this.filesSizeLimitInBytes = bytes(fileSize);
    }

    @Input() maxFiles;
    @Input() multiple = null;
    @Input() loading;

    @Output() submit = new EventEmitter<FileList>();

    @ViewChild('inputFile') inputFileElement: ElementRef;

    filesForm = this.formBuilder.array([], [this.maxFilesValidator]);
    filesSizeLimitInBytes;
    states = {
        isDragOver: false,
    };

    constructor(
        private formBuilder: FormBuilder,
    ) {

    }

    getControlError(control: AbstractControl) {
        if (!control.errors) {
            return;
        }

        return Object.keys(control.errors)[0];
    }

    handleDragOver(event: Event) {
        event.preventDefault();
        event.stopPropagation();

        if (this.loading) {
            return;
        }
        this.states.isDragOver = true;
    }

    handleDragLeave(event: Event) {
        event.preventDefault();
        event.stopPropagation();
        this.states.isDragOver = false;
    }

    handleDrop(event: DragEvent) {
        event.preventDefault();
        event.stopPropagation();

        this.states.isDragOver = false;
        if (event.dataTransfer.files.length) {
            this.processFiles(event.dataTransfer.files);
        }
    }

    handleItemRemove(index) {
        if (this.loading) {
            return;
        }
        this.filesForm.removeAt(index);
    }

    handleResetButtonClick() {
        this.filesForm.controls.forEach((control, index) => {
            this.filesForm.removeAt(index);
        });
    }

    handleSubmitButtonClick() {
        this.submit.emit(this.filesForm.value);
    }

    processFiles(files: FileList) {
        if (this.loading) {
            return;
        }

        const filesArray = Array.from(files);
        if (!this.multiple) {
            filesArray.length = 1;
        }

        filesArray.forEach((file: File) => { // tslint:disable:no-for-each-push
            this.filesForm.push(new FormControl(file, [this.fileExtensionValidator, this.fileSizeValidator]));
        });

        this.inputFileElement.nativeElement.value = '';
    }

    wipeUploadList() {
        this.filesForm = this.formBuilder.array([], [this.maxFilesValidator]);
    }

    @autobind
    private fileSizeValidator(control: AbstractControl) {
        if (!this.filesSizeLimitInBytes) {
            return null;
        }

        return control.value.size > this.filesSizeLimitInBytes ? {size: true} : null;
    }

    @autobind
    private fileExtensionValidator(control: AbstractControl) {
        if (!this.accept) {
            return null;
        }

        const allowedExtensions = this.accept.split(',').map((extension) => extension.replace('.', ''));
        const isExtensionAllowed = !!allowedExtensions.find((extension) => extension === last(control.value.name.split('.')));

        return isExtensionAllowed ? null : {extension: true};
    }

    @autobind
    private maxFilesValidator(control: FormArray) {
        if (!this.maxFiles && this.multiple) {
            return;
        }

        if (!this.multiple && control.controls.length > 1) {
            return {maxFiles: true};
        }

        return control.controls.length > this.maxFiles ? {maxFiles: true} : null;
    }
}
