import {Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {
    EvoNavigationTabDirective,
    EvoNavigationTabsComponent,
    EvoTabsSize,
} from '../../../projects/evo-ui-kit/src/lib/components/evo-navigation-tabs';

export default {
    title: 'Components/EvoNavigationTabs',
    component: EvoNavigationTabsComponent,
    decorators: [
        moduleMetadata({
            declarations: [EvoNavigationTabsComponent, EvoNavigationTabDirective],
            imports: [CommonModule, FormsModule],
        }),
    ],
} as Meta;

const mockTabs = [{label: 'Tab 1'}, {label: 'Tab 2'}, {label: 'Tab 3', disabled: true}];

@Component({
    selector: 'storybook-ng-content-demo',
    template: `
        <evo-navigation-tabs
            [tabs]="tabs"
            [size]="size"
            [activeIndex]="activeIndex"
            (activeItemIndexChange)="onTabChange($event)"
        >
            <button evoNavigationTab position="start">📌 Custom content before tabs</button>
            <button evoNavigationTab>💡 Additional content below</button>
        </evo-navigation-tabs>

        <br />
        <div>
            <div>index:</div>
            <input type="number" [(ngModel)]="activeIndex" />
        </div>
        <br />
        <div>
            <div>size:</div>
            <label>
                <input type="radio" name="size" value="normal" checked (change)="onSizeChange('normal')" />
                Normal
            </label>

            <label>
                <input type="radio" name="size" value="small" (change)="onSizeChange('small')" />
                Small
            </label>
        </div>
    `,
})
class TabsDemoComponent {
    tabs = mockTabs;
    activeIndex = 0;
    size: EvoTabsSize = 'normal';

    onTabChange(index: number): void {
        this.activeIndex = index;
    }

    onSizeChange(size: EvoTabsSize): void {
        this.size = size;
        console.log('Selected size:', size);
    }
}

export const Default = () => ({
    component: TabsDemoComponent,
});
Default.storyName = 'default';
