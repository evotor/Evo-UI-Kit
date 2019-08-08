import { async } from '@angular/core/testing';
import { createHostComponentFactory, SpectatorWithHost } from '@netbasal/spectator';
import { EvoToggleComponent } from './index';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { ViewChild, Component } from '@angular/core';

@Component({selector: 'evo-host-component', template: ``})
class TestHostComponent {
    @ViewChild(EvoToggleComponent, {static: true}) toggleComponent: EvoToggleComponent;
    form: FormGroup;
    color = 'green';

    constructor(
        private formBuilder: FormBuilder,
    ) {
        this.form = this.formBuilder.group({
            enabled: [false, []],
        });
    }
}

describe('EvoToggleComponent', () => {
    let host: SpectatorWithHost<EvoToggleComponent, TestHostComponent>;
    let inputEl: HTMLInputElement;
    const createHost = createHostComponentFactory({
        component: EvoToggleComponent,
        imports: [
            FormsModule,
            ReactiveFormsModule,
        ],
        host: TestHostComponent,
    });

    beforeEach(async(() => {
        host = createHost(`
        <form [formGroup]="form">
            <evo-toggle formControlName="enabled" [color]="color"></evo-toggle>
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
        host.click('.evo-toggle label');
        host.detectChanges();
        const isChecked = inputEl.checked;
        expect(isChecked).toBeTruthy();
        expect(host.hostComponent.form.get('enabled').value).toBeTruthy();
    });

    it('should have certain classname if color input passed', () => {
        host.hostComponent.color = 'purple';
        host.detectChanges();
        expect(host.query('.evo-toggle').classList.contains('evo-toggle_purple')).toBeTruthy();
    });

});
