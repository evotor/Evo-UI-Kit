import { Component, Input, OnInit } from '@angular/core';
import { EvoTab, TabsService } from '../evo-tabs.service';

@Component({
    selector: 'evo-tab, [evoTab]',
    templateUrl: './evo-tab.component.html',
    styleUrls: ['./evo-tab.component.scss'],
})
export class EvoTabComponent implements OnInit {

    @Input() name: string;

    selected = false;
    private group: string;

    constructor(
        private tabsService: TabsService,
    ) {

    }

    ngOnInit() {
        this.tabsService.getEventsSubscription(this.group).subscribe((data: EvoTab) => {
            this.selected = this.name === data.name;
        });
    }

    onChangeTabClick(name: string) {
        this.tabsService.setTab(this.group, name);
    }

    setTabGroupId(tabGroupId: string) {
        this.group = tabGroupId;
    }
}
