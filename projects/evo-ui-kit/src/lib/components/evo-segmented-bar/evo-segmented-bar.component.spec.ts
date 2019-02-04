import { createHostComponentFactory, SpectatorWithHost } from '@netbasal/spectator';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { EvoSegmentedBarComponent, EvoSegmentedBarButtonComponent, EvoUiClassDirective } from '../../evo-ui-kit.module';

const optionsList = [ {
    label: 'Все',
    value: 'all',
    counter: 14,
},
{
    label: 'Поддержка',
    value: 'support',
    counter: 12,
},
{
    label: 'Оплата',
    value: 'payment',
    counter: 2,
},
{
    label: 'Зарплата',
    value: 'cash',
    counter: 5,
},
{
    label: 'Штрафы',
    value: 'fines',
    counter: 2,
} ];

@Component({ selector: 'evo-host-component', template: `` })
class TestHostComponent {
    optionsList = optionsList;
    selectedValue = 'all';
}

describe('EvoSegmentedBarComponent', () => {
    let host: SpectatorWithHost<EvoSegmentedBarComponent, TestHostComponent>;
    const createHost = createHostComponentFactory({
        component: EvoSegmentedBarComponent,
        declarations: [ EvoSegmentedBarButtonComponent, EvoUiClassDirective ],
        imports: [ FormsModule, ReactiveFormsModule ],
        host: TestHostComponent,
    });
    let inputEls: HTMLInputElement[];

    beforeEach(() => {
        host = createHost(`
            <evo-segmented-bar label="Options label:">
                <evo-segmented-bar-button
                    *ngFor="let option of optionsList"
                    name="filterList"
                    [value]="option.value"
                    [(ngModel)]="selectedValue">
                    {{ option.label }}
                </evo-segmented-bar-button>
            </evo-segmented-bar>`);
        inputEls = host.queryAll('.segmented-button__input');
    });

    it(`should have ${optionsList.length} buttons after construction`, () => {
        expect(inputEls.length).toEqual(optionsList.length);
    });

    it(`should have selected segment with label = ${optionsList[2].label} after click`, () => {
        host.click(inputEls[2]);
        expect(inputEls[2]).toBeChecked();
    });
});
