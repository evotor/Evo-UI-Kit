import { Component, Input, OnInit } from '@angular/core';
import { TabsService } from '../evo-tabs.service';


@Component({
    selector: 'evo-tab',
    templateUrl: './evo-tab.component.html',
    styleUrls: ['./evo-tab.component.scss']
})
export class EvoTabComponent implements OnInit {

    @Input() tabName: string;
    isActive = false;

    constructor(
        private tabsService: TabsService,
    ) {
    }

    ngOnInit() {
        this.tabsService.registerTab(this.tabName);

        this.tabsService.tabsState$.subscribe((tabName) => {
            this.isActive = this.tabName === tabName;
        });
    }
}
