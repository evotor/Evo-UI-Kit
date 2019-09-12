import { Component, Input, OnInit } from '@angular/core';
import { EvoTab, TabsService } from '../evo-tabs.service';
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

    onChangeTabClick(name: string) {
        this.tabsService.setTab(this.group, name);
    }

    setGroup(tabGroupId: string) {
        this.group = tabGroupId;
        this.tabsService.getEventsSubscription(this.group).pipe(distinctUntilChanged()).subscribe((data: EvoTab) => {
            this.selected = this.name === data.name;
        });
    }

    getGroup(): string {
        return this.group;
    }
}
