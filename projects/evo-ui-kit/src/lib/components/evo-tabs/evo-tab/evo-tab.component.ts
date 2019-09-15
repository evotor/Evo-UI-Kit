import { Component, Input } from '@angular/core';
import { EvoTabsGroup, TabsService } from '../evo-tabs.service';

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
            this.selected = data.tabs[this.name].isActive;
        });
    }

    getGroup(): string {
        return this.group;
    }
}
