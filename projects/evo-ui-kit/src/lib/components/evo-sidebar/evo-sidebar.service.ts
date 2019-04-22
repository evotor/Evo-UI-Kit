import { Injectable } from '@angular/core';
import { Observable, Subject, timer } from 'rxjs';
import { distinctUntilChanged, filter, tap, throttle } from 'rxjs/operators';

import { cloneDeep } from 'lodash';
import { EvoSidebarCloseTargets } from './evo-sidebar.component';

export interface EvoSidebarState {
    id: string;
    isOpen: boolean;
    params?: EvoSidebarParams;
}

export interface EvoSidebarParams {
    closeTarget?: EvoSidebarCloseTargets;
    [property: string]: any;
}

@Injectable()
export class EvoSidebarService {

    readonly THROTTLE_TIME = 500;

    private sidebarEvents$: Subject<EvoSidebarState> = new Subject<EvoSidebarState>();
    private registeredSidebars: {[id: string]: EvoSidebarState} = {};

    deregister(id: string) {
        delete this.registeredSidebars[id];
    }

    register(id: string) {
        this.registeredSidebars[id] = {id, isOpen: false};
    }

    open(id: string, params?: EvoSidebarParams) {
        this.sidebarEvents$.next({id, isOpen: true, params});
    }

    close(id: string, params?: EvoSidebarParams) {
        this.sidebarEvents$.next({id, isOpen: false, params});
    }

    getEventsSubscription(id: string, raw = false): Observable<EvoSidebarState> {
        return this.sidebarEvents$.pipe(
            filter((data: EvoSidebarState) => data.id === id),
            throttle((data: EvoSidebarState) => {
                const throttleDelay = raw || !data.isOpen ? 0 : this.THROTTLE_TIME;
                return timer(throttleDelay);
            }),
            distinctUntilChanged((_, next: EvoSidebarState) => {
                return raw ? false : next.isOpen === this.registeredSidebars[next.id].isOpen;
            }),
            tap((data: EvoSidebarState) => {
                if (!raw) {
                    this.registeredSidebars[data.id] = cloneDeep(data);
                }
            }),
        );
    }
}
