import { createHostComponentFactory, SpectatorWithHost } from '@netbasal/spectator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { EvoSegmentedBarComponent, EvoSegmentedBarButtonComponent } from '../index';
import { EvoUiClassDirective } from '../../../directives/evo-ui-class.directive';

const optionsList = [{
    label: 'Все',
    value: 'all',
    counter: 14,
    disabled: false,
}, {
    label: 'Поддержка',
    value: 'support',
    counter: 12,
    disabled: false,
}, {
    label: 'Оплата',
    value: 'payment',
    counter: 2,
    disabled: false,
}, {
    label: 'Зарплата',
    value: 'cash',
    counter: 5,
    disabled: false,
}, {
    label: 'Штрафы',
    value: 'fines',
    counter: 2,
    disabled: true,
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
                    [(ngModel)]="selectedValue"
                    [disabled]="option.disabled">
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

    it('it becomes disabled when pass disabled attribute into segmented button', () => {
        // checking disabled element
        expect(inputEls[4]).toHaveAttribute('disabled');
        let segmentButtonLabel = host.queryAll('.segmented-button')[4];
        expect(segmentButtonLabel).toHaveClass('segmented-button_disabled');
        let segmentButtonView = host.queryAll('.segmented-button__view')[4];
        expect(segmentButtonView).toHaveStyle({color: '#D6D6D6'});

        // checking not disabled element
        expect(inputEls[0]).not.toHaveAttribute('disabled');
        segmentButtonLabel = host.queryAll('.segmented-button')[0];
        expect(segmentButtonLabel).not.toHaveClass('segmented-button_disabled');
        segmentButtonView = host.queryAll('.segmented-button__view')[0];
        expect(segmentButtonView).not.toHaveStyle({color: '#D6D6D6'});
    });
});
