import {ChangeDetectorRef, Component} from '@angular/core';
import {ComponentFixture, fakeAsync, TestBed, tick, waitForAsync} from '@angular/core/testing';
import {EvoCheckboxComponent} from './index';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, UntypedFormControl} from '@angular/forms';
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

        // Под OnPush прямая мутация control не метит view - в реальном использовании это делает смена @Input/взаимодействие.
        fixture.componentRef.injector.get(ChangeDetectorRef).markForCheck();
        fixture.detectChanges();

        expect(fixture.nativeElement.querySelector('.evo-error').textContent).toEqual(errorText);
    });

    it(`should have indeterminate state if needed`, fakeAsync(() => {
        fixture.componentRef.setInput('indeterminate', true);
        fixture.detectChanges();
        tick(); // Wait until DOM binding change
        expect(fixture.nativeElement.querySelector('.evo-checkbox__input').indeterminate).toBeTruthy();
    }));

    it(`should change indeterminate state to false after click`, fakeAsync(() => {
        fixture.componentRef.setInput('indeterminate', true);
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('.evo-checkbox__input').indeterminate).toBeTruthy();
        evoCheckboxEl.dispatchEvent(new MouseEvent('click'));
        fixture.detectChanges();
        tick();
        expect(fixture.nativeElement.querySelector('.evo-checkbox__input').indeterminate).toBeFalsy();
    }));

    it(`should change value after indeterminate state click`, fakeAsync(() => {
        component.value = true;
        fixture.componentRef.setInput('indeterminate', true);
        // Под OnPush прямая мутация value не метит view - помечаем явно (в реальном использовании это делает смена @Input).
        fixture.componentRef.injector.get(ChangeDetectorRef).markForCheck();
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

    it('should mirror value through the checked accessor', () => {
        component.checked = true;
        expect(component.value).toBe(true);

        component.value = false;
        expect(component.checked).toBe(false);
    });

    it('should not emit checkedChange on writeValue', () => {
        const checkedChangeSpy = jasmine.createSpy('checkedChange');
        component.checkedChange.subscribe(checkedChangeSpy);

        component.writeValue(true);

        expect(checkedChangeSpy).not.toHaveBeenCalled();
        expect(component.value).toBe(true);
    });

    it('should emit checkedChange after onChange on user interaction', () => {
        const checkedChangeSpy = jasmine.createSpy('checkedChange');
        component.checkedChange.subscribe(checkedChangeSpy);

        component.onInputChange(true);

        expect(checkedChangeSpy).toHaveBeenCalledOnceWith(true);
    });

    it('should keep a stable checkboxClass reference while invalid state is unchanged', () => {
        expect(component.checkboxClass).toBe(component.checkboxClass);
    });

    it('should allocate a new checkboxClass reference only when invalid state flips', () => {
        const stableRef = component.checkboxClass;

        const control = new UntypedFormControl('');
        control.setErrors({required: true});
        control.markAsTouched();
        control.markAsDirty();
        component.control = control;

        const invalidRef = component.checkboxClass;
        expect(invalidRef).not.toBe(stableRef);
        expect(invalidRef.invalid).toBe(true);
        // Повторный доступ без смены валидности - та же ссылка.
        expect(component.checkboxClass).toBe(invalidRef);
    });
});

@Component({
    template: `
        <evo-checkbox [(checked)]="checked" [disabled]="disabled" (checkedChange)="onCheckedChange($event)">
            Controlled
        </evo-checkbox>
    `,
    imports: [EvoCheckboxComponent],
})
class ControlledHostComponent {
    checked = false;
    disabled = false;
    changeCount = 0;
    lastChange: boolean;

    onCheckedChange(value: boolean): void {
        this.changeCount++;
        this.lastChange = value;
    }
}

describe('EvoCheckboxComponent: controlled mode', () => {
    let hostFixture: ComponentFixture<ControlledHostComponent>;
    let host: ControlledHostComponent;
    let inputEl: HTMLInputElement;
    let labelEl: HTMLElement;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [ControlledHostComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        hostFixture = TestBed.createComponent(ControlledHostComponent);
        host = hostFixture.componentInstance;
        hostFixture.detectChanges();
        inputEl = hostFixture.nativeElement.querySelector('.evo-checkbox__input');
        labelEl = hostFixture.nativeElement.querySelector('.evo-checkbox');
    });

    it('should reflect [checked] into the native input without a form', () => {
        host.checked = true;
        hostFixture.detectChanges();
        expect(inputEl.checked).toBeTruthy();
    });

    it('should emit checkedChange once and update the two-way binding on click', () => {
        labelEl.dispatchEvent(new MouseEvent('click'));
        hostFixture.detectChanges();

        expect(host.changeCount).toBe(1);
        expect(host.lastChange).toBe(true);
        expect(host.checked).toBe(true);
    });

    it('should disable the native input via [disabled]', () => {
        host.disabled = true;
        hostFixture.detectChanges();
        expect(inputEl.disabled).toBeTruthy();
    });

    it('should not render the error block without an NgControl', () => {
        host.checked = true;
        hostFixture.detectChanges();
        expect(hostFixture.nativeElement.querySelector('evo-control-error')).toBeNull();
    });
});

@Component({
    template: `<evo-checkbox checked disabled>Bare attributes</evo-checkbox>`,
    imports: [EvoCheckboxComponent],
})
class BareAttributeHostComponent {}

describe('EvoCheckboxComponent: booleanAttribute coercion', () => {
    it('should coerce bare checked/disabled attributes to true', () => {
        TestBed.configureTestingModule({imports: [BareAttributeHostComponent]});
        const fixture = TestBed.createComponent(BareAttributeHostComponent);
        fixture.detectChanges();

        const inputEl: HTMLInputElement = fixture.nativeElement.querySelector('.evo-checkbox__input');
        expect(inputEl.checked).toBeTruthy();
        expect(inputEl.disabled).toBeTruthy();
    });
});

@Component({
    template: `
        <form [formGroup]="form">
            <evo-checkbox formControlName="checkbox">Reactive</evo-checkbox>
        </form>
    `,
    imports: [EvoCheckboxComponent, ReactiveFormsModule],
})
class ReactiveHostComponent {
    form = new FormGroup({checkbox: new FormControl(false)});
}

describe('EvoCheckboxComponent: form-driven mode compatibility', () => {
    let hostFixture: ComponentFixture<ReactiveHostComponent>;
    let host: ReactiveHostComponent;
    let inputEl: HTMLInputElement;
    let labelEl: HTMLElement;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [ReactiveHostComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        hostFixture = TestBed.createComponent(ReactiveHostComponent);
        host = hostFixture.componentInstance;
        hostFixture.detectChanges();
        inputEl = hostFixture.nativeElement.querySelector('.evo-checkbox__input');
        labelEl = hostFixture.nativeElement.querySelector('.evo-checkbox');
    });

    it('should drive the native input from the FormControl value after FormsModule removal', () => {
        host.form.get('checkbox').setValue(true);
        hostFixture.detectChanges();
        expect(inputEl.checked).toBeTruthy();
    });

    it('should write the FormControl value back on user click', () => {
        labelEl.dispatchEvent(new MouseEvent('click'));
        hostFixture.detectChanges();
        expect(host.form.get('checkbox').value).toBe(true);
    });
});
