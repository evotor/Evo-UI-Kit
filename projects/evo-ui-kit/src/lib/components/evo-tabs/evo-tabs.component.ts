import {AfterContentChecked, Component, ContentChildren, Input, OnInit, QueryList} from '@angular/core';
import {EvoTabsService} from './evo-tabs.service';
import {EvoTabComponent} from './evo-tab/evo-tab.component';
import {EvoTabState, EvoTabStateCollection} from './evo-tab-state.collection';
import {EvoTabsSizeService} from './evo-tabs-size.service';
import {EvoTabsSize} from './enums/evo-tabs-size';
import {EvoUiClassDirective} from '../../directives/evo-ui-class.directive';

@Component({
    selector: 'evo-tabs',
    templateUrl: './evo-tabs.component.html',
    styleUrls: ['./evo-tabs.component.scss'],
    providers: [EvoTabsSizeService],
    standalone: true,
    imports: [EvoUiClassDirective],
})
export class EvoTabsComponent implements OnInit, AfterContentChecked {
    @Input() name: string;

    @ContentChildren(EvoTabComponent) tabComponentsList: QueryList<EvoTabComponent>;

    size: EvoTabsSize = EvoTabsSize.normal;

    get hasRegisteredTabs(): boolean {
        return this.registeredTabs.length > 0;
    }

    get blockClasses(): {[cssClass: string]: boolean} {
        return {
            [`size-${this.size}`]: this.size !== EvoTabsSize.normal,
        };
    }

    // сервис подменяет коллекцию группы на клон при каждом событии, поэтому её нельзя кэшировать между обращениями
    private get registeredTabs(): EvoTabStateCollection {
        return this.tabsService.getRegisteredTabsGroup(this.name).tabs;
    }

    constructor(
        public tabsService: EvoTabsService,
        public sizeService: EvoTabsSizeService,
    ) {}

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
        });

        const renderedTabsNames = this.tabComponentsList.map((tabComponent: EvoTabComponent) => tabComponent.name);

        // if we have registered tab which not exists in DOM - delete it
        this.registeredTabs
            .map((tab: EvoTabState) => tab.name)
            .filter((tabName: string) => !renderedTabsNames.includes(tabName))
            .forEach((tabName: string) => this.registeredTabs.removeTab(tabName));

        this.tabComponentsList.forEach((tab: EvoTabComponent) => {
            if (!this.registeredTabs.hasTab(tab.name)) {
                this.tabsService.registerTab(this.name, tab.name);
            }

            tab.attach(this.name);
        });

        if (!!this.registeredTabs.length && !this.registeredTabs.getActiveTab()) {
            this.tabsService.setTab(this.name, this.registeredTabs[0].name);
        }
    }
}
