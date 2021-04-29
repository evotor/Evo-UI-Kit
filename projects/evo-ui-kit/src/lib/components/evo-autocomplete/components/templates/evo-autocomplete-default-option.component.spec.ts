import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EvoAutocompleteDefaultOptionComponent } from './evo-autocomplete-default-option.component';

describe(`EvoAutocompleteDefaultOptionComponent`, () => {

    let fixture: ComponentFixture<EvoAutocompleteDefaultOptionComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                EvoAutocompleteDefaultOptionComponent,
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EvoAutocompleteDefaultOptionComponent);
        fixture.detectChanges();
    });

    it(`should create`, () => {
        expect(fixture.componentInstance).toExist();
    });
});
