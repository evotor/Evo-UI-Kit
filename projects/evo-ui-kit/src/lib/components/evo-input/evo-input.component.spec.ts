import { EvoInputComponent, EvoInputSizes, } from './index';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { EvoUiClassDirective } from '../../directives';
import { EvoControlErrorComponent } from '../evo-control-error';
import * as IMask from 'imask';
import { COMPOSITION_BUFFER_MODE } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';
import { createHostFactory } from '@ngneat/spectator';

@Component({
    selector: 'evo-input-wrapper',
    template: '',
})
class EvoInputWrapperComponent {
    @ViewChild(EvoInputComponent) evoInputComponent: EvoInputComponent;

    templateVars: any = {};
}

const createHost = createHostFactory({
    component: EvoInputComponent,
    declarations: [
        EvoInputComponent,
    ],
    host: EvoInputWrapperComponent,
});

describe('EvoInputComponent', () => {
    let component: EvoInputComponent;
    let fixture: ComponentFixture<EvoInputComponent>;
    let inputEl: HTMLElement;
    const mask = {
        mask: '+{7} (000) 000-00-00',
    };
    const maskedNumber = '+7 (999) 999-99-99';
    const unmaskedNumber = '9999999999';
    const createMask = (maskOpts = mask) => {
        component.mask = maskOpts;
        component['createMaskInstance'](maskOpts);
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                EvoInputComponent,
                EvoUiClassDirective,
                EvoControlErrorComponent,
            ],
            providers: [{
                provide: COMPOSITION_BUFFER_MODE,
                useValue: true,
            }]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EvoInputComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        inputEl = fixture.nativeElement.querySelector('.evo-input');
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should pass functions to registerOnChange and registerOnTouched when init', () => {
        expect(component.onChange).toBeDefined();
        expect(component.onTouched).toBeDefined();
        expect(typeof component.onChange === 'function').toBeTruthy();
        expect(typeof component.onTouched === 'function').toBeTruthy();
    });

    it('should be disabled if set disabled attribute to true', fakeAsync(() => {
        expect(inputEl.classList.contains('evo-input_disabled')).toBeFalsy();
        expect(component.disabled).toBeFalsy();
        component.disabled = true;
        fixture.detectChanges();
        tick();
        expect(component.disabled).toBeTruthy();
        expect(component.isDisabled).toBeTruthy();
        expect(inputEl.classList.contains('evo-input_disabled')).toBeTruthy();
        expect(fixture.nativeElement.querySelector('.evo-input input').disabled).toBeTruthy();
    }));

    it('should show placeholder passed as attribute', () => {
        const placeholder = 'some placeholder';
        component.placeholder = placeholder;
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('.evo-input input').placeholder).toEqual(placeholder);
    });

    it('should has icon it passed as attribute', () => {
        component.icon = 'some src';
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('.evo-input .evo-input__additional .evo-input__icon')).toBeTruthy();
    });

    it('should has tooltip when it passed as attribute', () => {
        component.tooltip = 'some tooltip';
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('.evo-input .evo-input__additional .evo-input__tooltip')).toBeTruthy();
    });

    it('should show tooltip container when mouseenter event', fakeAsync(() => {
        const tooltip = 'some tooltip';
        component.tooltip = tooltip;
        fixture.detectChanges();
        fixture.nativeElement.querySelector('.evo-input .evo-input__additional .evo-input__tooltip').dispatchEvent(new MouseEvent('mouseenter'));

        expect(component.uiStates.isTooltipVisible).toBeTruthy();
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('.evo-input .evo-input__tooltip-container')).toBeTruthy();
        expect(fixture.nativeElement.querySelector('.evo-input .evo-input__tooltip-container').textContent.trim()).toEqual(tooltip);
    }));

    it('should set default size (EvoInputSizes.normal) if size param is not set', () => {
        expect(component.size === EvoInputSizes.normal).toBeTruthy();
    });

    it('should omit CSS size modifier if size is set to default', () => {
        component.size = EvoInputSizes.normal;
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('.evo-input').classList.contains('evo-input_size-normal')).toBeFalsy();
    });

    it('should have CSS size modifier if size is custom', () => {
        component.size = EvoInputSizes.small;
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('.evo-input').classList.contains('evo-input_size-small')).toBeTruthy();
    });

    it('should set correct input type', () => {
        const type = 'number';
        component.type = type;
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('.evo-input input').type).toEqual(type);
    });

    it('should show passed prefix', () => {
        const prefix = 'prefix';
        component.prefix = prefix;
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('.evo-input .evo-input__prefix')).toBeTruthy();
        expect(fixture.nativeElement.querySelector('.evo-input .evo-input__prefix').textContent).toEqual(prefix);
    });

    it('should set autocomplete to input input element when it passed', () => {
        const autocomplete = 'on';
        component.autocomplete = autocomplete;
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('.evo-input input').autocomplete).toEqual(autocomplete);
    });

    it('triggers onChange call when set new value', () => {
        spyOn(component, 'onChange');
        const text = 'something to say';
        component.value = text;
        fixture.detectChanges();
        expect(component.onChange).toHaveBeenCalledWith(text);
    });

    it('should show loading state when passing loading attribute', () => {
        expect(fixture.nativeElement.querySelector('.evo-input .evo-input__loading-spinner')).toBeFalsy();
        component.loading = true;
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('.evo-input .evo-input__loading-spinner')).toBeTruthy();
    });

    it('should set isDisabled state when passing loading attribute', fakeAsync(() => {
        expect(component.isDisabled).toBeFalsy();
        component.loading = true;
        fixture.detectChanges();
        tick();
        expect(component.isDisabled).toBeTruthy();
        expect(inputEl.classList.contains('evo-input_disabled')).toBeTruthy();
        expect(fixture.nativeElement.querySelector('.evo-input input').disabled).toBeTruthy();
    }));

    it('should not hide additional elements when passing loading attribute', () => {
        component.tooltip = 'some tooltip';
        component.loading = true;
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('.evo-input .evo-input__additional .evo-input__tooltip')).toBeTruthy();
        expect(fixture.nativeElement.querySelector('.evo-input .evo-input__loading-spinner')).toBeTruthy();
    });

    it('should set value without prefix', () => {
        component.prefix = 'PRE-';
        const val = 'dator';
        component.value = `${ component.prefix }${ val }`;
        fixture.detectChanges();
        expect(component.value).toEqual(val);
        expect(component['_value']).toEqual(val);
    });

    it('should call onChange when set value', () => {
        spyOn(component, 'onChange');
        component.value = 'something';
        expect(component.onChange).toHaveBeenCalledWith(component.value);
    });

    it('should call onChange with prefix+value', () => {
        spyOn(component, 'onChange');
        component.prefix = 'PRE-';
        const val = 'dator';
        component.value = `${ component.prefix }${ val }`;
        expect(component.onChange).toHaveBeenCalledWith(`${ component.prefix }${ val }`);
    });

    it('should call focus on native input if autofocus attr set', () => {
        spyOn(component.inputElement.nativeElement, 'focus');
        component.autoFocus = true;
        component.ngAfterViewInit();
        expect(component.inputElement.nativeElement.focus).toHaveBeenCalled();
    });

    it('should set new value when writeValue called', () => {
        const val = 'something';
        component.writeValue(val);
        expect(component._value).toEqual(val);
        expect(component.value).toEqual(val);
    });

    it('should not rewrite value when it is the same', () => {
        const sameVal = 'something';
        component.value = sameVal;
        spyOn(component, 'onChange');
        component.writeValue(sameVal);
        expect(component.onChange).not.toHaveBeenCalled();
    });

    it('should set disable prop to true when call setDisabledState', () => {
        expect(component.disabled).toBeFalsy();
        component.setDisabledState(true);
        expect(component.disabled).toBeTruthy();
    });

    it('should set uiStates.isFocused to true when call onFocus', () => {
        expect(component.uiStates.isFocused).toBeFalsy();
        component.onFocus();
        expect(component.uiStates.isFocused).toBeTruthy();
    });

    it('should set uiStates.isFocused to false when call onBlur', () => {
        component.onFocus();
        expect(component.uiStates.isFocused).toBeTruthy();
        component.onBlur();
        expect(component.uiStates.isFocused).toBeFalsy();
    });

    it('should set call onTouched and blur.emit when call onBlur', () => {
        spyOn(component, 'onTouched');
        spyOn(component.blur, 'emit');
        component.onFocus();
        component.onBlur();
        expect(component.onTouched).toHaveBeenCalled();
        expect(component.blur.emit).toHaveBeenCalled();
    });

    it('should call onTooltipClick when click to tooltip', () => {
        component.tooltip = 'some tooltip';
        fixture.detectChanges();

        spyOn(component, 'onTooltipClick');
        const event = new MouseEvent('click');
        fixture.nativeElement.querySelector('.evo-input .evo-input__additional .evo-input__tooltip').dispatchEvent(event);
        expect(component.onTooltipClick).toHaveBeenCalled();
    });

    it('should call hideTooltip when mouseleave event triggered', () => {
        component.tooltip = 'some tooltip';
        fixture.detectChanges();

        spyOn(component, 'hideTooltip');
        fixture.nativeElement.querySelector('.evo-input .evo-input__additional .evo-input__tooltip').dispatchEvent(new MouseEvent('mouseenter'));
        fixture.nativeElement.querySelector('.evo-input .evo-input__additional .evo-input__tooltip').dispatchEvent(new MouseEvent('mouseleave'));
        expect(component.hideTooltip).toHaveBeenCalled();
    });

    it('should set isTooltipVisible to false after mouseleave', fakeAsync(() => {
        component.tooltip = 'some tooltip';
        fixture.detectChanges();

        fixture.nativeElement.querySelector('.evo-input .evo-input__additional .evo-input__tooltip').dispatchEvent(new MouseEvent('mouseenter'));
        fixture.nativeElement.querySelector('.evo-input .evo-input__additional .evo-input__tooltip').dispatchEvent(new MouseEvent('mouseleave'));
        expect(component.uiStates.isTooltipVisible).toBeTruthy();
        tick(25);
        expect(component.uiStates.isTooltipVisible).toBeFalsy();
    }));

    it('should call onChange when tooltip is passed', () => {
        spyOn(component, 'onChange');
        component.tooltip = 'some tooltip';
        fixture.detectChanges();

        component.ngAfterViewInit();
        expect(component.onChange).not.toHaveBeenCalled();
    });

    it('should create mask if is passed', () => {
        spyOn(component as any, 'createMaskInstance');
        component.ngOnChanges({
            mask: {
                previousValue: null,
                currentValue: mask,
                firstChange: false,
                isFirstChange: () => false,
            }
        });
        expect(component['createMaskInstance'])
            .toHaveBeenCalledWith(mask);
    });

    it('should update mask if new passed', () => {
        createMask();
        expect(component['iMask'] instanceof IMask.InputMask).toBeTruthy();
        component.writeValue('9999999999');
        expect(
            fixture.nativeElement.querySelector('.evo-input__field').value
        ).toEqual(maskedNumber);

        const newMask = {mask: '{8} (000) 000-00-00'};
        component.mask = newMask;
        component.ngOnChanges({
            mask: {
                previousValue: null,
                currentValue: newMask,
                firstChange: false,
                isFirstChange: () => false,
            }
        });
        expect(
            fixture.nativeElement.querySelector('.evo-input__field').value
        ).toEqual('8 (799) 999-99-99');
    });

    it('should unsubscribe from input event on component destroy', () => {
        createMask();
        component.ngOnDestroy();
        expect(component['iMask']).toEqual(null);
        expect(component['destroy$'].isStopped).toEqual(true);
    });

    it('should handle composition events', () => {
        const newValue = 'new value';
        component._compositionStart();
        expect(component['_composing']).toBeTruthy();
        component._compositionEnd(newValue);
        expect(component.value).toEqual(newValue);
    });

    it('should set value from InputEvent', fakeAsync(() => {
        createMask();
        const inputElField = fixture.nativeElement.querySelector('.evo-input__field');
        inputElField.value = unmaskedNumber;
        inputElField.dispatchEvent(new InputEvent('input'));
        expect(component.value).toBeFalsy();
        tick(300);
        expect(component.value).toEqual(maskedNumber);
    }));

    it('should destroy mask if falsy value passed', () => {
        createMask();
        const imaskInstance = component['iMask'] as IMask.InputMask<any>;
        spyOn(imaskInstance, 'destroy');
        component.ngOnChanges({
            mask: {
                previousValue: null,
                currentValue: null,
                firstChange: false,
                isFirstChange: () => false,
            }
        });
        expect(component['iMask']).toEqual(null);
        expect(imaskInstance.destroy).toHaveBeenCalled();

        spyOn(component, 'writeToElement');
        component.maskValue = unmaskedNumber;
        expect(component.maskValue).toEqual(component.inputElement.nativeElement.value);
        expect(component.writeToElement).toHaveBeenCalled();
    });

    it('should set unmasked value to control if unmask = true', () => {
        createMask();
        component.unmask = true;
        fixture.detectChanges();
        component.writeValue(unmaskedNumber);
        expect(
            fixture.nativeElement.querySelector('.evo-input__field').value
        ).toEqual(maskedNumber);
        expect(component['iMask'].unmaskedValue).toEqual('7' + unmaskedNumber);
        expect(component.maskValue).toEqual('7' + unmaskedNumber);
    });
});

describe('EvoInputComponent: under test host', () => {

    let wrapperComponent: EvoInputWrapperComponent;
    let fixture: ComponentFixture<EvoInputWrapperComponent>;
    let component: EvoInputComponent;

    const createTestHost = function (template?: string) {
        const host = createHost(template || `<evo-input></evo-input>`);
        wrapperComponent = host.hostComponent;
        fixture = host.hostFixture;
        component = wrapperComponent.evoInputComponent;
    };

    it('should create', () => {
        createTestHost(`<evo-input></evo-input>`);
        expect(component).toBeTruthy();
    });

    it('should ignore invalid string size param', () => {
        createTestHost(`<evo-input size="{{ templateVars?.size }}"></evo-input>`);
        wrapperComponent.templateVars = {
            size: 'invalid',
        };
        fixture.detectChanges();
        expect(component.size === EvoInputSizes.normal).toBeTruthy();
    });

    it('should set valid string size param', () => {
        createTestHost(`<evo-input size="{{ templateVars?.size }}"></evo-input>`);
        wrapperComponent.templateVars = {
            size: `${ EvoInputSizes.small }`,
        };
        fixture.detectChanges();
        expect(component.size === EvoInputSizes.small).toBeTruthy();
    });

    it('should set valid enum size param', () => {
        createTestHost(`<evo-input [size]="templateVars?.size"></evo-input>`);
        wrapperComponent.templateVars = {
            size: EvoInputSizes.small,
        };
        fixture.detectChanges();
        expect(component.size === EvoInputSizes.small).toBeTruthy();
    });
});
