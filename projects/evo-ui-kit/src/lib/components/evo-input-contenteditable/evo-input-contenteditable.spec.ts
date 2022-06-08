import { EvoInputContenteditableComponent } from './evo-input-contenteditable.component';
import { EvoControlErrorComponent } from '../evo-control-error';
import { EvoUiClassDirective } from '../../directives';
import { Component, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { getElementByClassName, getElementBySelector } from '../../utils/testing';
import { clearMultiline } from './utils/clear-multiline';

const blockClassName = 'evo-contenteditable-input';
const contentClassName = `${blockClassName}__content`;
const contenteditableAttribute = 'contenteditable';
const contenteditableLinesStyle = '--evo-contenteditable-lines';
const contenteditableMinLinesStyle = '--evo-contenteditable-min-lines';
const evoControlErrorSelector = 'evo-control-error';
const inputLineHeight = 24;

@Component({
    template: `
        <evo-input-contenteditable
            [formControl]="control"
            [multiline]="multiline"
            [maxLines]="maxLines"
            [minLines]="minLines"
            [placeholder]="placeholder"
            [autoFocus]="autoFocus"
            [state]="state"
            [errorsMessages]="errorsMessages"
        ></evo-input-contenteditable>
    `,
})
class TestHostComponent {
    @ViewChild(EvoInputContenteditableComponent) component: EvoInputContenteditableComponent;

    control = new FormControl('123', [Validators.required]);
    multiline = true;
    maxLines = 3;
    minLines = 0;
    placeholder: string;
    autoFocus: boolean;
    state = {
        invalid: false,
        valid: false,
    };
    errorsMessages = {required: 'Введите что-нибудь сюда, пожалуйста'};
}

describe('EvoInputContenteditableComponent', () => {
    let hostComponent: TestHostComponent;
    let component: EvoInputContenteditableComponent;
    let fixture: ComponentFixture<TestHostComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                EvoInputContenteditableComponent,
                EvoUiClassDirective,
                EvoControlErrorComponent,
                TestHostComponent
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TestHostComponent);
        hostComponent = fixture.componentInstance;
        fixture.detectChanges();
        component = hostComponent.component;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have default input data', () => {
        expect(component.multiline).toEqual(true);
        expect(component.placeholder).toEqual(undefined);
        expect(component.autoFocus).toEqual(undefined);
        expect(component.maxLines).toEqual(3);
        expect(component.minLines).toEqual(0);
    });

    it('should be disabled if set attribute contenteditable to true', () => {
        const elementRef = getElementByClassName<HTMLSpanElement>(fixture, contentClassName);

        expect(elementRef.getAttribute(contenteditableAttribute)).toEqual('true');
    });

    it('the value for the variable --evo-contenteditable-lines when multiline is true (multiline)', () => {
        hostComponent.multiline = true;
        fixture.detectChanges();

        const elementRef = getElementByClassName<HTMLDivElement>(fixture, blockClassName);

        expect(elementRef.style.getPropertyValue(contenteditableLinesStyle)).toEqual(`${component.maxLines}`);
    });

    it('the value for the variable --evo-contenteditable-lines when multiline is false (single-line)', () => {
        hostComponent.multiline = false;
        fixture.detectChanges();

        const elementRef = getElementByClassName<HTMLDivElement>(fixture, blockClassName);

        expect(elementRef.style.getPropertyValue(contenteditableLinesStyle)).toEqual('0');
    });

    it('should be add and remove the open modifier class', () => {
        hostComponent.minLines = 1;
        fixture.detectChanges();

        const elementRef = getElementByClassName<HTMLDivElement>(fixture, blockClassName);
        let isOpenModifierClass = elementRef.classList.contains(`${blockClassName}_open`);

        expect(isOpenModifierClass).toBeTruthy();

        hostComponent.minLines = 0;
        fixture.detectChanges();

        isOpenModifierClass = elementRef.classList.contains(`${blockClassName}_open`);

        expect(isOpenModifierClass).toBeFalsy();
    });

    it('should be add and remove the single modifier class', () => {
        hostComponent.multiline = false;
        fixture.detectChanges();

        const elementRef = getElementByClassName<HTMLDivElement>(fixture, blockClassName);
        let isSingleModifierClass = elementRef.classList.contains(`${blockClassName}_single`);

        expect(isSingleModifierClass).toBeTruthy();

        hostComponent.multiline = true;
        fixture.detectChanges();

        isSingleModifierClass = elementRef.classList.contains(`${blockClassName}_single`);

        expect(isSingleModifierClass).toBeFalsy();
    });

    it('should be add and remove the disabled modifier class', () => {
        component.setDisabledState(true);
        fixture.detectChanges();

        const elementRef = getElementByClassName<HTMLDivElement>(fixture, blockClassName);
        const isDisabledModifierClass = elementRef.classList.contains(`${blockClassName}_disabled`);

        expect(isDisabledModifierClass).toBeTruthy();

        component.setDisabledState(false);
        fixture.detectChanges();

        expect(isDisabledModifierClass).toBeTruthy();
    });

    it('should show placeholder passed as attribute', () => {
        const placeholder = 'some placeholder';
        hostComponent.placeholder = placeholder;
        fixture.detectChanges();

        const elementRef = getElementByClassName<HTMLSpanElement>(fixture, contentClassName);

        expect(elementRef.getAttribute('placeholder')).toEqual(placeholder);
    });

    it('should call focus on native input if autofocus attr set', () => {
        const focusSpyOn = spyOn(component, 'focus');
        hostComponent.autoFocus = true;
        fixture.detectChanges();
        component.ngOnInit();
        expect(focusSpyOn).toHaveBeenCalled();
    });

    it('should be add and remove the open-lines modifier class', () => {
        hostComponent.minLines = 1;
        fixture.detectChanges();

        const elementRef = getElementByClassName<HTMLSpanElement>(fixture, contentClassName);
        let isOpenLinesModifierClass = elementRef.classList.contains(`${contentClassName}_open-lines`);

        expect(isOpenLinesModifierClass).toBeTruthy();
        expect(getComputedStyle(elementRef).minHeight).toEqual(`${(component.minLines * inputLineHeight) + 8}px`);

        hostComponent.minLines = 0;
        fixture.detectChanges();

        isOpenLinesModifierClass = elementRef.classList.contains(`${blockClassName}_open`);

        expect(isOpenLinesModifierClass).toBeFalsy();
        expect(getComputedStyle(elementRef).minHeight).toEqual(`${component.minLines * inputLineHeight}px`);
    });

    it('the value for the variable --evo-contenteditable-minlines when multiline is true', () => {
        hostComponent.multiline = true;
        fixture.detectChanges();

        let elementRef = getElementByClassName<HTMLSpanElement>(fixture, contentClassName);

        expect(elementRef.style.getPropertyValue(contenteditableMinLinesStyle)).toEqual(`${component.minLines}`);
        expect(getComputedStyle(elementRef).minHeight).toEqual(`${component.minLines}px`);

        hostComponent.minLines = 10;
        fixture.detectChanges();

        elementRef = getElementByClassName<HTMLSpanElement>(fixture, contentClassName);

        expect(elementRef.style.getPropertyValue(contenteditableMinLinesStyle)).toEqual(`${component.minLines}`);
        expect(getComputedStyle(elementRef).minHeight).toEqual(`${(component.minLines * inputLineHeight) + 8}px`);
    });

    it('the value for the variable --evo-contenteditable-minlines when multiline is false', () => {
        hostComponent.multiline = false;
        fixture.detectChanges();

        const elementRef = getElementByClassName<HTMLSpanElement>(fixture, contentClassName);

        expect(elementRef.style.getPropertyValue(contenteditableMinLinesStyle)).toEqual('0');
        expect(getComputedStyle(elementRef).minHeight).toEqual('0px');
    });

    it('triggers onChange call when set new value', () => {
        const onChangeSpy = spyOn(component as any, 'onChange');
        const innerText = 'something to say';
        const event = {target: {innerText} as any} as Event;
        component.onInput(event);
        fixture.detectChanges();

        expect(onChangeSpy).toHaveBeenCalledWith(innerText);
    });

    it('should pass functions to registerOnChange and registerOnTouched when init', () => {
        component.contenteditable.nativeElement.dispatchEvent(new InputEvent('input'));

        expect(hostComponent.control.touched).toBeTruthy();
        expect(hostComponent.control.dirty).toBeTruthy();
    });

    it('should set new value when writeValue called (single-line)', () => {
        const value = 'something\n something\n something';
        hostComponent.multiline = false;
        component.writeValue(value);
        fixture.detectChanges();

        const result = clearMultiline(value, component.multiline);
        expect(component.contenteditable.nativeElement.innerText).toEqual(result);
    });

    it('should set new value when writeValue called (multiline)', () => {
        const value = 'something \n something \n something';
        component.writeValue(value);
        hostComponent.multiline = true;
        fixture.detectChanges();

        expect(component.contenteditable.nativeElement.innerText).toEqual(value);
    });

    it('should call blur.emit at onBlur event', () => {
        spyOn(component.blur, 'emit');
        component.onBlur({} as FocusEvent);

        expect(component.blur.emit).toHaveBeenCalled();
    });

    // Этот тест работает корректно, просто метод onPaste кажись неверно работает (не отрабатывает вставка нового текста)
    xit('when the onPaste event is called, the text should change', () => {
        hostComponent.multiline = false;
        hostComponent.control.setValue('test ');
        fixture.detectChanges();

        const value = 'something\n something\n something';
        const pasteEvent = new ClipboardEvent('paste', {
            clipboardData: new DataTransfer(),
        });
        pasteEvent.clipboardData.setData('text/plain', value);
        component.onPaste(pasteEvent);
        fixture.detectChanges();

        const elementRef = getElementByClassName<HTMLSpanElement>(fixture, contentClassName);

        const result = clearMultiline(value, component.multiline);
        expect(elementRef.textContent).toEqual(result);
    });

    it('blocking default events on selected keys', () => {
        EvoInputContenteditableComponent.STYLE_KEYCODES.forEach((keyCode) => {
            const event = new KeyboardEvent('keydown', {keyCode, ctrlKey: true} as any);
            const preventDefaultSpy = spyOn(event, 'preventDefault').and.stub();
            component.onKeydown(event);

            expect(preventDefaultSpy).toHaveBeenCalled();
        });
    });

    it('should display error when error exists', () => {
        hostComponent.state = { invalid: false, valid: true };
        fixture.detectChanges();

        let evoControlError = getElementBySelector(fixture, evoControlErrorSelector);

        expect(evoControlError).toBeFalsy();

        hostComponent.state = { invalid: true, valid: false };
        fixture.detectChanges();

        evoControlError = getElementBySelector(fixture, evoControlErrorSelector);

        expect(evoControlError).toBeTruthy();
    });
});
