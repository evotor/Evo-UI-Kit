import { fakeAsync, tick, waitForAsync } from '@angular/core/testing';
import { createHostFactory, SpectatorHost } from '@ngneat/spectator';
import { EvoToggleComponent } from './index';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { ViewChild, Component } from '@angular/core';

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

    it('should not call onChange when writeValue is called, but should call onChange when handleChange is triggered', fakeAsync(() => {
        const onChangeSpy = jasmine.createSpy('onChange');

        // Регистрируем spy как onChange callback
        host.component.registerOnChange(onChangeSpy);

        // Проверяем, что onChange НЕ вызывается при writeValue
        host.component.writeValue(true);
        tick();
        host.detectChanges();

        expect(onChangeSpy).not.toHaveBeenCalled();
        expect(host.component.value).toBe(true);

        // Сбрасываем spy
        onChangeSpy.calls.reset();

        // Проверяем, что onChange вызывается при пользовательском взаимодействии
        host.component.handleChange(false);
        tick();
        host.detectChanges();

        expect(onChangeSpy).toHaveBeenCalledWith(false);
        expect(onChangeSpy).toHaveBeenCalledTimes(1);
    }));

});
