import {createHostFactory, SpectatorHost} from '@ngneat/spectator';
import {EvoRadioGroupComponent} from './index';
import {FormsModule, ReactiveFormsModule, UntypedFormBuilder} from '@angular/forms';
import {EvoRadioGroupDirections, EvoRadioGroupThemes} from './evo-radio-group.component';
import {Component} from '@angular/core';
import {EvoUiClassDirective} from '../../directives/';

const options = {
    BLUE: {
        value: 'blue',
        presentationText: 'Синяя таблетка',
    },
    RED: {
        value: 'red',
        presentationText: 'Красная таблетка',
    },
};

@Component({selector: 'evo-host-component', template: ``})
class TestHostComponent {
    options = options;
    initValue = this.options.BLUE.value;
    formModel = new UntypedFormBuilder().group({
        radioGroupValue: [this.initValue, []],
    });
    theme = EvoRadioGroupThemes.light;
    direction = EvoRadioGroupDirections.column;
}

describe('EvoRadioGroupComponent', () => {
    let host: SpectatorHost<EvoRadioGroupComponent, TestHostComponent>;
    const createHost = createHostFactory({
        component: EvoRadioGroupComponent,
        declarations: [
            EvoUiClassDirective,
        ],
        imports: [FormsModule, ReactiveFormsModule],
        host: TestHostComponent,
    });

    beforeEach(() => {
        host = createHost(`
        <form [formGroup]="formModel">
            <evo-radio-group
                formControlName="radioGroupValue"
                [options]="options"
                [value]="initValue"
                [theme]="theme"
                [direction]="direction"
                ></evo-radio-group>
        </form>`);
    });

    it(`should have checked first radio input after construction`, () => {
        expect(host.query('input[type="radio"]')).toBeChecked();
    });

    it(`should have checked second radio input after click`, () => {
        host.click('.evo-radio-group__radio:last-child');
        expect(host.queryLast('input[type="radio"]')).toBeChecked();
        expect(host.hostComponent.formModel.get('radioGroupValue').value)
            .toEqual(options.RED.value);
    });

    it(`should have specified labels`, () => {
        const labelsEls = host.queryAll('.evo-radio-group__radio-value');
        expect(labelsEls[0]).toHaveText(options.BLUE.presentationText);
        expect(labelsEls[1]).toHaveText(options.RED.presentationText);
    });

    it(`should have direction & theme classNames`, () => {
        const radioGroupEl = host.query('.evo-radio-group');
        const theme = EvoRadioGroupThemes.light;
        const direction = EvoRadioGroupDirections.column;
        host.hostComponent.theme = theme;
        host.hostComponent.direction = direction;
        expect(radioGroupEl).toHaveClass(`evo-radio-group_${ theme }`);
        expect(radioGroupEl).toHaveClass(`evo-radio-group_${ direction }`);
    });

});
