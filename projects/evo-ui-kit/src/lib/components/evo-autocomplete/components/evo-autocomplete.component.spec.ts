import { async, fakeAsync, tick } from '@angular/core/testing';
import { Component, ViewChild } from '@angular/core';
import { EvoAutocompleteComponent } from '../index';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { cities } from './fixtures';
import { createHostComponentFactory, SpectatorWithHost } from '@netbasal/spectator';
import { NgSelectModule } from '@ng-select/ng-select';
import { EvoControlErrorComponent } from '../../evo-control-error';

@Component({ selector: 'evo-host-component', template: `` })
class TestHostComponent {
    cities: { label: string; value: any }[] = cities;
    @ViewChild(EvoAutocompleteComponent, {static: true})
    public autocompleteComponent: EvoAutocompleteComponent;
    formModel = new FormBuilder().group({
        cityId: [ cities[0].value, [Validators.required] ],
    });
    loading = false;
    errorsMessages = {
        required: 'Заполните поле'
    };
}

describe('EvoAutocompleteComponent', () => {
    let host: SpectatorWithHost<EvoAutocompleteComponent, TestHostComponent>;
    const createHost = createHostComponentFactory({
        component: EvoAutocompleteComponent,
        declarations: [ EvoAutocompleteComponent, EvoControlErrorComponent ],
        host: TestHostComponent,
        imports: [
            FormsModule,
            ReactiveFormsModule,
            NgSelectModule,
        ],
    });

    beforeEach(async(() => {
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

    it(`should have selected city with id = ${cities[0].value}, after construction`, () => {
        expect(host.component.value).toEqual(cities[0].value);
    });

    it(`should have placeholder with text = ${cities[1].label}, after form control changed`, () => {
        host.hostComponent.formModel.get('cityId').patchValue(cities[1].value);
        host.detectChanges();
        expect(host.query('.ng-value-label').textContent).toEqual(cities[1].label);
    });

    it(`should be disabled if formControl disabled`, fakeAsync(() => {
        host.hostComponent.formModel.get('cityId').disable();
        host.detectChanges();
        tick();
        expect(host.query('.ng-input input').getAttribute('disabled')).toEqual('');
    }));

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

    it(`should enable editQueryMode`, fakeAsync(() => {
        host.detectChanges();
        const input = host.query('.ng-input input') as HTMLInputElement;
        const autocompleteComponent = host.hostComponent.autocompleteComponent;
        expect(autocompleteComponent.editQuery).toEqual(true);
        expect(autocompleteComponent.change.observers.length).toEqual(1);
        expect(autocompleteComponent.focus.observers.length).toEqual(1);
        expect(autocompleteComponent.close.observers.length).toEqual(1);
        expect(input.value).toEqual('');
        const formControl = host.hostComponent.formModel.get('cityId');

        // Focus
        formControl.patchValue(cities[0].value);
        autocompleteComponent.focus.next();
        host.detectChanges();
        expect(autocompleteComponent['inputVal']).toEqual(cities[0].label);
        expect(input.value).toEqual(cities[0].label);

        // Blur
        autocompleteComponent.blur.next();
        host.detectChanges();
        expect(autocompleteComponent['inputVal']).toEqual(cities[0].label);
        expect(input.value).toEqual('');

        // Change
        formControl.patchValue(cities[1].value);
        autocompleteComponent.change.next();
        host.detectChanges();
        tick();
        expect(autocompleteComponent['inputVal']).toEqual(cities[1].label);
        expect(input.value).toEqual(cities[1].label);

        // Close
        formControl.patchValue(cities[2].value);
        autocompleteComponent.close.next();
        input.dispatchEvent(new Event('focus'));
        host.detectChanges();
        tick();
        expect(autocompleteComponent.ngSelectComponent.element.classList.contains('ng-select-focused'))
            .toBeTruthy();
        expect(autocompleteComponent['inputVal']).toEqual(cities[2].label);
        expect(input.value).toEqual(cities[2].label);

        // ValueChanges
        formControl.patchValue(null);
        host.detectChanges();
        expect(autocompleteComponent['inputVal']).toEqual('');
        expect(input.value).toEqual('');

        // Destroy
        autocompleteComponent.ngOnDestroy();
        expect(autocompleteComponent.change.observers.length).toEqual(0);
        expect(autocompleteComponent.focus.observers.length).toEqual(0);
        expect(autocompleteComponent.close.observers.length).toEqual(0);

    }));

});
