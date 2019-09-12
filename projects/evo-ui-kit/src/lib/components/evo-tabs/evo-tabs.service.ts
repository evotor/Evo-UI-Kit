import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

export interface EvoTab {
    group: string;
    name: string;
}

@Injectable()
export class TabsService {

    private tabsState$ = new Subject<EvoTab>();
    private tabsGroupsMap: Map<string, string[]> = new Map();

    registerTabsGroup(group) {
        this.tabsGroupsMap.set(group, []);
    }

    registerTab(group: string, name: string) {
        const tabsGroup = this.getRegisteredTabsGroup(group);

        if (!tabsGroup.some((name) => name === name)) {
            tabsGroup.push(name);
            if (tabsGroup.length === 1) {
                this.setTab(group, name);
            }
        }
    }

    getEventsSubscription(group?: string): Observable<EvoTab> {
        if (group) {
            return this.tabsState$.pipe(
                filter((data: EvoTab) => group === data.group),
            );
        }

        return this.tabsState$;
    }

    setTab(group: string, name: string) {
        if (!this.tabsGroupsMap.has(group)) {
            return;
        }

        this.tabsState$.next({group: group, name: name});
    }

    getRegisteredTabsGroup(group): string[] {
        return this.tabsGroupsMap.get(group);
    }
}
