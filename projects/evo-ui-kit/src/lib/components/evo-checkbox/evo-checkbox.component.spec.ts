import {ChangeDetectorRef, Component} from '@angular/core';
import {ComponentFixture, fakeAsync, TestBed, tick, waitForAsync} from '@angular/core/testing';
import {EvoCheckboxComponent} from './index';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, UntypedFormControl, Validators} from '@angular/forms';
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

    // Вывод сообщения об ошибке проверяется честно, через реальный reactive-путь, в блоке
    // 'EvoCheckboxComponent: OnPush error indication on external control change' ниже.

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
    template: `
        <form [formGroup]="form">
            <evo-checkbox formControlName="checkbox">Disabled reactive</evo-checkbox>
        </form>
    `,
    imports: [EvoCheckboxComponent, ReactiveFormsModule],
})
class DisabledReactiveHostComponent {
    form = new FormGroup({checkbox: new FormControl({value: false, disabled: true})});
}

@Component({
    template: `<evo-checkbox [(checked)]="checked" [disabled]="true">Disabled controlled</evo-checkbox>`,
    imports: [EvoCheckboxComponent],
})
class DisabledControlledHostComponent {
    checked = false;
}

// Эталон поведения, на который равняется controlled-режим: заблокированный FormControl ПРИНИМАЕТ
// программную запись значения (setValue -> writeValue -> отрисовка). disabled запрещает пользовательский
// ввод, а не программную установку состояния - поэтому [checked] не проверяет disabled.
describe('EvoCheckboxComponent: disabled does not block programmatic value', () => {
    // Сам контракт Angular, на который равняется controlled-режим, без участия компонента: setValue пишет
    // value независимо от disabled. Если поведение изменится при апгрейде Angular - обоснование того,
    // что [checked] не проверяет disabled, рассыпется, и этот тест упадёт первым.
    it('should accept setValue on a disabled FormControl', () => {
        const control = new FormControl({value: false, disabled: true});

        control.setValue(true);

        expect(control.disabled).toBe(true);
        expect(control.value).toBe(true);
    });

    // Источник заблуждения «disabled-контрол не принимает значение»: FormGroup.value скрывает
    // заблокированные контролы, пока в группе есть хотя бы один активный. Значение при этом записано -
    // оно видно через control.value и getRawValue().
    it('should hide a disabled control from FormGroup.value but keep it in getRawValue', () => {
        const form = new FormGroup({
            checkbox: new FormControl({value: false, disabled: true}),
            other: new FormControl(false),
        });

        form.get('checkbox').setValue(true);

        expect(form.get('checkbox').value).toBe(true);
        expect(form.getRawValue()).toEqual({checkbox: true, other: false});
        expect(form.value).toEqual({other: false});
    });

    it('should render setValue on a disabled FormControl (form-driven mode)', () => {
        TestBed.configureTestingModule({imports: [DisabledReactiveHostComponent]});
        const fixture = TestBed.createComponent(DisabledReactiveHostComponent);
        fixture.detectChanges();
        const inputEl: HTMLInputElement = fixture.nativeElement.querySelector('.evo-checkbox__input');
        expect(inputEl.disabled).toBeTruthy();
        expect(inputEl.checked).toBeFalsy();

        fixture.componentInstance.form.get('checkbox').setValue(true);
        fixture.detectChanges();

        expect(inputEl.checked).toBeTruthy();
        expect(inputEl.disabled).toBeTruthy();
    });

    it('should render [checked] on a disabled checkbox (controlled mode)', () => {
        TestBed.configureTestingModule({imports: [DisabledControlledHostComponent]});
        const fixture = TestBed.createComponent(DisabledControlledHostComponent);
        fixture.detectChanges();
        const inputEl: HTMLInputElement = fixture.nativeElement.querySelector('.evo-checkbox__input');

        fixture.componentInstance.checked = true;
        fixture.detectChanges();

        expect(inputEl.checked).toBeTruthy();
        expect(inputEl.disabled).toBeTruthy();
    });

    it('should ignore user clicks while disabled', () => {
        TestBed.configureTestingModule({imports: [DisabledControlledHostComponent]});
        const fixture = TestBed.createComponent(DisabledControlledHostComponent);
        fixture.detectChanges();
        const inputEl: HTMLInputElement = fixture.nativeElement.querySelector('.evo-checkbox__input');

        fixture.nativeElement.querySelector('.evo-checkbox').dispatchEvent(new MouseEvent('click'));
        fixture.detectChanges();

        expect(inputEl.checked).toBeFalsy();
        expect(fixture.componentInstance.checked).toBeFalsy();
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

@Component({
    template: `
        <form [formGroup]="form">
            <evo-checkbox formControlName="agree" [errorsMessages]="errorsMessages">Agree</evo-checkbox>
        </form>
    `,
    imports: [EvoCheckboxComponent, ReactiveFormsModule],
})
class ValidatedHostComponent {
    errorsMessages = {required: 'Must agree'};
    form = new FormGroup({agree: new FormControl(false, Validators.requiredTrue)});
}

describe('EvoCheckboxComponent: OnPush error indication on external control change', () => {
    let hostFixture: ComponentFixture<ValidatedHostComponent>;
    let host: ValidatedHostComponent;
    let control: FormControl;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [ValidatedHostComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        hostFixture = TestBed.createComponent(ValidatedHostComponent);
        host = hostFixture.componentInstance;
        hostFixture.detectChanges();
        control = host.form.get('agree') as FormControl;
    });

    // Регрессия OnPush: чекбокс - OnPush-потомок Default-хоста, поэтому при внешней смене статуса/touched
    // без нового взаимодействия он перерисуется ТОЛЬКО если подписан на control.events и зовёт markForCheck.
    // Без подписки этот тест падает (блок ошибки не появляется).
    it('should render the error block after the control becomes invalid+touched externally, without a new interaction', () => {
        // Контрол уже "грязный" (как будто пользователь его переключал) и невалиден (requiredTrue при false).
        control.markAsDirty();
        hostFixture.detectChanges();
        // touched ещё не выставлен -> ошибку не показываем.
        expect(hostFixture.nativeElement.querySelector('.evo-error')).toBeNull();

        // Внешняя пометка touched (например, submit -> markAllAsTouched) без взаимодействия с чекбоксом.
        control.markAllAsTouched();
        hostFixture.detectChanges();

        const errorEl = hostFixture.nativeElement.querySelector('.evo-error');
        expect(errorEl).not.toBeNull();
        expect(errorEl.textContent).toContain('Must agree');
    });

    it('should drop the error block after the control becomes valid externally', () => {
        control.markAsDirty();
        control.markAllAsTouched();
        hostFixture.detectChanges();
        expect(hostFixture.nativeElement.querySelector('.evo-error')).not.toBeNull();

        // Внешняя правка значения делает requiredTrue-контрол валидным - индикация должна погаснуть.
        control.setValue(true);
        hostFixture.detectChanges();
        expect(hostFixture.nativeElement.querySelector('.evo-error')).toBeNull();
    });
});

@Component({
    template: `<evo-checkbox [(ngModel)]="checked" [ngModelOptions]="{standalone: true}">NgModel</evo-checkbox>`,
    imports: [EvoCheckboxComponent, FormsModule],
})
class NgModelHostComponent {
    checked = false;
}

describe('EvoCheckboxComponent: template-driven [(ngModel)] compatibility', () => {
    let hostFixture: ComponentFixture<NgModelHostComponent>;
    let host: NgModelHostComponent;
    let inputEl: HTMLInputElement;
    let labelEl: HTMLElement;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [NgModelHostComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        hostFixture = TestBed.createComponent(NgModelHostComponent);
        host = hostFixture.componentInstance;
        hostFixture.detectChanges();
        inputEl = hostFixture.nativeElement.querySelector('.evo-checkbox__input');
        labelEl = hostFixture.nativeElement.querySelector('.evo-checkbox');
    });

    // Боевой путь внутреннего потребителя (evo-autocomplete-default-option): внешний [ngModel] через CVA
    // после удаления FormsModule/NgModel из шаблона самого чекбокса.
    it('should reflect the model into the native input', fakeAsync(() => {
        host.checked = true;
        hostFixture.detectChanges();
        tick();
        hostFixture.detectChanges();
        expect(inputEl.checked).toBeTruthy();
    }));

    it('should write the model back on user click', fakeAsync(() => {
        labelEl.dispatchEvent(new MouseEvent('click'));
        hostFixture.detectChanges();
        tick();
        expect(host.checked).toBe(true);
    }));
});

@Component({
    template: `
        <evo-checkbox
            [(checked)]="checked"
            [(indeterminate)]="indeterminate"
            (checkedChange)="onCheckedChange($event)"
        >
            Indeterminate controlled
        </evo-checkbox>
    `,
    imports: [EvoCheckboxComponent],
})
class IndeterminateControlledHostComponent {
    checked = false;
    indeterminate = true;
    lastChecked: boolean;

    onCheckedChange(value: boolean): void {
        this.lastChecked = value;
    }
}

describe('EvoCheckboxComponent: indeterminate in controlled mode', () => {
    let hostFixture: ComponentFixture<IndeterminateControlledHostComponent>;
    let host: IndeterminateControlledHostComponent;
    let inputEl: HTMLInputElement;
    let labelEl: HTMLElement;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [IndeterminateControlledHostComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        hostFixture = TestBed.createComponent(IndeterminateControlledHostComponent);
        host = hostFixture.componentInstance;
        hostFixture.detectChanges();
        inputEl = hostFixture.nativeElement.querySelector('.evo-checkbox__input');
        labelEl = hostFixture.nativeElement.querySelector('.evo-checkbox');
    });

    it('should render indeterminate from [indeterminate] without a form', () => {
        expect(inputEl.indeterminate).toBeTruthy();
    });

    it('should reset indeterminate and emit both changes on click', () => {
        labelEl.dispatchEvent(new MouseEvent('click'));
        hostFixture.detectChanges();

        expect(inputEl.indeterminate).toBeFalsy();
        expect(inputEl.checked).toBeTruthy();
        expect(host.checked).toBe(true);
        expect(host.lastChecked).toBe(true);
        expect(host.indeterminate).toBe(false);
    });
});

@Component({
    template: `
        <evo-checkbox
            class="master"
            [checked]="allSelectableChecked"
            [indeterminate]="someSelectableChecked && !allSelectableChecked"
            (checkedChange)="toggleAll($event)"
        >
            Все
        </evo-checkbox>
        @for (row of rows; track row.id) {
            <evo-checkbox class="row" [(checked)]="row.checked" [disabled]="row.disabled">{{ row.id }}</evo-checkbox>
        }
    `,
    imports: [EvoCheckboxComponent],
})
class MasterRowsHostComponent {
    rows = [
        {id: 1, checked: false, disabled: false},
        {id: 2, checked: false, disabled: false},
        {id: 3, checked: false, disabled: true},
    ];

    get selectableRows() {
        return this.rows.filter((row) => !row.disabled);
    }

    get allSelectableChecked(): boolean {
        return this.selectableRows.length > 0 && this.selectableRows.every((row) => row.checked);
    }

    get someSelectableChecked(): boolean {
        return this.selectableRows.some((row) => row.checked);
    }

    toggleAll(checked: boolean): void {
        this.selectableRows.forEach((row) => (row.checked = checked));
    }
}

// Целевой сценарий тикета: мастер-чекбокс шапки над плотным списком строк, часть которых заблокирована.
// Мастер обязан отражать ровно те строки, которые он способен переключить: если считать заблокированную
// строку, состояние "отмечено всё" недостижимо и шапка залипает в indeterminate (баг из ревью).
describe('EvoCheckboxComponent: master checkbox over a row list', () => {
    let fixture: ComponentFixture<MasterRowsHostComponent>;
    let host: MasterRowsHostComponent;
    let master: HTMLInputElement;
    let rowLabels: HTMLElement[];
    let masterLabel: HTMLElement;

    const clickRow = (index: number) => {
        rowLabels[index].dispatchEvent(new MouseEvent('click'));
        fixture.detectChanges();
    };

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({imports: [MasterRowsHostComponent]}).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MasterRowsHostComponent);
        host = fixture.componentInstance;
        fixture.detectChanges();
        master = fixture.nativeElement.querySelector('evo-checkbox.master .evo-checkbox__input');
        masterLabel = fixture.nativeElement.querySelector('evo-checkbox.master .evo-checkbox');
        rowLabels = Array.from(fixture.nativeElement.querySelectorAll('evo-checkbox.row .evo-checkbox'));
    });

    it('should become checked - not indeterminate - once every selectable row is checked', () => {
        clickRow(0);
        expect(master.indeterminate).toBeTruthy();
        expect(master.checked).toBeFalsy();

        clickRow(1);

        expect(master.checked).toBeTruthy();
        expect(master.indeterminate).toBeFalsy();
    });

    it('should clear itself after the rows it checked are unchecked back', () => {
        masterLabel.dispatchEvent(new MouseEvent('click'));
        fixture.detectChanges();
        expect(master.checked).toBeTruthy();
        expect(host.rows.map((row) => row.checked)).toEqual([true, true, false]);

        clickRow(0);
        clickRow(1);

        expect(master.checked).toBeFalsy();
        expect(master.indeterminate).toBeFalsy();
    });

    it('should leave the disabled row untouched when toggling all', () => {
        masterLabel.dispatchEvent(new MouseEvent('click'));
        fixture.detectChanges();

        expect(host.rows[2].checked).toBeFalsy();
    });
});

@Component({
    template: `<evo-checkbox [checked]="false" disabled="false">Negative attributes</evo-checkbox>`,
    imports: [EvoCheckboxComponent],
})
class NegativeAttributeHostComponent {}

describe('EvoCheckboxComponent: booleanAttribute negative coercion', () => {
    it('should coerce false / "false" inputs to false', () => {
        TestBed.configureTestingModule({imports: [NegativeAttributeHostComponent]});
        const fixture = TestBed.createComponent(NegativeAttributeHostComponent);
        fixture.detectChanges();

        const inputEl: HTMLInputElement = fixture.nativeElement.querySelector('.evo-checkbox__input');
        expect(inputEl.checked).toBeFalsy();
        expect(inputEl.disabled).toBeFalsy();
    });
});
