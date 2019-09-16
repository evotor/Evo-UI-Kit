import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { distinctUntilChanged, filter, tap } from 'rxjs/operators';
import { cloneDeep, isEqual } from 'lodash-es';
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

    getEventsSubscription(id: string, immediate?: boolean): Observable<EvoSidebarState> {
        return this.sidebarEvents$.pipe(
            filter((data: EvoSidebarState) => data.id === id),
            filter((data: EvoSidebarState) => {
                if (!data.isOpen) {
                    return data.params && data.params.closeTarget ? true : immediate;
                }

                return true;
            }),
            distinctUntilChanged((prev: EvoSidebarState, next: EvoSidebarState) => {
                return immediate ? false : isEqual(prev, next);
            }),
            tap((data: EvoSidebarState) => {
                if (!immediate) {
                    this.registeredSidebars[data.id] = cloneDeep(data);
                }
            }),
        );
    }
}
