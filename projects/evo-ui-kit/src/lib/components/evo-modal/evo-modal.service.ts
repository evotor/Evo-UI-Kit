import { distinctUntilChanged, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { isEqual } from 'lodash';

export interface EvoModalState {
    isOpen: boolean;
    agreement?: boolean;
}

@Injectable()
export class EvoModalService {
    modalEvents$: BehaviorSubject<any> = new BehaviorSubject<any>({});

    private registeredModals: { [modalId: string]: EvoModalState } = {};

    constructor() {

    }

    open(id: string) {
        this.registeredModals[id] = {isOpen: true};
        this.modalEvents$.next(this.registeredModals);
    }

    close(id: string, agreement: boolean) {
        this.registeredModals[id] = {isOpen: false, agreement};
        this.modalEvents$.next(this.registeredModals);
    }

    register(id: string) {
        this.registeredModals[id] = {isOpen: false};
        this.modalEvents$.next(this.registeredModals);
    }

    unregister(id: string) {
        delete this.registeredModals[id];
    }

    getEventsSubscription(id: string): Observable<EvoModalState> {
        return this.modalEvents$.pipe(
            map((evoModalState: EvoModalState) => evoModalState[id]),
            distinctUntilChanged((a, b) => isEqual(a, b)));
    }
}
