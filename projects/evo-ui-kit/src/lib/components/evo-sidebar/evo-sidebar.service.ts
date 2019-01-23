import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// Not used, but is not removed for compatibility
export enum EvoSidebarTypes {
    basket = 'basket',
    partnerAuth = 'partnerAuth',
    promoCode = 'promoCode',
}

@Injectable()
export class EvoSidebarService {
    isSidebarVisible$ = new BehaviorSubject({});
    private registeredSidebars = {};

    deregister(id: string) {
        delete this.registeredSidebars[ id ];
    }

    register(id: string) {
        this.registeredSidebars[ id ] = false;
    }

    open(id: string) {
        this.registeredSidebars[ id ] = true;
        this.isSidebarVisible$.next(this.registeredSidebars);
    }

    close(id: string) {
        this.registeredSidebars[ id ] = false;
        this.isSidebarVisible$.next(this.registeredSidebars);
    }
}
