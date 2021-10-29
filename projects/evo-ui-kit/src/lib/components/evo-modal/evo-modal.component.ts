import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { EvoModalService, EvoModalState } from './evo-modal.service';
import { fromEvent, Observable } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { Key } from 'ts-keycode-enum';

export enum EvoModalCloseTargets {
    BACKGROUND = 'background',
    BUTTON = 'button',
    DEFAULT = 'default',
    ESC = 'escape',
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
    @Input() acceptButtonColor = 'green';
    @Input() declineText: string;
    @Input() asyncAccept: () => Observable<any>;

    modalState: EvoModalState;
    isAcceptLoading = false;
    isDeclineDisabled = false;
    isVisible = false;

    readonly closeTargets = EvoModalCloseTargets;
    private _id: string;
    private closeTarget: EvoModalCloseTargets = EvoModalCloseTargets.DEFAULT;

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
            this.handleOnClose(false, this.closeTargets.BACKGROUND);
        }
    }

    handleOnClose(agreement: boolean, closeTarget: EvoModalCloseTargets) {
        this.closeTarget = closeTarget;

        if (agreement === false && this.isDeclineDisabled) {
            return;
        }
        if (agreement && typeof this.asyncAccept === 'function') {
            const setAsyncStates = (isLoading = false) => {
                this.isDeclineDisabled = isLoading;
                this.isAcceptLoading = isLoading;
            };

            setAsyncStates(true);
            return this.asyncAccept().subscribe((payload) => {
                setAsyncStates(false);
                this.modalService.close(this.id, agreement, {
                    closeTarget: this.closeTarget,
                    payload,
                });
            }, () => {
                setAsyncStates(false);
            });
        }
        this.modalService.close(this.id, agreement, {
            closeTarget: this.closeTarget,
        });
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
                this.handleOnClose(false, this.closeTargets.ESC);
            }
        });
    }
}
