import { AfterContentInit, ChangeDetectorRef, Component, ContentChild, HostListener, Input, OnInit } from '@angular/core';
import { Tab, TabsService } from '../evo-tabs.service';

@Component({
    selector: 'evo-tab, [evoTab]',
    templateUrl: './evo-tab.component.html',
    styleUrls: ['./evo-tab.component.scss'],
})
export class EvoTabComponent implements OnInit {

    @Input() tabId: string;

    tabsGroupId: string;
    selectedTabId: string;

    constructor(
        private tabsService: TabsService,
        private _changeDetectorRef: ChangeDetectorRef,
    ) {

    }

    ngOnInit() {
        this.tabsService.getEventsSubscription(this.tabsGroupId).subscribe((data: Tab) => {
            this.selectedTabId = data.tabId;
            this._changeDetectorRef.detectChanges();
        });
    }

    changeTab(tabId: string) {
        this.tabsService.tabsState$.next({tabsGroupId: this.tabsGroupId, tabId: tabId});
    }
}
