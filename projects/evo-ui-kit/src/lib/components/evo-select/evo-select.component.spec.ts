import {fakeAsync, tick, waitForAsync} from '@angular/core/testing';
import {EvoSelectComponent} from './evo-select.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Component, ViewChild} from '@angular/core';
import {createHostFactory, SpectatorHost} from '@ngneat/spectator';
import {EvoUiClassDirective} from '../../directives';
import {EvoControlErrorComponent} from '../evo-control-error';

const options = [
    { label: 'One', value: '1' },
    { label: 'Two', value: '2' },
    { label: 'Three', value: '3' },
    { label: 'Not valid option', value: '' },
];

const formBuilder = new FormBuilder();

@Component({ selector: 'evo-host-component', template: `` })
class TestHostComponent {
    options: { label: string; value: string; }[];
    @ViewChild(EvoSelectComponent, {static: true}) public selectComponent: EvoSelectComponent;
    formModel: FormGroup;

    constructor() {
        this.options = options;
        this.formModel = formBuilder.group({
            qty: [this.options[1].value, [Validators.required]],
        });
    }
}

describe('EvoSelectComponent', () => {
    let host: SpectatorHost<EvoSelectComponent, TestHostComponent>;
    let hostComponent: TestHostComponent;
    let selectComponent: EvoSelectComponent;
    const createHost = createHostFactory({
        component: EvoSelectComponent,
        declarations: [ EvoUiClassDirective, EvoControlErrorComponent ],
        host: TestHostComponent,
    });

    beforeEach(waitForAsync(() => {
        host = createHost(`
        <form [formGroup]="formModel">
            <evo-select formControlName="qty">
                <option
                    *ngFor="let option of options"
                    [value]="option.value">{{ option.label }}</option>
            </evo-select>
        <form>`);
        hostComponent = host.hostComponent;
        selectComponent = hostComponent.selectComponent;
    }));

    it(`should have selected value = '2', after construction`, () => {
        expect(selectComponent.selectedValue).toEqual('2');
    });

    it(`should have selected value = '3', after formControl changed`, () => {
        hostComponent.formModel.get('qty').setValue('3');
        expect(hostComponent.selectComponent.selectedValue).toEqual('3');
    });

    it(`should be disabled if formControl disabled`, fakeAsync(() => {
        hostComponent.formModel.get('qty').disable();
        host.detectChanges();
        tick();
        expect(host.query('.evo-select__native')['disabled']).toBeTruthy();
    }));

    it(`should have error message, after formControl changed`, () => {
        hostComponent.formModel.get('qty').setValue('');
        selectComponent.control.markAsTouched();
        selectComponent.control.markAsDirty();
        host.detectChanges();
        expect(host.query('.evo-error')).toBeTruthy();
    });

    it(`should update placeholder after options list & FormControl value changed`, () => {
        const newItem = { label: 'Four', value: '4' };
        hostComponent.options.push(newItem);
        host.detectChanges();
        hostComponent.formModel.get('qty').setValue('4');
        host.detectChanges();
        expect(host.query('.evo-select__field').innerHTML === newItem.label).toBeTruthy();
    });
});
