import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {EvoTextareaComponent} from './index';
import {FormControl, FormsModule} from '@angular/forms';
import {EvoUiClassDirective} from '../../directives/';
import {EvoControlErrorComponent} from '../evo-control-error';
import {EvoTextareaSize} from './types/evo-textarea-size';
import {Component, ViewChild} from '@angular/core';
import {getElementByClassName, getElementBySelector} from '../../utils/testing';

@Component({
    template: `
        <evo-textarea
            [formControl]="control"
            [rows]="rows"
            [size]="size"
            [placeholder]="placeholder"
            [autoFocus]="autoFocus"
            [state]="state"
            [errorsMessages]="errorsMessages"
            [disabled]="disabled"
        ></evo-textarea>
    `,
})
class TestHostComponent {
    @ViewChild(EvoTextareaComponent) component: EvoTextareaComponent;

    control = new FormControl('123');
    multiline = true;
    rows = 3;
    size: EvoTextareaSize = 'small';
    placeholder: string;
    autoFocus: boolean;
    disabled: boolean;
    state = {
        invalid: false,
        valid: false,
    };
    errorsMessages = {required: 'Введите что-нибудь сюда, пожалуйста'};
}

describe('EvoTextareaComponent', () => {
    let hostComponent: TestHostComponent;
    let component: EvoTextareaComponent;
    let fixture: ComponentFixture<TestHostComponent>;
    let textareaEl: HTMLTextAreaElement;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                imports: [FormsModule],
                declarations: [EvoTextareaComponent, EvoUiClassDirective, EvoControlErrorComponent, TestHostComponent],
            }).compileComponents();
        }),
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(TestHostComponent);
        hostComponent = fixture.componentInstance;
        fixture.detectChanges();
        component = hostComponent.component;
        textareaEl = getElementByClassName(fixture, 'evo-textarea');
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should be disabled when input disabled = true', () => {
        hostComponent.disabled = true;
        fixture.detectChanges();

        expect(component.disabled).toBeTruthy();
        expect(textareaEl.classList.contains('evo-textarea_disabled')).toBeTruthy();
    });

    it('should call setDisabledState when form control is disabled', () => {
        const spy = spyOn(component, 'setDisabledState');
        hostComponent.control.disable();
        fixture.detectChanges();

        expect(spy).toHaveBeenCalledWith(true);
    });

    it('should not focus when disabled', () => {
        hostComponent.disabled = true;
        fixture.detectChanges();

        textareaEl.dispatchEvent(new FocusEvent('focus'));
        fixture.detectChanges();

        expect(component.focused).toBeFalsy();
        expect(textareaEl.classList.contains('evo-textarea_focused')).toBeFalsy();
    });

    it('should show input placeholder in textarea element placeholder', () => {
        const placeholderText = 'Please type all that you think';
        hostComponent.placeholder = placeholderText;
        fixture.detectChanges();
        expect(textareaEl.placeholder).toBe(placeholderText);
    });

    it('should change component focused param to true when focusing textarea', () => {
        expect(component.focused).toBeFalsy();
        textareaEl.dispatchEvent(new FocusEvent('focus'));
        fixture.detectChanges();
        expect(component.focused).toBeTruthy();
        expect(textareaEl.classList.contains('evo-textarea_focused')).toBeTruthy();
    });

    it('should change component focused param to false when bluring textarea', () => {
        component.onFocus();
        textareaEl.dispatchEvent(new FocusEvent('blur'));
        fixture.detectChanges();
        expect(component.focused).toBeFalsy();
        expect(textareaEl.classList.contains('evo-textarea_focused')).toBeFalsy();
    });

    it('should display error when error exists', () => {
        expect(getElementBySelector(fixture, 'evo-control-error')).toBeFalsy();

        const error = {required: 'Error!'};
        hostComponent.errorsMessages = error;
        hostComponent.control.setErrors(error);
        hostComponent.control.markAsTouched();
        hostComponent.control.markAsDirty();
        fixture.detectChanges();

        expect(component.control.errors).toEqual(error);
        expect(getElementBySelector(fixture, 'evo-control-error')).toBeTruthy();
    });

    it('should has specified height in rows', () => {
        hostComponent.rows = 5;
        fixture.detectChanges();
        expect(component.rows).toEqual(5);
    });

    it('should trim spaces on blur', () => {
        component.value = '  test text  ';
        textareaEl.dispatchEvent(new FocusEvent('blur'));
        fixture.detectChanges();
        expect(component.value).toBe('test text');
    });

    it('should handle null value', () => {
        component.writeValue(null);
        fixture.detectChanges();
        expect(component.value).toBe('');
    });

    it('should apply size class', () => {
        hostComponent.size = 'small' as EvoTextareaSize;
        fixture.detectChanges();
        expect(textareaEl.classList.contains('evo-textarea_size_small')).toBeTruthy();
    });

    it('should emit blur event', () => {
        const spy = spyOn(component.blur, 'emit');
        textareaEl.dispatchEvent(new FocusEvent('blur'));
        fixture.detectChanges();
        expect(spy).toHaveBeenCalled();
    });

    it('should update value through ngModel', () => {
        const testValue = 'test value';
        component.writeValue(testValue);
        fixture.detectChanges();
        expect(component.value).toBe(testValue);
    });

    it('should call onChange when value changes', () => {
        const spy = spyOn(component as any, 'onChange');
        const testValue = 'test value';
        component.value = testValue;
        expect(spy).toHaveBeenCalledWith(testValue);
    });
});
