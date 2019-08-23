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
    tabGroupsMap: Map<string, string[]> = new Map();

    registerTab(tabsGroupId: string, tabName: string) {
        if (!this.tabGroupsMap.has(tabsGroupId)) {
            this.createTabsGroup(tabsGroupId, tabName);
        } else {
            const tabsGroup = this.tabGroupsMap.get(tabsGroupId);

            if (!tabsGroup.some((name) => name === tabName)) {
                tabsGroup.push(tabName);
            }
        }
    }

    getEventsSubscription(tabsGroupId: string): Observable<Tab> {
        return this.tabsState$.pipe(
            filter((data: Tab) => tabsGroupId === data.tabsGroupId),
        );
    }

    setDefaultTab(tabsGroupId: string, tabName?: string) {
        if (!this.tabGroupsMap.has(tabsGroupId)) {
            return;
        }

        const defaultTabName = tabName || this.tabGroupsMap.get(tabsGroupId)[0];
        this.tabsState$.next({tabsGroupId: tabsGroupId, tabName: defaultTabName});
    }

    getRegisteredTabsGroup(tabsGroupId) {
        return this.tabGroupsMap.get(tabsGroupId);
    }

    private createTabsGroup(tabsGroupId: string, tabName: string) {
        this.tabGroupsMap.set(tabsGroupId, [tabName]);
        this.setDefaultTab(tabsGroupId, tabName);
    }
}
