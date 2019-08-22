import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class TabsService {

    tabsState$ = new Subject<{id: string, tab: string}>();
    tabsMap: Map<string, string[]> = new Map();

    registerTab(id: string, tabName: string) {
        if (!this.tabsMap.has(id)) {
            this.createTabs(id, tabName);
        } else {
            const tabs = this.tabsMap.get(id);

            if (!tabs.some((name) => name === tabName)) {
                tabs.push(tabName);
            }
        }
    }

    setDefaultTab(id: string) {
        const defaultTab = this.tabsMap.get(id)[0];
        this.tabsState$.next({id: id, tab: defaultTab});
    }

    getEventsSubscription(id: string): Observable<{id: string, tab: string}> {
        return this.tabsState$.pipe(
            filter((data: {id: string, tab: string}) => id === data.id),
        );
    }

    getRegisteredTabs(id) {
        return this.tabsMap.get(id);
    }

    private createTabs(id: string, tabName: string) {
        this.tabsMap.set(id, [tabName]);
        console.log('service set default tabs');
        this.setDefaultTab(id);
    }
}
