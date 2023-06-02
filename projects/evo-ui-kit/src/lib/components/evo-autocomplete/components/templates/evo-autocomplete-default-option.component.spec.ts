import {ComponentFixture, fakeAsync, TestBed, waitForAsync} from '@angular/core/testing';
import {EvoAutocompleteDefaultOptionComponent} from './evo-autocomplete-default-option.component';
import {ChangeDetectorRef} from '@angular/core';

describe(`EvoAutocompleteDefaultOptionComponent`, () => {

    let fixture: ComponentFixture<EvoAutocompleteDefaultOptionComponent>;
    let component: EvoAutocompleteDefaultOptionComponent;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [
                EvoAutocompleteDefaultOptionComponent,
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EvoAutocompleteDefaultOptionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it(`should create`, () => {
        expect(component).toExist();
    });

    it('should mark changes for check', fakeAsync(() => {
        const changeDetectorRef = fixture.debugElement.injector.get(ChangeDetectorRef);
        const markForCheckSpy = spyOn(changeDetectorRef.constructor.prototype, 'markForCheck');
        component.onSelectedChange(new Event('change'));
        expect(markForCheckSpy).toHaveBeenCalled();
    }));

    it('should prevent default on checkboxClick', fakeAsync(() => {
        const e = jasmine.createSpyObj('e', ['preventDefault', 'stopImmediatePropagation']);
        component.onCheckboxClick(e);
        expect(e.preventDefault).toHaveBeenCalled();
        expect(e.stopImmediatePropagation).toHaveBeenCalled();
    }));

});
