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

    @Input() accept = null;
    @Input() dropZoneLabel = 'Перетащите сюда файлы для загрузки';
    @Input() dropZoneHint;
    @Input() hideClearButton = false;

    @Input() set fileSizeLimit(fileSize: string) {
        this.filesSizeLimitInBytes = bytes(fileSize);
    }

    @Input() maxFiles: number;
    @Input() loading = false;

    @Output() submit = new EventEmitter<FileList>();

    @ViewChild('inputFile') inputFileElement: ElementRef;

    isDisabled = false;
    filesForm = this.formBuilder.array([], [this.maxFilesValidator]);
    filesSizeLimitInBytes;
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
                this.processFiles(fileList as FileList);
            } else {
                throw Error('[EvoUiKit]: wrong initial value passed to "evo-upload" component. Only FileList and File[] are allowed');
            }
        }
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
        if (this.loading || this.isDisabled) {
            return;
        }
        this.filesForm.removeAt(index);
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
        if (!this.maxFiles) {
            return;
        }

        return control.controls.length > this.maxFiles ? {maxFiles: true} : null;
    }
}
