import { Component, ContentChildren, QueryList, AfterContentChecked, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { EvoTabItemComponent } from './evo-tab-item/evo-tab-item.component';

@Component({
    selector: 'evo-tabs',
    templateUrl: './evo-tabs.component.html',
    styleUrls: [ './evo-tabs.component.scss' ],
})
export class EvoTabsComponent implements AfterContentChecked, OnChanges {
    @Output() tabSelection = new EventEmitter();

    isInited = false;

    tabsHeaderList: { label: string }[];

    @ContentChildren(EvoTabItemComponent)
    tabComponentsList: QueryList<any>;

    @Input() selectedIndex = 0;

    ngAfterContentChecked() {
        if (!this.isInited) {
            this.tabsHeaderList = this.tabComponentsList.map((tab: EvoTabItemComponent, i: number) => {
                if (this.selectedIndex === i) {
                    tab.isSelected = true;
                }
                return { label: tab.label };
            });
            this.isInited = true;
        }
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (this.tabComponentsList) {
            const index = changes.selectedIndex.currentValue;
            this.changeSelectedTab(index);
        }
    }

    onClick(index: number): void {
        if (index !== this.selectedIndex) {
            this.changeSelectedTab(index);
        }
    }

    changeSelectedTab(index: number): void {
        this.tabComponentsList.forEach((tab, i) => {
            if (tab.isSelected && i !== index) {
                tab.isSelected = false;
            }
            if (index === i) {
                tab.isSelected = true;
            }
        });
        this.selectedIndex = index;

        this.tabSelection.emit(index);
    }

}
