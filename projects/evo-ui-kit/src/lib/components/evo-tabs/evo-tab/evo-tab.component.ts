import { AfterContentInit, ChangeDetectorRef, Component, ContentChild, Input, OnInit } from '@angular/core';
import { Tab, TabsService } from '../evo-tabs.service';

@Component({
    selector: 'evo-tab, [evoTab]',
    templateUrl: './evo-tab.component.html',
    styleUrls: ['./evo-tab.component.scss']
})
export class EvoTabComponent implements OnInit {

    @Input() tabName: string;
    tabsGroupId: string;
    selectedTabName: string;

    constructor(
        private tabsService: TabsService,
        private cd: ChangeDetectorRef,
    ) {

    }

    ngOnInit() {
        this.tabsService.getEventsSubscription(this.tabsGroupId).subscribe((data: Tab) => {
            this.selectedTabName = data.tabName;
            this.cd.detectChanges();
        });
    }

    changeTab(tabName: string) {
        this.tabsService.tabsState$.next({tabsGroupId: this.tabsGroupId, tabName: tabName});
    }
}
