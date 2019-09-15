import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { distinctUntilChanged, filter, tap } from 'rxjs/operators';
import { cloneDeep } from 'lodash-es';

export interface EvoTabsGroup {
    tabs: EvoTabs;
    group: string;
}

export interface EvoTabs { [name: string]: EvoTabState; }

export interface EvoTabState {
    isActive: boolean;
    params?: any[];
}

@Injectable()
export class TabsService {

    private tabsState$ = new Subject<EvoTabsGroup>();
    private tabsGroupsMap: Map<string, EvoTabsGroup> = new Map();

    registerTabsGroup(group) {
        this.tabsGroupsMap.set(group, {group, tabs: {}});
    }

    registerTab(group: string, name: string) {
        const tabsGroup = this.getRegisteredTabsGroup(group);

        if (!tabsGroup.tabs[name]) {
            tabsGroup.tabs[name] = {isActive: false};

            if (Object.keys(tabsGroup.tabs).length === 1) {
                this.setTab(group, name);
            }
        }
    }

    setTab(group: string, name: string, params?: any[]) {
        const tabsGroup = this.getRegisteredTabsGroup(group);

        if (!tabsGroup) {
            throw Error('[EvoUiKit]: trying to set tab for not existing tabsGroup');
        }

        for (const tab in tabsGroup.tabs) {
            if (tabsGroup.tabs[tab].isActive) {
                tabsGroup.tabs[tab].isActive = false;
                break;
            }
        }

        if (!tabsGroup.tabs.hasOwnProperty(name)) {
            throw Error('[EvoUiKit]: trying to set tab with not registered name');
        }

        tabsGroup.tabs[name].isActive = true;

        if (params && params.length) {
            tabsGroup.tabs[name].params = params;
        }

        this.tabsState$.next(tabsGroup);
    }

    getEventsSubscription(group?: string, name?: string): Observable<EvoTabsGroup> {
        return this.tabsState$.pipe(
            filter((data: EvoTabsGroup) => {
                if (group) {
                    return group === data.group;
                }

                return true;
            }),
            filter((data: EvoTabsGroup) => {
                if (name) {
                    return !!data.tabs[name];
                }

                return true;
            }),
            distinctUntilChanged((prevTabsGroup: EvoTabsGroup, nextTabsGroup: EvoTabsGroup) => {
                if (name) {
                    const prevTab = prevTabsGroup.tabs[name];
                    const nextTab = nextTabsGroup.tabs[name];

                    return prevTab && nextTab ? prevTab.isActive === nextTab.isActive : false;
                }

                return false;
            }),
            tap((data: EvoTabsGroup) => {
                if (group && name) {
                    this.tabsGroupsMap.set(group, cloneDeep(data));
                }
            }),
        );
    }

    getRegisteredTabsGroup(group): EvoTabsGroup {
        return this.tabsGroupsMap.get(group);
    }
}
