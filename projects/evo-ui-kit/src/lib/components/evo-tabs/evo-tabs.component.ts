import { AfterContentInit, AfterViewInit, ChangeDetectorRef, Component, ContentChildren, Input, OnInit, QueryList } from '@angular/core';
import { TabsService } from './evo-tabs.service';
import { EvoTabComponent } from './evo-tab/evo-tab.component';

@Component({
    selector: 'evo-tabs',
    templateUrl: './evo-tabs.component.html',
    styleUrls: ['./evo-tabs.component.scss'],
})
export class EvoTabsComponent implements OnInit {

    @Input() id: string;
    selectedTabName: string;

    get registeredTabs() {
        return this.tabsService.getRegisteredTabs(this.id);
    }

    constructor(
        public tabsService: TabsService,
    ) {

    }

    ngOnInit() {
        this.tabsService.getEventsSubscription(this.id).subscribe((data: {id: string, tab: string}) => {
            this.selectedTabName = data.tab;
        });
    }

    changeTabsState(tabName: string) {
        this.tabsService.tabsState$.next({id: this.id, tab: tabName});
    }
}

