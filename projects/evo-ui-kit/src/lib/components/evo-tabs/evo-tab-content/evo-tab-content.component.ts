import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { EvoTabsService } from '../evo-tabs.service';
import { takeWhile } from 'rxjs/operators';
import { EvoTabState } from '../evo-tab-state.collection';

@Component({
    selector: 'evo-tab-content, [evoTabContent]',
    templateUrl: './evo-tab-content.component.html',
})
export class EvoTabContentComponent implements OnInit, OnDestroy {

    @Input() set tabsRef(tabsRef: string) {
        [this.groupName, this.tabName] = tabsRef.split('#');

        if (!this.groupName || !this.tabName) {
            throw Error('[EvoUiKit]: specify both group and name divided by # for evo-tab-content!');
        }
    }

    isActive = false;

    private groupName: string;
    private tabName: string;
    private isAlive = true;

    constructor(
        private tabsService: EvoTabsService,
    ) {

    }

    ngOnInit() {
        this.tabsService.getTabEventsSubscription(this.groupName, this.tabName).pipe(
            takeWhile(() => this.isAlive),
        ).subscribe((data: EvoTabState) => {
            this.isActive = data.isActive;
        });
    }

    ngOnDestroy() {
        this.isAlive = false;
    }
}
