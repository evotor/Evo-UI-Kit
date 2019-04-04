import { async, fakeAsync, tick } from '@angular/core/testing';
import { Component, ViewChild } from '@angular/core';
import { EvoAutoCompleteComponent } from './evo-auto-complete.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { cities } from './fixtures';
import { createHostComponentFactory, SpectatorWithHost } from '@netbasal/spectator';

@Component({ selector: 'evo-host-component', template: `` })
class TestHostComponent {
    cities: { label: string; value: any }[] = cities;
    @ViewChild(EvoAutoCompleteComponent)
    public autocompleteComponent: EvoAutoCompleteComponent;
    formModel = new FormBuilder().group({
        cityId: [ cities[0].value, [] ],
    });
}

describe('EvoAutoCompleteComponent', () => {
    let host: SpectatorWithHost<EvoAutoCompleteComponent, TestHostComponent>;
    const createHost = createHostComponentFactory({
        component: EvoAutoCompleteComponent,
        declarations: [ EvoAutoCompleteComponent ],
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
            <evo-auto
                [items]="cities"
                bindLabel="label"
                bindValue="value"
                formControlName="cityId"
                ></evo-auto>
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

});
