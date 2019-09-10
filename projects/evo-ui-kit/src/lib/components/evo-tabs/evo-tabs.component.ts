import {
    AfterContentChecked, ChangeDetectorRef,
    Component,
    ContentChildren, HostListener,
    Input,
    OnInit,
    QueryList
} from '@angular/core';
import { Tab, TabsService } from './evo-tabs.service';
import { EvoTabComponent } from './evo-tab/evo-tab.component';

@Component({
    selector: 'evo-tabs',
    templateUrl: './evo-tabs.component.html',
    styleUrls: ['./evo-tabs.component.scss'],
})
export class EvoTabsComponent implements OnInit, AfterContentChecked {

    @Input() tabsGroupId: string;

    @ContentChildren(EvoTabComponent)
    tabComponentsList: QueryList<any>;

    selectedTabId: string;

    get registeredTabs() {
        return this.tabsService.getRegisteredTabsGroup(this.tabsGroupId);
    }

    constructor(
        public tabsService: TabsService,
    ) {

    }

    ngOnInit() {
        this.tabsService.registerTabsGroup(this.tabsGroupId);
        this.tabsService.getEventsSubscription(this.tabsGroupId).subscribe((data: Tab) => {
            this.selectedTabId = data.tabId;
        });
    }

    ngAfterContentChecked() {
        this.tabComponentsList.forEach((tab: EvoTabComponent) => {
            if (!tab.tabId) {
                return;
            }

            this.tabsService.registerTab(this.tabsGroupId, tab.tabId);
            tab.tabsGroupId = this.tabsGroupId;
        });
    }
}

