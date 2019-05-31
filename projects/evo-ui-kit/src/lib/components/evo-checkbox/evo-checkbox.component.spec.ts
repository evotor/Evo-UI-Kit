import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { EvoUiClassDirective, EvoCheckboxComponent, EvoControlErrorComponent } from 'evo-ui-kit';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';

describe('EvoCheckboxComponent', () => {
    let component: EvoCheckboxComponent;
    let fixture: ComponentFixture<EvoCheckboxComponent>;
    let evoCheckboxEl: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ FormsModule, ReactiveFormsModule ],
            declarations: [
                EvoCheckboxComponent,
                EvoControlErrorComponent,
                EvoUiClassDirective,
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EvoCheckboxComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        evoCheckboxEl = fixture.nativeElement.querySelector('.evo-checkbox');
    });

    it('should have unchecked input element after construction', () => {
        component.writeValue(false);
        fixture.detectChanges();
        expect(fixture.nativeElement
            .querySelector('.evo-checkbox__input').checked).toBeFalsy();
    });

    it('should have checked input element after click', () => {
        evoCheckboxEl.dispatchEvent(new MouseEvent('click'));
        fixture.detectChanges();
        expect(fixture.nativeElement
            .querySelector('.evo-checkbox__input').checked).toBeTruthy();
    });

    it('should have disabled input element after state changed', fakeAsync( () => {
        component.setDisabledState(true);
        fixture.detectChanges();
        tick(); // Wait until DOM binding change
        expect(fixture.nativeElement
            .querySelector('.evo-checkbox__input').disabled).toBeTruthy();
    }));

    it('should have error message if error exist', () => {
        const errorText = 'Some error text';
        component.errorsMessages = { required: errorText };
        component.control = new FormControl('');
        component.control.setErrors({ required: errorText });
        component.control.markAsTouched();
        component.control.markAsDirty();

        fixture.detectChanges();

        expect(fixture.nativeElement.querySelector('.evo-error span').textContent).toEqual(errorText);
    });
});
