import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

export interface EvoTab {
    tabsGroupId: string;
    tabId: string;
}

@Injectable()
export class TabsService {

    private tabsState$ = new Subject<EvoTab>();
    private tabsGroupsMap: Map<string, string[]> = new Map();

    registerTabsGroup(tabsGroupId) {
        this.tabsGroupsMap.set(tabsGroupId, []);
    }

    registerTab(tabsGroupId: string, tabId: string) {
        const tabsGroup = this.getRegisteredTabsGroup(tabsGroupId);

        if (!tabsGroup.some((name) => name === tabId)) {
            tabsGroup.push(tabId);
            if (tabsGroup.length === 1) {
                this.setTab(tabsGroupId, tabId);
            }
        }
    }

    getEventsSubscription(tabsGroupId?: string): Observable<EvoTab> {
        if (tabsGroupId) {
            return this.tabsState$.pipe(
                filter((data: EvoTab) => tabsGroupId === data.tabsGroupId),
            );
        }

        return this.tabsState$;
    }

    setTab(tabsGroupId: string, tabId: string) {
        if (!this.tabsGroupsMap.has(tabsGroupId)) {
            return;
        }

        this.tabsState$.next({tabsGroupId: tabsGroupId, tabId: tabId});
    }

    getRegisteredTabsGroup(tabsGroupId): string[] {
        return this.tabsGroupsMap.get(tabsGroupId);
    }
}
