import { Component, Input, OnDestroy } from '@angular/core';
import { EvoTabsService } from '../evo-tabs.service';
import { takeWhile } from 'rxjs/operators';
import { EvoTabState } from '../evo-tab-state.collection';

@Component({
    selector: 'evo-tab, [evoTab]',
    templateUrl: './evo-tab.component.html',
    styleUrls: ['./evo-tab.component.scss'],
})
export class EvoTabComponent implements OnDestroy {

    @Input() name: string;

    selected = false;

    private _groupName: string;
    private isAlive = true;

    constructor(
        private tabsService: EvoTabsService,
    ) {

    }

    onChangeTabClick() {
        this.tabsService.setTab(this.groupName, this.name);
    }

    set groupName(tabGroupId: string) {
        this._groupName = tabGroupId;
        this.subscribeToTabChanges();
    }

    get groupName(): string {
        return this._groupName;
    }

    ngOnDestroy() {
        this.isAlive = false;
    }

    private subscribeToTabChanges() {
        this.tabsService.getTabEventsSubscription(this.groupName, this.name).pipe(
            takeWhile(() => this.isAlive),
        ).subscribe((data: EvoTabState) => {
            this.selected = data.isActive;
        });
    }
}
