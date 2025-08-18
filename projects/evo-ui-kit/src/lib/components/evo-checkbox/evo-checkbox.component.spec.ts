import {ComponentFixture, fakeAsync, TestBed, tick, waitForAsync} from '@angular/core/testing';
import {EvoCheckboxComponent} from './index';
import {FormsModule, ReactiveFormsModule, UntypedFormControl} from '@angular/forms';
import {EvoUiClassDirective} from '../../directives/';
import {EvoControlErrorComponent} from '../evo-control-error';

describe('EvoCheckboxComponent', () => {
    let component: EvoCheckboxComponent;
    let fixture: ComponentFixture<EvoCheckboxComponent>;
    let evoCheckboxEl: HTMLElement;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                ReactiveFormsModule,
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
        expect(fixture.nativeElement.querySelector('.evo-checkbox__input').checked).toBeFalsy();
    });

    it('should have checked input element after click', () => {
        evoCheckboxEl.dispatchEvent(new MouseEvent('click'));
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('.evo-checkbox__input').checked).toBeTruthy();
    });

    it('should have disabled input element after state changed', fakeAsync(() => {
        component.setDisabledState(true);
        fixture.detectChanges();
        tick(); // Wait until DOM binding change
        expect(fixture.nativeElement.querySelector('.evo-checkbox__input').disabled).toBeTruthy();
    }));

    it('should have error message if error exist', () => {
        const errorText = 'Some error text';
        component.errorsMessages = {required: errorText};
        component.control = new UntypedFormControl('');
        component.control.setErrors({required: errorText});
        component.control.markAsTouched();
        component.control.markAsDirty();

        fixture.detectChanges();

        expect(fixture.nativeElement.querySelector('.evo-error').textContent).toEqual(errorText);
    });

    it(`should have indeterminate state if needed`, fakeAsync(() => {
        component.indeterminate = true;
        fixture.detectChanges();
        tick(); // Wait until DOM binding change
        expect(fixture.nativeElement.querySelector('.evo-checkbox__input').indeterminate).toBeTruthy();
    }));

    it(`should change indeterminate state to false after click`, fakeAsync(() => {
        component.indeterminate = true;
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('.evo-checkbox__input').indeterminate).toBeTruthy();
        evoCheckboxEl.dispatchEvent(new MouseEvent('click'));
        fixture.detectChanges();
        tick();
        expect(fixture.nativeElement.querySelector('.evo-checkbox__input').indeterminate).toBeFalsy();
    }));

    it(`should change value after indeterminate state click`, fakeAsync(() => {
        component.value = true;
        component.indeterminate = true;
        fixture.detectChanges();
        tick();
        expect(fixture.nativeElement.querySelector('.evo-checkbox__input').checked).toBeTruthy();
        expect(fixture.nativeElement.querySelector('.evo-checkbox__input').indeterminate).toBeTruthy();
        evoCheckboxEl.dispatchEvent(new MouseEvent('click'));
        fixture.detectChanges();
        tick();
        expect(fixture.nativeElement.querySelector('.evo-checkbox__input').checked).toBeFalsy();
        expect(fixture.nativeElement.querySelector('.evo-checkbox__input').indeterminate).toBeFalsy();
    }));

    it('should not call onChange when writeValue is called, but should call onChange when onInputChange is triggered', fakeAsync(() => {
        const onChangeSpy = jasmine.createSpy('onChange');

        // Регистрируем spy как onChange callback
        component.registerOnChange(onChangeSpy);

        // Проверяем, что onChange НЕ вызывается при writeValue
        component.writeValue(true);
        tick();
        fixture.detectChanges();

        expect(onChangeSpy).not.toHaveBeenCalled();
        expect(component.value).toBe(true);

        // Сбрасываем spy
        onChangeSpy.calls.reset();

        // Проверяем, что onChange вызывается при пользовательском взаимодействии
        component.onInputChange(false);
        tick();
        fixture.detectChanges();

        expect(onChangeSpy).toHaveBeenCalledWith(false);
        expect(onChangeSpy).toHaveBeenCalledTimes(1);
    }));

    it('should handle indeterminate state correctly and not call onChange on writeValue', fakeAsync(() => {
        const onChangeSpy = jasmine.createSpy('onChange');
        const indeterminateChangeSpy = jasmine.createSpy('indeterminateChange');

        // Регистрируем callbacks
        component.registerOnChange(onChangeSpy);
        component.indeterminateChange.subscribe(indeterminateChangeSpy);

        // Устанавливаем indeterminate состояние
        component.indeterminate = true;
        component.writeValue(true);
        tick();
        fixture.detectChanges();

        // Проверяем, что onChange НЕ был вызван при writeValue
        expect(onChangeSpy).not.toHaveBeenCalled();
        expect(component.value).toBe(true);
        expect(component.indeterminate).toBe(true);

        // Симулируем пользовательское взаимодействие
        component.onInputChange(false);
        tick();
        fixture.detectChanges();

        // Проверяем, что onChange был вызван и indeterminate изменился
        expect(onChangeSpy).toHaveBeenCalledWith(false);
        expect(onChangeSpy).toHaveBeenCalledTimes(1);
        expect(component.indeterminate).toBe(false);
        expect(indeterminateChangeSpy).toHaveBeenCalledWith(false);
    }));
});
