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

    registerTab(tabsGroupId: string, tabName: string) {
        if (!this.tabsGroupsMap.has(tabsGroupId)) {
            this.createTabsGroup(tabsGroupId, tabName);
        } else {
            const tabsGroup = this.getRegisteredTabsGroup(tabsGroupId);

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
        if (!this.tabsGroupsMap.has(tabsGroupId)) {
            return;
        }

        const defaultTabName = tabName || this.getRegisteredTabsGroup(tabsGroupId)[0];
        this.tabsState$.next({tabsGroupId: tabsGroupId, tabName: defaultTabName});
    }

    getRegisteredTabsGroup(tabsGroupId) {
        return this.tabsGroupsMap.get(tabsGroupId) || [];
    }

    private createTabsGroup(tabsGroupId: string, tabName: string) {
        this.tabsGroupsMap.set(tabsGroupId, [tabName]);
        this.setDefaultTab(tabsGroupId, tabName);
    }
}
