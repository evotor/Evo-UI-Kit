import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class TabsService {

    tabsState$ = new Subject<string>();
    tabsQuantity: number;
    tabNames = [];

    registerTab(tabName: string) {
        const hash = this.makeHash(tabName);
        if (!this.tabNames.some((savedHash) => savedHash === hash)) {
            this.tabNames.push(hash);
        }
    }

    registerTabsQuantity(tabsQuantity: number) {
        this.tabsQuantity = tabsQuantity;
        // initial state
        this.tabsState$.next(this.tabNames[0]);
    }

    private makeHash(tabName: string): string {
        // create some hash
        return tabName;
    }
}
