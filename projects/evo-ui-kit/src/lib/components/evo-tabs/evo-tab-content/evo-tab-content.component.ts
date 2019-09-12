import { Component, Input, OnInit } from '@angular/core';
import { Tab, TabsService } from '../evo-tabs.service';

@Component({
    selector: 'evo-tab-content, [evoTabContent]',
    templateUrl: './evo-tab-content.component.html',
})
export class EvoTabContentComponent implements OnInit {

    @Input() set tabsRef(tabsRef: string) {
        [this.tabsGroupId, this.tabId] = tabsRef.split('#');

        if (!this.tabsGroupId || !this.tabId) {
            throw Error('[EvoUiKit]: specify both tabsGroupId and tabId for evo-toast-content!');
        }
    }

    isActive = false;
    private tabsGroupId: string;
    private tabId: string;


    constructor(
        private tabsService: TabsService,
    ) {

    }

    ngOnInit() {
        this.tabsService.getEventsSubscription(this.tabsGroupId).subscribe((data: Tab) => {
            this.isActive = this.tabId === data.tabId;
        });
    }
}
