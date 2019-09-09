import { Component, Input, OnInit } from '@angular/core';
import { Tab, TabsService } from '../evo-tabs.service';

@Component({
    selector: 'evo-tab-content, [evoTabContent]',
    templateUrl: './evo-tab-content.component.html',
    styleUrls: ['./evo-tab-content.component.css']
})
export class EvoTabContentComponent implements OnInit {

    @Input() tabsGroupId: string
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
    }
}
