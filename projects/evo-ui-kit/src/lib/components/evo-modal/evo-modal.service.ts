import {distinctUntilChanged, filter, tap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {isEqual} from 'lodash-es';
import {EvoSidebarState} from '../evo-sidebar';

export interface EvoModalState {
    id: string;
    isOpen: boolean;
    agreement?: boolean;
    params?: EvoModalParams;
}

export interface EvoModalParams {
    // eslint-disable-next-line
    [property: string]: any;
}

@Injectable()
export class EvoModalService {

    private readonly modalEvents$ = new Subject<EvoModalState>();
    private registeredModals: {[modalId: string]: EvoModalState} = {};

    register(id: string) {
        this.registeredModals[id] = {id, isOpen: false};
    }

    unregister(id: string) {
        delete this.registeredModals[id];
    }

    open(id: string, params?: EvoModalParams) {
        this.modalEvents$.next({id, isOpen: true, params});
    }

    close(id: string, agreement: boolean, params?: EvoModalParams) {
        this.modalEvents$.next({id, isOpen: false, agreement, params});
    }

    getEventsSubscription(id: string): Observable<EvoModalState> {
        return this.modalEvents$.pipe(
            filter((data: EvoSidebarState) => data.id === id),
            distinctUntilChanged((a, b) => isEqual(a, b)),
            tap((evoModalState: EvoModalState) => evoModalState[id]),
        );
    }
}
