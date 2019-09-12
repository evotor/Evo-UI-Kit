import { Component, Input, OnInit } from '@angular/core';
import { EvoTab, TabsService } from '../evo-tabs.service';

@Component({
    selector: 'evo-tab-content, [evoTabContent]',
    templateUrl: './evo-tab-content.component.html',
})
export class EvoTabContentComponent implements OnInit {

    @Input() set tabsRef(tabsRef: string) {
        [this.group, this.name] = tabsRef.split('#');

        if (!this.group || !this.name) {
            throw Error('[EvoUiKit]: specify both group and name for evo-tab-content!');
        }
    }

    isActive = false;
    private group: string;
    private name: string;


    constructor(
        private tabsService: TabsService,
    ) {

    }

    ngOnInit() {
        this.tabsService.getEventsSubscription(this.group).subscribe((data: EvoTab) => {
            this.isActive = this.name === data.name;
        });
    }
}
