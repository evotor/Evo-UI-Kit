import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    ElementRef,
    EventEmitter,
    Input,
    OnDestroy,
    Output,
    QueryList,
    TemplateRef,
    ViewChild
} from '@angular/core';
import { BehaviorSubject, merge, of, Subject } from 'rxjs';
import { EvoFileComponent } from '../evo-file/evo-file.component';
import { delay, takeUntil, tap } from 'rxjs/operators';
import { EvoUploadFileStatus } from '../../enums/evo-upload-file-status';
import { EvoFileError } from '../../enums/evo-file-error';
import { CurrentFilesInfo } from '../../interfaces/current-files-info';
import { getFileSizeInfo } from '../../utils/get-file-size-info';
import { FileSizeInfo } from '../../interfaces/file-size-info';
import { isValidFileType } from '../../utils/is-valid-file-type';
import { EvoAddedFiles } from '../../interfaces/evo-added-files';

@Component({
    selector: 'evo-file-upload',
    templateUrl: './evo-file-upload.component.html',
    styleUrls: ['./evo-file-upload.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EvoFileUploadComponent implements AfterViewInit, OnDestroy {
    @Input() fileName = '';
    @Input() asyncMode = false;
    /**
     * @Input() accept - This input property allows the user to specify the file extensions or mime types that are accepted when uploading files.
     * @example
     * <evo-file-upload accept=".txt,.zip,.jpg"></evo-file-upload>
     * <evo-file-upload accept="image/*"></evo-file-upload>
     * <evo-file-upload accept="image/jpeg,image/png"></evo-file-upload>
     */
    @Input() accept = '';
    @Input() maxFilesCount = Infinity;
    @Input() disabled = false;
    @Input() errorMessage: string | string[] | TemplateRef<any> | null = null;

    @Output() addFiles = new EventEmitter<EvoAddedFiles>();

    @ViewChild('inputFile') inputFileElement: ElementRef;

    @ContentChildren(EvoFileComponent) fileComponentList: QueryList<
        EvoFileComponent
    >;
    readonly hasDragOver$ = new BehaviorSubject<boolean>(false);
    readonly currentFilesInfo$ = new BehaviorSubject<CurrentFilesInfo>({
        filesCount: 0,
        filesListSize: 0
    });
    readonly isLoading$ = new BehaviorSubject<boolean>(false);
    readonly filesErrors$ = new BehaviorSubject<EvoFileError[]>([]);
    private destroy$ = new Subject<void>();
    private fileMaxSizeInfo: FileSizeInfo = {
        sizeInBytes: Infinity,
        formattedSize: null
    };
    private filesListMaxSizeInfo: FileSizeInfo = {
        sizeInBytes: Infinity,
        formattedSize: null
    };

    /**
     * files list evo-added-files.ts bytes or a string with units of measurement
     * @example
     * <evo-file-upload [maxFileListSize]="1024"></evo-file-upload>
     * <evo-file-upload maxFileListSize="12mb"></evo-file-upload>
     */
    @Input() set maxFileListSize(size: string | number) {
        this.filesListMaxSizeInfo = getFileSizeInfo(size);
    }

    /**
     * file size evo-added-files.ts bytes or a string with units of measurement
     * @example
     * <evo-file-upload [maxFileSize]="1024"></evo-file-upload>
     * <evo-file-upload maxFileSize="12mb"></evo-file-upload>
     */
    @Input() set maxFileSize(size: string | number) {
        this.fileMaxSizeInfo = getFileSizeInfo(size);
    }

    get isErrorString(): boolean {
        return typeof this.errorMessage === 'string';
    }

    get isErrorArrayString(): boolean {
        return Array.isArray(this.errorMessage);
    }

    get isErrorTemplate(): boolean {
        return this.errorMessage instanceof TemplateRef;
    }

    ngAfterViewInit(): void {
        this.initQueryListChangesSubscription();
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    isFileLimitReached(currentFilesInfo: CurrentFilesInfo): boolean {
        return currentFilesInfo.filesCount >= this.maxFilesCount;
    }

    onAddClick(): void {
        this.inputFileElement.nativeElement.click();
    }

    onDragOverChanged(hasDragOver: boolean): void {
        this.hasDragOver$.next(hasDragOver);
    }

    onAddFiles(files: FileList): void {
        this.proceedAddedFiles(files);
    }

    onInputChanged({ target }: Event): void {
        this.proceedAddedFiles((target as HTMLInputElement).files);
    }

    getErrorMessage(fileError: EvoFileError): string {
        switch (fileError) {
            case EvoFileError.FILES_COUNT: {
                return `Достигнут лимит загрузки документов`;
            }
            case EvoFileError.FILE_SIZE: {
                return `Максимальный размер файла ${this.fileMaxSizeInfo.formattedSize}`;
            }
            case EvoFileError.FILE_LIST_SIZE: {
                return `Максимальный размер всех файлов ${this.filesListMaxSizeInfo.formattedSize}`;
            }
            case EvoFileError.FILE_TYPE: {
                return `Допустимый формат файлов: ${this.accept}`;
            }

            default: {
                return '';
            }
        }
    }

    hasWarnings(filesErrors: EvoFileError[]): boolean {
        return filesErrors.length > 0 || !!this.errorMessage;
    }

    isErrorContainer(
        currentFilesInfo: CurrentFilesInfo,
        filesErrors: EvoFileError[]
    ): boolean {
        return (
            currentFilesInfo.filesCount === 0 && this.hasWarnings(filesErrors)
        );
    }

    private initQueryListChangesSubscription(): void {
        let cachedValue = this.currentFilesInfo$.value;

        merge(of(this.fileComponentList), this.fileComponentList.changes)
            .pipe(
                delay(0),
                tap((files: QueryList<EvoFileComponent>) => {
                    const newFilesInfo = this.getNewCurrentFilesData(files);
                    this.currentFilesInfo$.next(newFilesInfo);

                    if (cachedValue.filesCount > newFilesInfo.filesCount) {
                        this.filesErrors$.next([]);
                    }

                    cachedValue = newFilesInfo;

                    const isLoading = files.some(
                        (fileItem: EvoFileComponent) =>
                            fileItem.status === EvoUploadFileStatus.UPLOADING
                    );
                    this.isLoading$.next(isLoading);
                }),
                takeUntil(this.destroy$)
            )
            .subscribe();
    }

    private getNewCurrentFilesData(
        files: QueryList<EvoFileComponent>
    ): CurrentFilesInfo {
        return files.reduce(
            (summary: CurrentFilesInfo, fileItem: EvoFileComponent) => {
                return {
                    filesListSize:
                        summary.filesListSize +
                        fileItem.fileSizeInfo.sizeInBytes,
                    filesCount: ++summary.filesCount
                } as CurrentFilesInfo;
            },
            {
                filesCount: 0,
                filesListSize: 0
            }
        );
    }

    private proceedAddedFiles(files: FileList): void {
        const { filesCount } = this.currentFilesInfo$.value;

        if (filesCount === this.maxFilesCount) {
            this.filesErrors$.next([EvoFileError.FILES_COUNT]);
            return;
        }

        const fileErrorsSet = new Set<EvoFileError>();

        let availableSize =
            this.filesListMaxSizeInfo.sizeInBytes -
            this.currentFilesInfo$.value.filesListSize;

        const validFiles = Array.from(files).filter((file: File) => {
            if (this.accept && !isValidFileType(file, this.accept)) {
                fileErrorsSet.add(EvoFileError.FILE_TYPE);
                return false;
            }

            if (this.fileMaxSizeInfo.sizeInBytes < file.size) {
                fileErrorsSet.add(EvoFileError.FILE_SIZE);
                return false;
            }

            const newAvailableSize = availableSize - file.size;

            if (newAvailableSize < 0) {
                fileErrorsSet.add(EvoFileError.FILE_LIST_SIZE);
                return false;
            }

            availableSize = newAvailableSize;

            return true;
        });

        const filesToAddCount =
            this.maxFilesCount - this.currentFilesInfo$.value.filesCount;

        const slicedList = validFiles.slice(0, filesToAddCount);

        if (slicedList.length !== validFiles.length) {
            fileErrorsSet.add(EvoFileError.FILES_COUNT);
        }

        this.filesErrors$.next(Array.from(fileErrorsSet));

        if (slicedList.length) {
            this.addFiles.emit({
                files: slicedList,
                total:
                    slicedList.length + this.currentFilesInfo$.value.filesCount
            });
        }
    }
}
