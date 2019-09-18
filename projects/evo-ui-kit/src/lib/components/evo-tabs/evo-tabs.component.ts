import {
    AfterContentChecked,
    Component,
    ContentChildren,
    Input,
    OnInit,
    QueryList
} from '@angular/core';
import { EvoTabsService } from './evo-tabs.service';
import { EvoTabComponent } from './evo-tab/evo-tab.component';

@Component({
    selector: 'evo-tabs',
    templateUrl: './evo-tabs.component.html',
    styleUrls: ['./evo-tabs.component.scss'],
})
export class EvoTabsComponent implements OnInit, AfterContentChecked {

    @Input() name: string;

    @ContentChildren(EvoTabComponent) tabComponentsList: QueryList<any>;

    get hasRegisteredTabs() {
        return this.tabsService.getRegisteredTabsGroup(this.name).tabs.length > 0;
    }

    constructor(
        public tabsService: EvoTabsService,
    ) {

    }

    ngOnInit() {
        this.tabsService.registerTabsGroup(this.name);
    }

    ngAfterContentChecked() {
        this.tabComponentsList.forEach((tab: EvoTabComponent) => {
            if (!tab.name) {
                throw Error('[EvoUiKit]: some evo-tab component has no name attribute!');
            }

            if (!this.tabsService.getRegisteredTabsGroup(this.name).tabs.hasTab(tab.name)) {
                tab.groupName = this.name;
                this.tabsService.registerTab(this.name, tab.name);
            }
        });
    }
}
