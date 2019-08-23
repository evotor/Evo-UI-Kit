import { AfterContentInit, AfterViewInit, ChangeDetectorRef, Component, ContentChildren, Input, OnInit, QueryList } from '@angular/core';
import { Tab, TabsService } from './evo-tabs.service';
import { EvoTabComponent } from './evo-tab/evo-tab.component';

@Component({
    selector: 'evo-tabs',
    templateUrl: './evo-tabs.component.html',
    styleUrls: ['./evo-tabs.component.scss'],
})
export class EvoTabsComponent implements OnInit {

    @Input() tabsGroupId: string;
    selectedTabName: string;

    get registeredTabs() {
        return this.tabsService.getRegisteredTabsGroup(this.tabsGroupId);
    }

    constructor(
        public tabsService: TabsService,
    ) {

    }

    ngOnInit() {
        this.tabsService.getEventsSubscription(this.tabsGroupId).subscribe((data: Tab) => {
            this.selectedTabName = data.tabName;
        });
    }

    changeTab(tabName: string) {
        this.tabsService.tabsState$.next({tabsGroupId: this.tabsGroupId, tabName: tabName});
    }
}

