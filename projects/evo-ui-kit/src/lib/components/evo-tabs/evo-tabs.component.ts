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

    selectedTabName: string;

    get registeredTabs() {
        return this.tabsService.getRegisteredTabsGroup(this.tabsGroupId);
    }

    constructor(
        public tabsService: TabsService,
    ) {

    }

    @HostListener('document:keydown', ['$event'])
    onKeyPress(event) {
        if (event.key === 'ArrowLeft') {
            this.tabsService.prevTab(this.tabsGroupId, this.selectedTabName);
        }

        if (event.key === 'ArrowRight') {
            this.tabsService.nextTab(this.tabsGroupId, this.selectedTabName);
        }
    }

    ngOnInit() {
        this.tabsService.registerTabsGroup(this.tabsGroupId);
        this.tabsService.getEventsSubscription(this.tabsGroupId).subscribe((data: Tab) => {
            this.selectedTabName = data.tabName;
        });
    }

    ngAfterContentChecked() {
        this.tabComponentsList.forEach((tab: EvoTabComponent) => {
            if (!tab.tabName) {
                return;
            }

            this.tabsService.registerTab(this.tabsGroupId, tab.tabName);
            tab.tabsGroupId = this.tabsGroupId;
        });
    }
}

