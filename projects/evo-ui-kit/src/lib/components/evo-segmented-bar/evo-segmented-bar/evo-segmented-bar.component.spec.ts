import { createHostComponentFactory, SpectatorWithHost } from '@netbasal/spectator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { EvoSegmentedBarComponent, EvoSegmentedBarButtonComponent } from '../index';
import { EvoUiClassDirective } from '../../../directives/evo-ui-class.directive';

const optionsList = [{
    label: 'Все',
    value: 'all',
    counter: 14,
}, {
    label: 'Поддержка',
    value: 'support',
    counter: 12,
}, {
    label: 'Оплата',
    value: 'payment',
    counter: 2,
}, {
    label: 'Зарплата',
    value: 'cash',
    counter: 5,
}, {
    label: 'Штрафы',
    value: 'fines',
    counter: 2,
}];

@Component({selector: 'evo-host-component', template: ``})
class TestHostComponent {
    optionsList = optionsList;
    selectedValue = 'all';
    label = 'Label';
    labelShort = 'Label short';
}

describe('EvoSegmentedBarComponent', () => {
    let host: SpectatorWithHost<EvoSegmentedBarComponent, TestHostComponent>;
    let hostComponent: TestHostComponent;
    const createHost = createHostComponentFactory({
        component: EvoSegmentedBarComponent,
        declarations: [
            EvoSegmentedBarButtonComponent,
            EvoUiClassDirective,
        ],
        imports: [FormsModule, ReactiveFormsModule],
        host: TestHostComponent,
    });
    let inputEls: HTMLInputElement[];

    beforeEach(() => {
        host = createHost(`
            <evo-segmented-bar [label]="label" [labelShort]="labelShort">
                <evo-segmented-bar-button
                    *ngFor="let option of optionsList"
                    name="filterList"
                    [value]="option.value"
                    [(ngModel)]="selectedValue">
                    <span>{{ option.label }}</span>
                    <span data-type="counter" *ngIf="option.counter">{{ option.counter }}</span>
                </evo-segmented-bar-button>
            </evo-segmented-bar>`);
        hostComponent = host.hostComponent;
        inputEls = host.queryAll('.segmented-button__input');
    });

    it(`should have ${ optionsList.length } buttons after construction`, () => {
        expect(inputEls.length).toEqual(optionsList.length);
    });

    it(`should have specified labels`, () => {
        const labelEl = host.query('.bar__label_normal');
        const labelShortEl = host.query('.bar__label_short');
        expect(labelEl).toHaveText(hostComponent.label);
        expect(labelShortEl).toHaveText(hostComponent.labelShort);
    });

    it(`should have selected segment with label = ${ optionsList[2].label } after click`, () => {
        host.click(inputEls[2]);
        expect(inputEls[2]).toBeChecked();
    });

    it(`should have specified counter`, () => {
        const counterEl = host.query('.segmented-button__view-text span[data-type="counter"]');
        expect(counterEl).toHaveText(hostComponent.optionsList[0].counter.toString());
    });
});
