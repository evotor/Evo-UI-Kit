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
    selected = false;

    constructor(
        private tabsService: TabsService,
    ) {

    }

    ngOnInit() {
        this.tabsService.getEventsSubscription(this.tabsGroupId).subscribe((data: Tab) => {
            this.selected = this.tabId === data.tabId;
        });
    }

    onChangeTabClick(tabId: string) {
        this.tabsService.setTab(this.tabsGroupId, tabId);
    }
}
