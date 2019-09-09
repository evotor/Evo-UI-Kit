import {
    AfterContentChecked, ChangeDetectorRef,
    Component,
    ContentChildren,
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

    get registeredTabs() {
        return this.tabsService.getRegisteredTabsGroup(this.tabsGroupId);
    }

    constructor(
        public tabsService: TabsService,
    ) {

    }

    ngOnInit() {
        this.tabsService.registerTabsGroup(this.tabsGroupId);
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

