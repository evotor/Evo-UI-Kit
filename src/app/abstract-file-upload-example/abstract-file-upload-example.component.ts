import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { BehaviorSubject, from, interval, Subject, Subscription } from 'rxjs';
import {
    EvoAddedFiles,
    EvoUploadFile,
    EvoUploadFileStatus
} from '../../../projects/evo-ui-kit/src/lib/components/evo-file-upload';
import {
    concatMap,
    finalize,
    mapTo,
    take,
    takeUntil,
    tap
} from 'rxjs/operators';

@Component({
    template: ''
})
export abstract class AbstractFileUploadExampleComponent implements OnDestroy {
    readonly files$ = new BehaviorSubject<EvoUploadFile[]>([]);
    abstract readonly asyncMode: boolean;

    readonly subscriptionsMap: Map<EvoUploadFile, Subscription> = new Map();
    private destroy$ = new Subject<void>();

    constructor(private cdr: ChangeDetectorRef) {}

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    onDeleteFile(fileIndex: number): void {
        const currentList = this.files$.value;
        const newFileList = [
            ...currentList.slice(0, fileIndex),
            ...currentList.slice(fileIndex + 1)
        ];
        this.files$.next(newFileList);
    }

    onAddFiles(addedFiles: EvoAddedFiles) {
        const newFiles: EvoUploadFile[] = addedFiles.files.map(
            (newFileItem: File) => {
                return {
                    label: newFileItem.name,
                    status: this.asyncMode
                        ? EvoUploadFileStatus.UPLOADING
                        : EvoUploadFileStatus.UPLOADED,
                    fileSize: newFileItem.size
                };
            }
        );

        if (this.asyncMode) {
            newFiles.forEach((file: EvoUploadFile) => {
                this.mockUpload(file);
            });
        }

        this.files$.next([...this.files$.value, ...newFiles]);
    }

    onCancelUpload(fileItem: EvoUploadFile): void {
        const subscription = this.subscriptionsMap.get(fileItem);
        subscription.unsubscribe();

        this.subscriptionsMap.delete(fileItem);

        fileItem.status = EvoUploadFileStatus.CANCELED;
    }

    mockUpload(file: EvoUploadFile): void {
        file.status = EvoUploadFileStatus.UPLOADING;
        file.loadedPercentages = 0;

        const percentages = Array(5)
            .fill(0)
            .map(() => Math.floor(Math.random() * 101))
            .sort((a, b) => a - b);

        const subscription = from(percentages)
            .pipe(
                concatMap(value => interval(100).pipe(take(1), mapTo(value))),
                tap((value: number) => {
                    file.loadedPercentages = value;
                    console.log('file percent', file.label, value);
                }),
                finalize(() => {
                    file.status = EvoUploadFileStatus.UPLOADED;
                    this.cdr.detectChanges();
                    this.subscriptionsMap.delete(file);
                }),
                takeUntil(this.destroy$)
            )
            .subscribe();

        this.subscriptionsMap.set(file, subscription);
    }
}
