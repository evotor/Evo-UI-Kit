import { Component, Input, OnInit } from '@angular/core';
import { Tab, TabsService } from '../evo-tabs.service';

@Component({
    selector: 'evo-tab, [evoTab]',
    templateUrl: './evo-tab.component.html',
    styleUrls: ['./evo-tab.component.scss']
})
export class EvoTabComponent implements OnInit {

    @Input() tabsGroupId: string;
    @Input() tabName: string;

    isActive = false;

    constructor(
        private tabsService: TabsService,
    ) {

    }

    ngOnInit() {
        this.tabsService.getEventsSubscription(this.tabsGroupId).subscribe((data: Tab) => {
            this.isActive = this.tabName === data.tabName;
        });

        this.tabsService.registerTab(this.tabsGroupId, this.tabName);
    }
}
