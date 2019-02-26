import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { EvoModalService, EvoModalState } from './evo-modal.service';

export enum EvoModalTypes {
    warning = 'warning',
}

@Component({
  selector: 'evo-modal',
  templateUrl: './evo-modal.component.html',
  styleUrls: [ './evo-modal.component.scss' ],
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

    @Input() acceptText: string;
    @Input() declineText: string;
    @Input() type: EvoModalTypes;
    modalState: EvoModalState;

    private _id: string;

    constructor(private modalService: EvoModalService) {

    }

    ngOnInit() {
        this.subscribeModalEvents();
    }

    ngOnDestroy() {
        this.modalService.unregister(this.id);
    }

    handleOnClose(agreement: boolean) {
        this.modalService.close(this.id, agreement);
    }

    private subscribeModalEvents() {
        this.modalService.getEventsSubscription(this.id).subscribe((modalState: EvoModalState) => {
            this.modalState = modalState;
        });
    }

}
