import { Directive, ElementRef, EventEmitter, NgZone, OnDestroy, OnInit, Output } from '@angular/core';
import { fromEvent, merge, Observable, Subject } from 'rxjs';
import { distinctUntilChanged, filter, mapTo, takeUntil, tap } from 'rxjs/operators';

@Directive({
    selector: '[evoFileUploadDragNDrop]'
})
export class EvoFileUploadDragNDropDirective implements OnInit, OnDestroy {
    @Output() dragOverChanged = new EventEmitter<boolean>();
    @Output() addFiles = new EventEmitter<FileList>();

    private destroy$ = new Subject<void>();

    constructor(private elRef: ElementRef, private zone: NgZone) {
    }

    ngOnInit(): void {
        this.initDragOverChangesSubscription();
        this.initDropSubscription();
        this.initDragOverSubscription();
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    private initDropSubscription(): void {
        this.zone.runOutsideAngular(() => {
            this.drop$().pipe(takeUntil(this.destroy$)).pipe(
                tap(({dataTransfer}: DragEvent) => this.zone.run(() => this.addFiles.emit(dataTransfer.files))),
            ).subscribe();
        });
    }

    private initDragOverChangesSubscription(): void {
        this.zone.runOutsideAngular(() => {
            merge(
                fromEvent(this.elRef.nativeElement, 'dragenter').pipe(
                    mapTo(true),
                ),
                merge(this.dragLeave$(), this.drop$()).pipe(mapTo(false))
            ).pipe(
                distinctUntilChanged(),
                tap((isDragOver: boolean) => this.zone.run(() => this.dragOverChanged.emit(isDragOver))),
                takeUntil(this.destroy$),
            ).subscribe();
        });
    }

    private initDragOverSubscription(): void {
        this.zone.runOutsideAngular(() => {
            fromEvent(this.elRef.nativeElement, 'dragover').pipe(
                tap((event: DragEvent) => event.preventDefault()),
            ).subscribe();
        });
    }

    private dragLeave$(): Observable<DragEvent> {
        return fromEvent(this.elRef.nativeElement, 'dragleave').pipe(
            filter(({relatedTarget}: DragEvent) => !(this.elRef.nativeElement as Element).contains(relatedTarget as Element)),
        );
    }

    private drop$(): Observable<DragEvent> {
        return fromEvent(this.elRef.nativeElement, 'drop').pipe(
            tap((event: DragEvent) => event.preventDefault())
        );
    }
}
