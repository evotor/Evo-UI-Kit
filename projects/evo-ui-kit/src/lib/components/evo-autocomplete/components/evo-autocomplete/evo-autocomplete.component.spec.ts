import {fakeAsync, tick, waitForAsync} from '@angular/core/testing';
import {Component, ViewChild} from '@angular/core';
import {EvoAutocompleteComponent} from '../../index';
import {FormsModule, ReactiveFormsModule, UntypedFormBuilder, Validators} from '@angular/forms';
import {createHostFactory, SpectatorHost} from '@ngneat/spectator';
import {NgSelectModule} from '@ng-select/ng-select';
import {EvoControlErrorComponent} from '../../../evo-control-error';
import {EvoAutocompleteDefaultOptionComponent} from '../evo-autocomplete-default-option/evo-autocomplete-default-option.component';
import {By} from '@angular/platform-browser';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';

const CITIES = [
    {
        label: 'Москва',
        value: '0c5b2444-70a0-4932-980c-b4dc0d3f02b5',
    },
    {
        label: 'Санкт-Петербург',
        value: 'c2deb16a-0330-4f05-821f-1d09c93331e6',
    },
    {
        label: 'Екатеринбург',
        value: '2763c110-cb8b-416a-9dac-ad28a55b4402',
    },
    {
        label: 'Новосибирск',
        value: '8dea00e3-9aab-4d8e-887c-ef2aaa546456',
    },
    {
        label: 'Казань',
        value: '93b3df57-4c89-44df-ac42-96f05e9cd3b9',
    },
    {
        label: 'Нижний Новгород',
        value: '555e7d61-d9a7-4ba6-9770-6caa8198c483',
    },
];

@Component({selector: 'evo-host-component', template: ``})
class TestHostComponent {
    // eslint-disable-next-line
    cities: {label: string; value: any}[] = CITIES;
    @ViewChild(EvoAutocompleteComponent, {static: true})
    autocompleteComponent: EvoAutocompleteComponent;
    formModel = new UntypedFormBuilder().group({
        cityId: [CITIES[0].value, [Validators.required]],
    });
    loading = false;
    errorsMessages = {
        required: 'Заполните поле',
    };
}

const createHost = createHostFactory({
    component: EvoAutocompleteComponent,
    host: TestHostComponent,
    imports: [
        EvoAutocompleteComponent,
        EvoControlErrorComponent,
        EvoAutocompleteDefaultOptionComponent,
        FormsModule,
        ReactiveFormsModule,
        NgSelectModule,
    ],
    providers: [provideHttpClient(), provideHttpClientTesting()],
});

describe('EvoAutocompleteComponent', () => {
    let host: SpectatorHost<EvoAutocompleteComponent, TestHostComponent>;

    beforeEach(waitForAsync(() => {
        host = createHost(`
        <form [formGroup]="formModel">
            <evo-autocomplete
                [items]="cities"
                bindLabel="label"
                bindValue="value"
                [loading]="loading"
                [editQuery]="true"
                formControlName="cityId"
                [errorsMessages]="errorsMessages"
            ></evo-autocomplete>
        </form>`);
    }));

    it(`should have selected city with id = ${CITIES[0].value}, after construction`, () => {
        expect(host.component.value).toEqual(CITIES[0].value);
    });

    it(`should have placeholder with text = ${CITIES[1].label}, after form control changed`, () => {
        host.hostComponent.formModel.get('cityId').patchValue(CITIES[1].value);
        host.detectChanges();
        expect(host.query('.ng-value-label').textContent).toEqual(CITIES[1].label);
    });

    it(`should be disabled if formControl disabled`, fakeAsync(() => {
        host.hostComponent.formModel.get('cityId').disable();
        host.detectChanges();
        tick();
        expect(host.query('.ng-input input').getAttribute('disabled')).toEqual('');
    }));

    it(`should NOT have loader element if loader input = false`, () => {
        host.hostComponent.loading = false;
        host.detectChanges();
        expect(host.query('.ng-spinner-loader')).toBeNull();
    });

    it(`should have loader element if loader input = true`, () => {
        host.hostComponent.loading = true;
        host.detectChanges();
        expect(host.query('.ng-spinner-loader')).not.toBeNull();
    });

    it(`should have error message if control touched and hasn't value`, () => {
        host.detectChanges();
        const formControl = host.hostComponent.formModel.get('cityId');
        formControl.patchValue('');
        formControl.markAsDirty();
        formControl.markAsTouched();
        formControl.updateValueAndValidity();
        host.detectChanges();
        expect(host.query('.evo-error')).not.toBeNull();
    });

    it(`should bind ng-select focus, blur, open, close and handleClearClick methods`, fakeAsync(() => {
        const focus = spyOn(host.component.ngSelectComponent, 'focus');
        const blur = spyOn(host.component.ngSelectComponent, 'blur');
        const open = spyOn(host.component.ngSelectComponent, 'open');
        const close = spyOn(host.component.ngSelectComponent, 'close');
        const handleClearClick = spyOn(host.component.ngSelectComponent, 'handleClearClick');
        host.component.focus();
        host.detectChanges();
        tick();
        expect(focus).toHaveBeenCalled();

        host.component.blur();
        host.detectChanges();
        tick();
        expect(blur).toHaveBeenCalled();

        host.component.open();
        host.detectChanges();
        tick();
        expect(open).toHaveBeenCalled();

        host.component.close();
        host.detectChanges();
        tick();
        expect(close).toHaveBeenCalled();

        host.component.onClearClick();
        host.detectChanges();
        tick();
        expect(handleClearClick).toHaveBeenCalled();
    }));
});

describe('EvoAutocompleteComponent: inputs binding and events', () => {
    it(`should have default theme if it's not set`, () => {
        const host = createHost(`
        <form [formGroup]="formModel">
            <evo-autocomplete
                [items]="cities"
                bindLabel="label"
                bindValue="value"
                [loading]="loading"
                [editQuery]="true"
                formControlName="cityId"
                [errorsMessages]="errorsMessages"
            ></evo-autocomplete>
        </form>`);
        expect(host.query('.evo-autocomplete_theme-default')).not.toBeNull();
    });

    it(`should have valid theme if theme param is valid`, () => {
        const host = createHost(`
        <form [formGroup]="formModel">
            <evo-autocomplete
                [items]="cities"
                theme="rounded"
                bindLabel="label"
                bindValue="value"
                [loading]="loading"
                [editQuery]="true"
                formControlName="cityId"
                [errorsMessages]="errorsMessages"
            ></evo-autocomplete>
        </form>`);
        expect(host.query('.evo-autocomplete_theme-rounded')).not.toBeNull();
    });

    it(`should have default theme if theme param is invalid`, () => {
        const host = createHost(`
        <form [formGroup]="formModel">
            <evo-autocomplete
                [items]="cities"
                theme="INVALID"
                bindLabel="label"
                bindValue="value"
                [loading]="loading"
                [editQuery]="true"
                formControlName="cityId"
                [errorsMessages]="errorsMessages"
            ></evo-autocomplete>
        </form>`);
        expect(host.query('.evo-autocomplete_theme-default')).not.toBeNull();
    });

    it(`should set default params for selectbox mode`, () => {
        const host = createHost(`
        <form [formGroup]="formModel">
            <evo-autocomplete
                [items]="cities"
                bindLabel="label"
                bindValue="value"
                [isSelectbox]="true"
                formControlName="cityId"
                [errorsMessages]="errorsMessages"
            ></evo-autocomplete>
        </form>`);
        expect(host.component.clearable).toBeFalsy();
        expect(host.component.searchable).toBeFalsy();
        expect(host.component.editQuery).toBeFalsy();
        expect(host.component.notFoundText).toBe('');
    });

    it(`should have valid state classes`, () => {
        const host = createHost(`
        <form [formGroup]="formModel">
            <evo-autocomplete
                [items]="cities"
                bindLabel="label"
                bindValue="value"
                [isSelectbox]="true"
                [editQuery]="true"
                formControlName="cityId"
                [errorsMessages]="errorsMessages"
                [multipleInline]="true"
            ></evo-autocomplete>
        </form>`);

        host.hostComponent.formModel.get('cityId').disable();
        host.detectComponentChanges();
        expect(host.query('.evo-autocomplete_disabled')).not.toBeNull();
        expect(host.query('.evo-autocomplete_is-selectbox')).not.toBeNull();
        expect(host.query('.evo-autocomplete_is-edit-query')).not.toBeNull();
        expect(host.query('.evo-autocomplete_is-multiple-inline')).not.toBeNull();
    });

    it(`should correctly handle blur or focus events`, () => {
        const host = createHost(`
        <form [formGroup]="formModel">
            <evo-autocomplete
                [items]="cities"
                bindLabel="label"
                bindValue="value"
                [editQuery]="true"
                formControlName="cityId"
                [errorsMessages]="errorsMessages"
            ></evo-autocomplete>
        </form>`);

        host.detectComponentChanges();

        // eslint-disable-next-line
        const onTouchedSpy = spyOn(host.component, 'onTouched');
        const focusEventSpy = spyOn(host.component.focusEvent, 'emit');
        const blurEventSpy = spyOn(host.component.blurEvent, 'emit');
        const input = host.debugElement.query(By.css('input'));

        // initial isFocused
        expect(host.component.isFocused).toBeFalsy();

        // check focus event without value
        host.hostComponent.formModel.get('cityId').setValidators([]);
        host.hostComponent.formModel.get('cityId').setValue(null);
        host.detectComponentChanges();
        input.triggerEventHandler('focus', {});
        host.detectComponentChanges();
        expect(focusEventSpy).not.toHaveBeenCalled();

        // reset to blured
        input.triggerEventHandler('blur', {});
        host.detectComponentChanges();

        // check focus event with value
        host.hostComponent.formModel.get('cityId').setValue(CITIES[0].value);
        input.triggerEventHandler('focus', {});
        host.detectComponentChanges();
        expect(onTouchedSpy).toHaveBeenCalled();
        expect(focusEventSpy).toHaveBeenCalled();
        expect(host.component.isFocused).toBeTruthy();

        // check blur event
        input.triggerEventHandler('blur', {});
        expect(host.component.isFocused).toBeFalsy();
        expect(blurEventSpy).toHaveBeenCalled();
    });

    it(`should handle editQueryMode events: focus`, fakeAsync(() => {
        const host = createHost(`
        <form [formGroup]="formModel">
            <evo-autocomplete
                [items]="cities"
                bindLabel="label"
                bindValue="value"
                [editQuery]="true"
                formControlName="cityId"
                [errorsMessages]="errorsMessages"
            ></evo-autocomplete>
        </form>`);

        host.detectComponentChanges();

        const resetSearchQuerySpy = spyOn(host.component, 'resetSearchQuery');
        const input = host.debugElement.query(By.css('input'));

        input.triggerEventHandler('focus', {});
        host.detectComponentChanges();
        expect(resetSearchQuerySpy).toHaveBeenCalled();
    }));

    it('should not call onChange when writeValue is called, but should call onChange when user interaction occurs', fakeAsync(() => {
        const host = createHost(`
        <form [formGroup]="formModel">
            <evo-autocomplete
                [items]="cities"
                bindLabel="label"
                bindValue="value"
                formControlName="cityId"
            ></evo-autocomplete>
        </form>`);

        const onChangeSpy = spyOn(host.component, 'onChange');

        // Регистрируем spy как onChange callback
        host.component.registerOnChange(onChangeSpy);

        // Проверяем, что onChange НЕ вызывается при writeValue
        host.component.writeValue('test-value');
        host.detectComponentChanges();

        expect(onChangeSpy).not.toHaveBeenCalled();
        expect(host.component.value).toBe('test-value');

        // Сбрасываем spy
        onChangeSpy.calls.reset();

        // Проверяем, что onChange вызывается при пользовательском взаимодействии
        // eslint-disable-next-line
        host.component.handleChange('user-selected-value' as any);
        host.detectComponentChanges();

        expect(onChangeSpy).toHaveBeenCalledWith('user-selected-value');
        expect(onChangeSpy).toHaveBeenCalledTimes(1);
    }));

    it('should handle NgSelect integration correctly without calling onChange on writeValue', fakeAsync(() => {
        const host = createHost(`
        <form [formGroup]="formModel">
            <evo-autocomplete
                [items]="cities"
                bindLabel="label"
                bindValue="value"
                formControlName="cityId"
            ></evo-autocomplete>
        </form>`);

        const onChangeSpy = spyOn(host.component, 'onChange');

        // Регистрируем spy как onChange callback
        host.component.registerOnChange(onChangeSpy);

        // Ждем инициализации NgSelect
        host.detectComponentChanges();

        // Проверяем, что NgSelect компонент инициализирован
        expect(host.component.ngSelectComponent).toBeDefined();

        // Устанавливаем значение через writeValue
        host.component.writeValue('test-city-id');
        host.detectComponentChanges();

        // Проверяем, что onChange НЕ был вызван при writeValue
        expect(onChangeSpy).not.toHaveBeenCalled();
        expect(host.component.value).toBe('test-city-id');

        // Симулируем пользовательский выбор
        // eslint-disable-next-line
        host.component.handleChange('user-selected-city' as any);
        host.detectComponentChanges();

        // Проверяем, что onChange был вызван при пользовательском взаимодействии
        expect(onChangeSpy).toHaveBeenCalledWith('user-selected-city');
        expect(onChangeSpy).toHaveBeenCalledTimes(1);
    }));
});
