import {
    AfterContentInit,
    Component,
    ElementRef,
    EventEmitter,
    forwardRef,
    Input, OnInit,
    Output,
    ViewChild
} from '@angular/core';
import {
    AbstractControl,
    ControlValueAccessor,
    FormArray,
    FormBuilder,
    FormControl,
    NG_VALUE_ACCESSOR
} from '@angular/forms';
import autobind from 'autobind-decorator';
import bytes from 'bytes';
import { last } from 'lodash-es';
import { EvoBaseControl } from '../../common/evo-base-control';

export interface EvoUploadItemClickEvent {
    file: File;
    index: number;
}

@Component({
    selector: 'evo-upload',
    styleUrls: ['./evo-upload.component.scss'],
    templateUrl: './evo-upload.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => EvoUploadComponent),
            multi: true,
        },
    ],
})
export class EvoUploadComponent extends EvoBaseControl implements ControlValueAccessor, AfterContentInit, OnInit {

    @Input() accept: string = null;
    @Input() dropZoneLabel = 'Перетащите сюда файлы для загрузки';
    @Input() dropZoneHint: string;
    @Input() hideClearButton = false;
    @Input() hideSubmitButton = false;
    @Input() clickableFiles = false;
    @Input() earlyValidation = false;

    @Input() set fileSizeLimit(fileSize: string) {
        this.filesSizeLimitText = fileSize;
        this.filesSizeLimitInBytes = bytes(fileSize);
    }

    @Input() maxFiles: number;
    @Input() loading = false;

    @Output() submit = new EventEmitter<FileList>();
    @Output() addFiles = new EventEmitter<FileList>();
    @Output() remove = new EventEmitter<number>();
    @Output() clickFile = new EventEmitter<EvoUploadItemClickEvent>();

    @ViewChild('inputFile') inputFileElement: ElementRef;

    isDisabled = false;
    filesForm = this.formBuilder.array([], [this.maxFilesValidator]);
    filesSizeLimitText: string;
    filesSizeLimitInBytes: number;
    states = {
        isDragOver: false,
    };

    constructor(
        private formBuilder: FormBuilder,
    ) {
        super();
    }

    ngOnInit() {
        this.subscribeOnFormChanges();
    }

    ngAfterContentInit() {
        super.ngAfterContentInit();
        this.mergeControlsErrors();
    }

    onChange = (value) => {};
    onTouched = () => {};

    registerOnChange(fn: any) {
        this.onChange = fn;
    }

    registerOnTouched(fn: any) {
        this.onTouched = fn;
    }

    setDisabledState(isDisabled: boolean) {
        this.isDisabled = isDisabled;

        if (!isDisabled) {
            this.mergeControlsErrors();
        }
    }

    writeValue(fileList: FileList | File[]) {
        if (fileList && fileList.length > 0) {
            if (fileList instanceof Array || fileList instanceof FileList) {
                this.wipeUploadList();
                if (this.earlyValidation) {
                    this.earlyValidationFn(fileList);
                    if (this.filesForm.errors) { return; }
                }
                this.processFiles(fileList as FileList);
            } else {
                throw Error('[EvoUiKit]: wrong initial value passed to "evo-upload" component. Only FileList and File[] are allowed');
            }
        }
    }

    getControlError(control: AbstractControl): string {
        if (!control.errors) {
            return null;
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

        const files = event.dataTransfer.files;

        this.states.isDragOver = false;
        if (files.length) {
            if (this.earlyValidation) {
                this.earlyValidationFn(files);
                if (this.filesForm.errors) { return; }
            }
            this.addFiles.emit(files);
            this.processFiles(files);
        }
    }

    handleItemRemove(index) {
        if (this.loading || this.isDisabled) {
            return;
        }
        this.filesForm.removeAt(index);
        this.remove.emit(index);
    }

    handleResetButtonClick() {
        if (this.loading || this.isDisabled) {
            return;
        }

        this.wipeUploadList();
    }

    handleSubmitButtonClick() {
        this.submit.emit(this.filesForm.value);
    }

    inputChange(files: FileList) {
        if (this.earlyValidation) {
            this.earlyValidationFn(files);
            if (this.filesForm.errors) { return; }
        }
        this.addFiles.emit(files);
        this.processFiles(files);
    }

    earlyValidationFn(files: FileList | File[]) {
        this.filesForm.setErrors(null);
        const filesArray = Array.from(files);
        const errors = [];
        if (this.maxFiles && this.maxFiles < (filesArray.length + this.filesForm.controls.length)) {
            errors.push({ maxFiles: true });
        }
        if (this.filesSizeLimitInBytes && !this.isFilesSizeValid(filesArray)) {
            errors.push({ size: true });
        }
        if (this.accept && !this.isFilesExtensionValid(filesArray)) {
            errors.push({ extension: true });
        }
        if (errors.length) {
            this.filesForm.setErrors(Object.assign({}, ...errors));
            this.mergeControlsErrors();
        }
    }

    isFilesSizeValid(files: File[]): boolean {
        return !files.some(({ size }) => this.filesSizeLimitInBytes < size);
    }

    isFilesExtensionValid(files: File[]): boolean {
        return files.every(({ type }) => {
            const extension = type.split('/')[1];
            return this.accept.split(',').findIndex(ext => ext === extension) >= 0;
        });
    }

    processFiles(files: FileList) {
        if (this.loading) {
            return;
        }

        Array.from(files).forEach((file: File) => { // tslint:disable:no-for-each-push
            this.filesForm.push(new FormControl(file, [this.fileExtensionValidator, this.fileSizeValidator]));
        });

        this.inputFileElement.nativeElement.value = '';
    }

    wipeUploadList() {
        while (this.filesForm.controls.length) {
            this.filesForm.removeAt(0);
        }
    }

    private mergeControlsErrors() {
        if (!this.control) {
            return;
        }

        const errors = Object.assign({}, this.filesForm.errors);
        this.filesForm.controls.forEach((control: FormControl) => {
            Object.assign(errors, control.errors);
        });
        this.control.setErrors(Object.keys(errors).length ? errors : null);
    }

    private subscribeOnFormChanges() {
        this.filesForm.valueChanges.subscribe((value) => {
            this.onChange(value);
            this.mergeControlsErrors();
        });
    }

    @autobind
    private fileSizeValidator(control: AbstractControl) {
        if (!this.filesSizeLimitInBytes) {
            return null;
        }

        return control.value.size > this.filesSizeLimitInBytes ? { size: true } : null;
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
        if (!this.maxFiles) {
            return;
        }

        return control.controls.length > this.maxFiles ? { maxFiles: true } : null;
    }
}
