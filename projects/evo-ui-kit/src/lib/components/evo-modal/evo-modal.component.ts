import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { EvoModalService, EvoModalState } from './evo-modal.service';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { takeWhile, tap } from 'rxjs/operators';
import { Key } from 'ts-keycode-enum';

export enum EvoModalTypes {
    warning = 'warning',
}

@Component({
    selector: 'evo-modal',
    templateUrl: './evo-modal.component.html',
    styleUrls: ['./evo-modal.component.scss'],
})
export class EvoModalComponent implements OnInit, OnDestroy {
    get id(): string {
        return this._id;
    }

    @Input() set id(id: string) {
        if (id) {
            this._id = id;
            this.modalService.register(id);
        } else {
            throw new Error('EvoModal. Can\'t be registered, wrong id passed');
        }
    }

    @Input() titleText: string;
    @Input() acceptText: string;
    @Input() declineText: string;
    @Input() type: EvoModalTypes;
    @Input() asyncAccept: () => Observable<any>;

    modalState: EvoModalState;
    isAcceptLoading = false;
    isDeclineDisabled = false;
    isVisible = false;

    private _id: string;

    constructor(
        private modalService: EvoModalService,
        private elRef: ElementRef,
    ) {

    }

    ngOnInit() {
        this.subscribeModalEvents();
    }

    ngOnDestroy() {
        this.modalService.unregister(this.id);
    }

    onBackgroundClick($event) {
        if (
            this.declineText &&
            $event &&
            $event.target &&
            !this.elRef.nativeElement.querySelector('.evo-modal').contains($event.target) &&
            this.modalState.isOpen
        ) {
            this.handleOnClose(false);
        }
    }

    handleOnClose(agreement: boolean) {
        if (agreement === false && this.isDeclineDisabled) {
            return;
        }
        if (agreement && typeof this.asyncAccept === 'function') {
            const handleAsyncCloseModal = () => {
                this.isDeclineDisabled = false;
                this.isAcceptLoading = false;
                this.modalService.close(this.id, agreement);
            };

            this.isDeclineDisabled = true;
            this.isAcceptLoading = true;
            return this.asyncAccept().subscribe(() => {
                return handleAsyncCloseModal();
            }, () => {
                return handleAsyncCloseModal();
            });
        }
        this.modalService.close(this.id, agreement);
    }

    private subscribeModalEvents() {
        this.modalService.getEventsSubscription(this.id).subscribe((modalState: EvoModalState) => {
            this.modalState = modalState;
            // timeout for modal animation support
            setTimeout(() => {
                this.isVisible = modalState.isOpen;
            });
            if (modalState.isOpen) {
                this.initKeyboardListener();
            }
        });
    }

    private initKeyboardListener() {
        return fromEvent(document.body, 'keydown').pipe(
            takeWhile(() => {
                return this.modalState.isOpen;
            }),
        ).subscribe((event: KeyboardEvent) => {
            if (this.declineText && event.keyCode === Key.Escape) {
                this.handleOnClose(false);
            }
        });
    }
}
