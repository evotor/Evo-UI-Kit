import {AfterContentChecked, Component, ContentChildren, Input, OnInit, QueryList} from '@angular/core';
import {EvoTabsService} from './evo-tabs.service';
import {EvoTabComponent} from './evo-tab/evo-tab.component';
import {EvoTabState} from './evo-tab-state.collection';
import {isEqual} from 'lodash-es';
import {EvoTabsSizeService} from './evo-tabs-size.service';
import {EvoTabsSize} from './enums/evo-tabs-size';

@Component({
    selector: 'evo-tabs',
    templateUrl: './evo-tabs.component.html',
    styleUrls: ['./evo-tabs.component.scss'],
    providers: [EvoTabsSizeService],
})
export class EvoTabsComponent implements OnInit, AfterContentChecked {
    @Input() name: string;

    @ContentChildren(EvoTabComponent) tabComponentsList: QueryList<any>;

    size: EvoTabsSize = EvoTabsSize.normal;

    get hasRegisteredTabs() {
        return this.tabsService.getRegisteredTabsGroup(this.name).tabs.length > 0;
    }

    get blockClasses(): {[cssClass: string]: boolean} {
        return {
            [`size-${this.size}`]: this.size !== EvoTabsSize.normal,
        };
    }

    constructor(public tabsService: EvoTabsService, public sizeService: EvoTabsSizeService) {}

    @Input('size') set setSize(size: EvoTabsSize | string) {
        if (EvoTabsSize[size]) {
            const tabsSize = EvoTabsSize[size];
            this.size = tabsSize;
            this.sizeService.size = tabsSize;
        }
    }

    ngOnInit() {
        this.tabsService.registerTabsGroup(this.name);
    }

    ngAfterContentChecked() {
        const getRegisteredTabsGroupTabs = this.tabsService.getRegisteredTabsGroup(this.name).tabs;

        this.tabComponentsList.forEach((tab: EvoTabComponent) => {
            // check tabs with same names
            if (
                this.tabComponentsList.filter((iteratedTab: EvoTabComponent) => iteratedTab.name === tab.name).length >
                1
            ) {
                throw Error('[EvoUiKit]: some evo-tab components have the same name attribute!');
            }

            if (!tab.name) {
                throw Error('[EvoUiKit]: some evo-tab component has no name attribute!');
            }

            if (!getRegisteredTabsGroupTabs.hasTab(tab.name)) {
                tab.groupName = this.name;
                this.tabsService.registerTab(this.name, tab.name);
            }
        });

        // check redundant tabs
        const registeredTabsNames = getRegisteredTabsGroupTabs.map((tab: EvoTabState) => tab.name);
        const renderedTabsNames = this.tabComponentsList.map((tabComponent: EvoTabComponent) => tabComponent.name);

        if (!isEqual(registeredTabsNames, renderedTabsNames)) {
            registeredTabsNames.forEach((tabName: string) => {
                // if we have registered tab which not exists in DOM - delete it
                if (
                    !renderedTabsNames.some((renderedTabName: string) => {
                        return renderedTabName === tabName;
                    })
                ) {
                    getRegisteredTabsGroupTabs.removeTab(tabName);
                }
            });

            if (!!getRegisteredTabsGroupTabs.length && !getRegisteredTabsGroupTabs.getActiveTab()) {
                this.tabsService.setTab(this.name, getRegisteredTabsGroupTabs[0].name);
            }
        }
    }
}
