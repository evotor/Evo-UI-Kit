import { AfterContentInit, Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { TabsService } from './evo-tabs.service';
import { EvoTabComponent } from './evo-tab/evo-tab.component';

@Component({
    selector: 'evo-tabs',
    templateUrl: './evo-tabs.component.html',
    styleUrls: ['./evo-tabs.component.scss'],
    providers: [ TabsService, ],
})
export class EvoTabsComponent implements OnInit, AfterContentInit {

    @ContentChildren(EvoTabComponent)
    tabs: QueryList<any>;
    selectedTabName: string;

    constructor(
        public tabsService: TabsService,
    ) {

    }

    ngOnInit() {
        this.tabsService.tabsState$.subscribe((tabName) => {
            this.selectedTabName = tabName;
        });
    }

    ngAfterContentInit() {
        this.tabsService.registerTabsQuantity(this.tabs.length);
    }

    changeTabsState(tabName: string) {
        this.tabsService.tabsState$.next(tabName);
    }
}

