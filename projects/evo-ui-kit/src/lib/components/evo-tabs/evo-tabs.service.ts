import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

export interface Tab {
    tabsGroupId: string;
    tabName: string;
}

@Injectable()
export class TabsService {

    tabsState$ = new Subject<Tab>();
    private tabsGroupsMap: Map<string, string[]> = new Map();

    registerTabsGroup(tabsGroupId) {
        this.tabsGroupsMap.set(tabsGroupId, []);
    }

    registerTab(tabsGroupId: string, tabName: string) {
        const tabsGroup = this.getRegisteredTabsGroup(tabsGroupId);

        if (!tabsGroup.some((name) => name === tabName)) {
            tabsGroup.push(tabName);
            if (tabsGroup.length === 1) {
                this.setDefaultTab(tabsGroupId, tabName);
            }
        }
    }

    getEventsSubscription(tabsGroupId?: string): Observable<Tab> {
        if (tabsGroupId) {
            return this.tabsState$.pipe(
                filter((data: Tab) => tabsGroupId === data.tabsGroupId),
            );
        }

        return this.tabsState$;
    }

    setDefaultTab(tabsGroupId: string, tabName?: string) {
        if (!this.tabsGroupsMap.has(tabsGroupId)) {
            return;
        }

        const defaultTabName = tabName || this.getRegisteredTabsGroup(tabsGroupId)[0];
        this.tabsState$.next({tabsGroupId: tabsGroupId, tabName: defaultTabName});
    }

    getRegisteredTabsGroup(tabsGroupId): string[] {
        return this.tabsGroupsMap.get(tabsGroupId);
    }
}
