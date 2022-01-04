import {waitForAsync} from '@angular/core/testing';
import {createHostFactory, SpectatorHost} from '@ngneat/spectator';
import {EvoToggleComponent} from './index';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Component, ViewChild} from '@angular/core';

@Component({selector: 'evo-host-component', template: ``})
class TestHostComponent {
    @ViewChild(EvoToggleComponent, {static: true}) toggleComponent: EvoToggleComponent;
    form: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
    ) {
        this.form = this.formBuilder.group({
            enabled: [false, []],
        });
    }
}

describe('EvoToggleComponent', () => {
    let host: SpectatorHost<EvoToggleComponent, TestHostComponent>;
    let inputEl: HTMLInputElement;
    const createHost = createHostFactory({
        component: EvoToggleComponent,
        imports: [
            FormsModule,
            ReactiveFormsModule,
        ],
        host: TestHostComponent,
    });

    beforeEach(waitForAsync(() => {
        host = createHost(`
        <form [formGroup]="form">
            <evo-toggle formControlName="enabled"></evo-toggle>
        </form>`);
        inputEl = host.query('.evo-toggle input');
    }));

    it('should create', () => {
        expect(host.component).toBeTruthy();
    });

    it('should have unchecked input element after construction', () => {
        const isChecked = host.query('.evo-toggle input').getAttribute('checked');
        expect(isChecked).toBeFalsy();
        expect(host.hostComponent.form.get('enabled').value).toBeFalsy();
    });

    it('should have checked input element after click label', () => {
        host.click('.evo-toggle');
        host.detectChanges();
        const isChecked = inputEl.checked;
        expect(isChecked).toBeTruthy();
        expect(host.hostComponent.form.get('enabled').value).toBeTruthy();
    });

    it('should set disable prop to true when call setDisabledState', () => {
        expect(host.component.isDisabled).toBeFalsy();
        host.component.setDisabledState(true);
        expect(host.component.isDisabled).toBeTruthy();
    });

});
