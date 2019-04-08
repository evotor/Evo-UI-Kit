import { async, fakeAsync, tick } from '@angular/core/testing';
import { Component, ViewChild } from '@angular/core';
import { EvoAutocompleteComponent } from './evo-autocomplete.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { cities } from './fixtures';
import { createHostComponentFactory, SpectatorWithHost } from '@netbasal/spectator';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({ selector: 'evo-host-component', template: `` })
class TestHostComponent {
    cities: { label: string; value: any }[] = cities;
    @ViewChild(EvoAutocompleteComponent)
    public autocompleteComponent: EvoAutocompleteComponent;
    formModel = new FormBuilder().group({
        cityId: [ cities[0].value, [] ],
    });
    loading = false;
}

fdescribe('EvoAutocompleteComponent', () => {
    let host: SpectatorWithHost<EvoAutocompleteComponent, TestHostComponent>;
    const createHost = createHostComponentFactory({
        component: EvoAutocompleteComponent,
        declarations: [ EvoAutocompleteComponent ],
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
                formControlName="cityId"
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

});
