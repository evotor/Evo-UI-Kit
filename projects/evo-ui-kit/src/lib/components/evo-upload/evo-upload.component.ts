import {
    AfterContentInit,
    Component,
    ContentChild,
    ElementRef,
    EventEmitter,
    forwardRef, Injector,
    Input,
    OnInit,
    Output,
    ViewChild
} from '@angular/core';
import {
    AbstractControl,
    ControlValueAccessor,
    FormArray,
    FormControl,
    NG_VALUE_ACCESSOR,
    ValidationErrors,
} from '@angular/forms';
import autobind from 'autobind-decorator';
import bytes from 'bytes';
import * as mime from 'mime';
import { EvoBaseControl } from '../../common/evo-base-control';

export interface EvoUploadItemClickEvent {
    file: File;
    index: number;
}

export enum EvoUploadType {
    small = 'small',
    normal = 'normal',
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
export class EvoUploadComponent extends EvoBaseControl implements OnInit, ControlValueAccessor, AfterContentInit {

    @Input() set accept(extensions: string) {
        if (extensions) {
            this.acceptedMimeTypes = extensions
                .split(',')
                .map(extension => mime.getType(extension));
        }
    }
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
    @Input() type = EvoUploadType.normal;

    @Output() submit = new EventEmitter<FileList>();
    @Output() addFiles = new EventEmitter<FileList>();
    @Output() remove = new EventEmitter<number>();
    @Output() clickFile = new EventEmitter<EvoUploadItemClickEvent>();

    @ViewChild('inputFile') inputFileElement: ElementRef;
    @ContentChild('evo-upload-description', { read: ElementRef }) uploadDescription: ElementRef;

    isDisabled = false;
    filesForm: FormArray;
    filesSizeLimitText: string;
    filesSizeLimitInBytes: number;
    states = {
        isDragOver: false,
    };
    acceptedMimeTypes: string[];

    constructor(
        protected injector: Injector,
    ) {
        super(injector);
    }

    get isSmallType(): boolean {
        return this.type === EvoUploadType.small;
    }

    ngOnInit(): void {
        if (this.isSmallType) {
            if (this.dropZoneLabel) {
                console.log('dropZoneLabel not supported by evo-upload with type="small". Use evo-upload-label for append file description');
            }
            if (this.dropZoneHint) {
                console.warn('dropZoneHint not supported by evo-upload with type="small". Use evo-upload-label for append file description');
            }
        }
    }

    ngAfterContentInit() {
        this.initFilesForm();
        this.subscribeOnFormChanges();
        this.mergeControlsErrors();
    }

    onChange = (value) => {};
    onTouched = () => {};

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        this.isDisabled = isDisabled;

        if (!isDisabled) {
            this.mergeControlsErrors();
        }
    }

    writeValue(fileList: FileList | File[]): void {
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

    handleDragOver(event: Event): void {
        event.preventDefault();
        event.stopPropagation();

        if (this.loading) {
            return;
        }
        this.states.isDragOver = true;
    }

    handleDragLeave(event: Event): void {
        event.preventDefault();
        event.stopPropagation();
        this.states.isDragOver = false;
    }

    handleDrop(event: DragEvent): void {
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

    handleItemRemove(index): void {
        if (this.loading || this.isDisabled) {
            return;
        }
        this.filesForm.removeAt(index);
        this.remove.emit(index);
    }

    handleResetButtonClick(): void {
        if (this.loading || this.isDisabled) {
            return;
        }

        this.wipeUploadList();
    }

    handleSubmitButtonClick(): void {
        this.submit.emit(this.filesForm.value);
    }

    inputChange(files: FileList): void {
        if (this.earlyValidation) {
            this.earlyValidationFn(files);
            if (this.filesForm.errors) { return; }
        }
        this.addFiles.emit(files);
        this.processFiles(files);
    }

    earlyValidationFn(files: FileList | File[]): void {
        this.filesForm.setErrors(null);
        const filesArray = Array.from(files);
        const errors = [];
        if (this.maxFiles && this.isFilesLengthValid(filesArray)) {
            errors.push({ maxFiles: true });
        }
        if (this.filesSizeLimitInBytes && !this.isFilesSizeValid(filesArray)) {
            errors.push({ size: true });
        }
        if (this.acceptedMimeTypes && !this.isFilesExtensionValid(filesArray)) {
            errors.push({ extension: true });
        }
        if (errors.length) {
            this.filesForm.setErrors(Object.assign({}, ...errors));
            this.mergeControlsErrors();
        }
    }

    isFilesLengthValid(files: File[]): boolean {
        return this.maxFiles < (files.length + this.filesForm.controls.length);
    }

    isFilesSizeValid(files: File[]): boolean {
        return !files.some(({ size }) => this.filesSizeLimitInBytes < size);
    }

    isFilesExtensionValid(files: File[]): boolean {
        return files.every(({ type }) => {
            return this.acceptedMimeTypes.includes(type);
        });
    }

    processFiles(files: FileList): void {
        if (this.loading) {
            return;
        }

        Array.from(files).forEach((file: File) => { // tslint:disable:no-for-each-push
            this.filesForm.push(new FormControl(file, [this.fileExtensionValidator, this.fileSizeValidator]));
        });

        if (this.inputFileElement && this.inputFileElement.nativeElement) {
            this.inputFileElement.nativeElement.value = '';
        }
    }

    wipeUploadList(): void {
        while (this.filesForm.controls.length) {
            this.filesForm.removeAt(0);
        }
    }

    private initFilesForm(): void {
        const filesFormValidators = [this.maxFilesValidator];
        if (this.control?.validator) {
            filesFormValidators.push(this.control.validator);
        }
        this.filesForm = new FormArray([], filesFormValidators);
    }

    private mergeControlsErrors(): void {
        if (!this.control) {
            return;
        }

        const errors = Object.assign({}, this.filesForm.errors);
        this.filesForm.controls.forEach((control: FormControl) => {
            Object.assign(errors, control.errors);
        });
        this.control.setErrors(Object.keys(errors).length ? errors : null);
    }

    private subscribeOnFormChanges(): void {
        this.filesForm.valueChanges.subscribe((value) => {
            this.onChange(value);
            this.mergeControlsErrors();
        });
    }

    @autobind
    private fileSizeValidator(control: AbstractControl): ValidationErrors {
        if (!this.filesSizeLimitInBytes) {
            return null;
        }

        return control.value.size > this.filesSizeLimitInBytes ? { size: true } : null;
    }

    @autobind
    private fileExtensionValidator(control: AbstractControl): ValidationErrors {
        if (!this.acceptedMimeTypes) {
            return null;
        }

        const fileType = (control.value as File).type;
        const isExtensionAllowed = this.acceptedMimeTypes.includes(fileType);

        return isExtensionAllowed ? null : { extension: true };
    }

    @autobind
    private maxFilesValidator(control: FormArray): ValidationErrors {
        if (!this.maxFiles) {
            return;
        }

        return control.controls.length > this.maxFiles ? { maxFiles: true } : null;
    }
}
