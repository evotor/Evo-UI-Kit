import { Component, Input, OnInit } from '@angular/core';
import { EvoTab, EvoTabsGroup, TabsService } from '../evo-tabs.service';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
    selector: 'evo-tab, [evoTab]',
    templateUrl: './evo-tab.component.html',
    styleUrls: ['./evo-tab.component.scss'],
})
export class EvoTabComponent {

    @Input() name: string;

    selected = false;
    private group: string;

    constructor(
        private tabsService: TabsService,
    ) {

    }

    onChangeTabClick() {
        this.tabsService.setTab(this.group, this.name);
    }

    setGroup(tabGroupId: string) {
        this.group = tabGroupId;
        this.tabsService.getEventsSubscription(this.group, this.name).subscribe((data: EvoTabsGroup) => {
            const currentTab = data.tabs.find((tab: EvoTab) => tab.name === this.name);

            if (currentTab) {
                this.selected = currentTab.isActive;
            }
        });
    }

    getGroup(): string {
        return this.group;
    }
}
