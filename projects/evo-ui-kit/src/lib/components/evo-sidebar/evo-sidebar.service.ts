import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum EvoSidebarTypes {
    basket = 'basket',
    partnerAuth = 'partnerAuth',
    promoCode = 'promoCode',
}

@Injectable()
export class EvoSidebarService {
    isSidebarVisible$ = new BehaviorSubject({});
    private registeredSidebars = {};

    deregister(id: EvoSidebarTypes) {
        delete this.registeredSidebars[ id ];
    }

    register(id: EvoSidebarTypes) {
        if (!(id in EvoSidebarTypes)) {
            console.error(`Sidebar. Unknown '${id}', please add this id in enum`);
            return;
        }
        this.registeredSidebars[ id ] = false;
    }

    open(id: EvoSidebarTypes) {
        this.registeredSidebars[ id ] = true;
        this.isSidebarVisible$.next(this.registeredSidebars);
    }

    close(id: EvoSidebarTypes) {
        this.registeredSidebars[ id ] = false;
        this.isSidebarVisible$.next(this.registeredSidebars);
    }
}
