import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { distinctUntilChanged, filter } from 'rxjs/operators';

export interface EvoTab {
    name: string;
    isActive: boolean;
    params?: any[];
}

export interface EvoTabsGroup {
    tabs: EvoTab[];
    group: string;
}

@Injectable()
export class TabsService {

    private tabsState$ = new Subject<EvoTabsGroup>();
    private tabsGroupsMap: Map<string, EvoTabsGroup> = new Map();

    registerTabsGroup(group) {
        this.tabsGroupsMap.set(group, {group, tabs: []});
    }

    registerTab(group: string, name: string) {
        const tabsGroup = this.getRegisteredTabsGroup(group);

        if (!tabsGroup.tabs.some((tab) => tab.name === name)) {
            tabsGroup.tabs.push({name, isActive: false});

            if (tabsGroup.tabs.length === 1) {
                this.setTab(group, name);
            }
        }
    }

    getEventsSubscription(group?: string, name?: string): Observable<EvoTabsGroup> {
        return this.tabsState$.pipe(
            filter((data: EvoTabsGroup) => {
                if (group) {
                    return group === data.group;
                }

                return true;
            }),
        );
    }

    setTab(group: string, name: string, params?: any[]) {
        const tabsGroup = this.getRegisteredTabsGroup(group);

        if (!tabsGroup) {
            throw Error('[EvoUiKit]: trying to set tab for not existed tabsGroup');
        }

        const currentActiveTab = tabsGroup.tabs.find((tab: EvoTab) => tab.isActive);

        if (currentActiveTab) {
            currentActiveTab.isActive = false;
        }

        const newActiveTab = tabsGroup.tabs.find((tab: EvoTab) => tab.name === name);
        newActiveTab.isActive = true;

        if (params && params.length) {
            newActiveTab.params = params;
        }

        this.tabsState$.next(tabsGroup);
    }

    getRegisteredTabsGroup(group): EvoTabsGroup {
        return this.tabsGroupsMap.get(group);
    }
}
