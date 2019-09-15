import {
    AfterContentChecked,
    Component,
    ContentChildren,
    Input,
    OnInit,
    QueryList
} from '@angular/core';
import { TabsService } from './evo-tabs.service';
import { EvoTabComponent } from './evo-tab/evo-tab.component';

@Component({
    selector: 'evo-tabs',
    templateUrl: './evo-tabs.component.html',
    styleUrls: ['./evo-tabs.component.scss'],
})
export class EvoTabsComponent implements OnInit, AfterContentChecked {

    @Input() group: string;

    @ContentChildren(EvoTabComponent) tabComponentsList: QueryList<any>;

    get hasRegisteredTabs() {
        const tabsGroup = this.tabsService.getRegisteredTabsGroup(this.group);

        return tabsGroup && Object.keys(tabsGroup.tabs).length > 0;
    }

    constructor(
        public tabsService: TabsService,
    ) {

    }

    ngOnInit() {
        this.tabsService.registerTabsGroup(this.group);
    }

    ngAfterContentChecked() {
        this.tabComponentsList.forEach((tab: EvoTabComponent) => {
            if (!tab.name) {
                throw Error('[EvoUiKit]: some evo-tab component has no name attribute!');
            }

            if (this.group !== tab.getGroup()) {
                tab.setGroup(this.group);
            }

            this.tabsService.registerTab(this.group, tab.name);
        });
    }
}
