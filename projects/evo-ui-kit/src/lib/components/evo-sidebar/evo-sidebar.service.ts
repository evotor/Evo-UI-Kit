import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';
import { DeprecateVariable } from '../../decorators/deprecate-variable.decorator';
import { DeprecateMethod } from '../../decorators/deprecate-method.decorator';

import { isEqual } from 'lodash';
import { isUndefined } from 'util';

// Not used, but is not removed for compatibility
export enum EvoSidebarTypes {
    basket = 'basket',
    partnerAuth = 'partnerAuth',
    promoCode = 'promoCode',
}

export interface EvoSidebarState {
    isOpen: boolean;
    params?: any;
}

@Injectable()
export class EvoSidebarService {
    isSidebarVisible$ = new BehaviorSubject({});
    sidebarEvents$: BehaviorSubject<any> = new BehaviorSubject<any>({});

    private registeredSidebars = {};
    private newRegisteredSidebars: { [sidebarType: string]: EvoSidebarState } = {};

    deregister(id: string) {
        delete this.registeredSidebars[ id ];
        delete this.newRegisteredSidebars[ id ];
    }

    register(id: string) {
        this.registeredSidebars[ id ] = false;
        this.newRegisteredSidebars[ id ] = {isOpen: false};
    }

    open(id: string, params?: any) {
        this.registeredSidebars[ id ] = true;
        this.isSidebarVisible$.next(this.registeredSidebars);

        this.newRegisteredSidebars[id] = {
            isOpen: true,
            params,
        };
        this.sidebarEvents$.next(this.newRegisteredSidebars);

    }

    close(id: string, params?: any) {
        this.registeredSidebars[ id ] = false;
        this.isSidebarVisible$.next(this.registeredSidebars);

        this.newRegisteredSidebars[id] = {
            isOpen: false,
            params,
        };
        this.sidebarEvents$.next(this.newRegisteredSidebars);
    }

    @DeprecateMethod('Use "getNewEventsSubscription" instead.')
    getEventsSubscription(id: EvoSidebarTypes) {
        return this.isSidebarVisible$.pipe(
            map((data) => data[id]),
            filter((data) => !isUndefined(data)),
            distinctUntilChanged((a, b) => isEqual(a, b)));
    }

    getNewEventsSubscription(id: EvoSidebarTypes): Observable<EvoSidebarState> {
        return this.sidebarEvents$.pipe(
            map((data) => data[id]),
            filter((data) => !isUndefined(data)),
            distinctUntilChanged((a, b) => isEqual(a, b)));
    }
}
