import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { distinctUntilChanged, filter, map, tap } from 'rxjs/operators';
import { cloneDeep, isEqual } from 'lodash-es';
import { EvoTabState, EvoTabStateCollection } from './evo-tab-state.collection';

export interface EvoTabsGroup {
    tabs: EvoTabStateCollection;
    name: string;
}

@Injectable()
export class EvoTabsService {

    private tabsState$ = new Subject<Map<string, EvoTabsGroup>>();
    private tabsGroupsMap: Map<string, EvoTabsGroup> = new Map();

    registerTabsGroup(groupName) {
        this.tabsGroupsMap.set(groupName, {name: groupName, tabs: EvoTabStateCollection.create([])});
    }

    registerTab(groupName: string, tabName: string) {
        const tabsGroup = this.getRegisteredTabsGroup(groupName);

        if (tabsGroup.tabs.hasTab(tabName)) {
            throw Error(`[EvoUiKit]: trying to register existing tab name('${tabName}') of '${groupName}' group`);
        }

        tabsGroup.tabs.initTab(tabName);

        if (tabsGroup.tabs.length === 1) {
            this.setTab(groupName, tabName);
        }
    }

    setTab(groupName: string, tabName: string, params?: {}) {
        const tabsGroup = this.getRegisteredTabsGroup(groupName);

        if (!tabsGroup) {
            throw Error(`[EvoUiKit]: trying to set tab for not registered group ${groupName}`);
        }

        if (!tabsGroup.tabs.hasTab(tabName)) {
            throw Error(`[EvoUiKit]: trying to set tab with not registered name ${tabName}`);
        }

        setTimeout(() => {
            tabsGroup.tabs.setTab(tabName, params);
            this.tabsState$.next(this.tabsGroupsMap);
        });
    }

    getTabEventsSubscription(groupName: string, tabName: string): Observable<EvoTabState> {
        return this.tabsState$.pipe(
            map((tabsGroupsMap: Map<string, EvoTabsGroup>) => {
                return tabsGroupsMap.get(groupName);
            }),
            filter((tabsGroup: EvoTabsGroup) => {
                return tabsGroup.tabs.hasTab(tabName);
            }),
            tap((tabsGroup: EvoTabsGroup) => {
                this.tabsGroupsMap.set(groupName, cloneDeep(tabsGroup));
            }),
            map((tabsGroup: EvoTabsGroup) => {
                return tabsGroup.tabs.getTab(tabName);
            }),
            distinctUntilChanged((prevTabState: EvoTabState, nextTabState: EvoTabState) => {
                return isEqual(prevTabState, nextTabState);
            }),
        );
    }

    getGroupEventsSubscription(groupName: string): Observable<EvoTabsGroup> {
        return this.tabsState$.pipe(
            map((tabsGroupsMap: Map<string, EvoTabsGroup>) => {
                return tabsGroupsMap.get(groupName);
            }),
            distinctUntilChanged((prevTabsGroup: EvoTabsGroup, nextTabsGroup: EvoTabsGroup) => {
                return isEqual(prevTabsGroup, nextTabsGroup);
            }),
            tap((tabsGroup: EvoTabsGroup) => {
                this.tabsGroupsMap.set(groupName, cloneDeep(tabsGroup));
            }),
        );
    }

    getRegisteredTabsGroup(groupName: string): EvoTabsGroup {
        return this.tabsGroupsMap.get(groupName);
    }
}
