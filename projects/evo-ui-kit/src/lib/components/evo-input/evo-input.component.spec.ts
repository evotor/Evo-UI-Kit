import {EvoInputComponent, EvoInputSizes, EvoInputTheme} from './index';
import {ComponentFixture, fakeAsync, TestBed, tick, waitForAsync} from '@angular/core/testing';
import {EvoUiClassDirective} from '../../directives';
import {EvoControlErrorComponent} from '../evo-control-error';
import * as IMask from 'imask';
import {COMPOSITION_BUFFER_MODE, UntypedFormControl} from '@angular/forms';
import {Component, NgZone, SimpleChange, ViewChild} from '@angular/core';
import {createHostFactory} from '@ngneat/spectator';

@Component({
    selector: 'evo-input-wrapper',
    template: '',
})
class EvoInputWrapperComponent {
    @ViewChild(EvoInputComponent) evoInputComponent: EvoInputComponent;

    // eslint-disable-next-line
    templateVars: any = {};
    control = new UntypedFormControl();
}

const createHost = createHostFactory({
    component: EvoInputComponent,
    imports: [EvoInputComponent],
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
    const createMask = (maskOpts: {mask: string | NumberConstructor; lazy?: boolean} = mask) => {
        component.mask = maskOpts;
        component['createMaskInstance'](maskOpts);
    };

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [EvoInputComponent, EvoUiClassDirective, EvoControlErrorComponent],
            providers: [
                {
                    provide: COMPOSITION_BUFFER_MODE,
                    useValue: true,
                },
            ],
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
        expect(
            fixture.nativeElement.querySelector('.evo-input .evo-input__additional .evo-input__tooltip'),
        ).toBeTruthy();
    });

    it('should show tooltip container when mouseenter event', fakeAsync(() => {
        const tooltip = 'some tooltip';
        component.tooltip = tooltip;
        fixture.detectChanges();
        fixture.nativeElement
            .querySelector('.evo-input .evo-input__additional .evo-input__tooltip')
            .dispatchEvent(new MouseEvent('mouseenter'));

        expect(component.uiStates.isTooltipVisible).toBeTruthy();
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('.evo-input .evo-input__tooltip-container')).toBeTruthy();
        expect(
            fixture.nativeElement.querySelector('.evo-input .evo-input__tooltip-container').textContent.trim(),
        ).toEqual(tooltip);
    }));

    it('should set default size (EvoInputSizes.normal) if size param is not set', () => {
        expect(component.size === EvoInputSizes.normal).toBeTruthy();
    });

    it('should omit CSS size modifier if size is set to default', () => {
        component.size = EvoInputSizes.normal;
        fixture.detectChanges();
        expect(
            fixture.nativeElement.querySelector('.evo-input').classList.contains('evo-input_size-normal'),
        ).toBeFalsy();
    });

    it('should have CSS size modifier if size is custom', () => {
        component.size = EvoInputSizes.small;
        fixture.detectChanges();
        expect(
            fixture.nativeElement.querySelector('.evo-input').classList.contains('evo-input_size-small'),
        ).toBeTruthy();
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
        expect(fixture.nativeElement.querySelector('.evo-input .evo-input__prefix').textContent.trim()).toEqual(prefix);
    });

    it('should set autocomplete to input input element when it passed', () => {
        const autocomplete = 'on';
        component.autocomplete = autocomplete;
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('.evo-input input').autocomplete).toEqual(autocomplete);
    });

    it('should set maxlength on the native input', () => {
        component.maxLength = 10;
        fixture.detectChanges();

        expect(fixture.nativeElement.querySelector('.evo-input input').getAttribute('maxlength')).toBe('10');
    });

    it('should not set maxlength when a mask is used', (): void => {
        component.maxLength = 10;
        createMask();
        fixture.detectChanges();

        expect(fixture.nativeElement.querySelector('.evo-input input').getAttribute('maxlength')).toBeNull();
    });

    it('should hide control errors if errorsVisible is false', () => {
        component.control = new UntypedFormControl('');
        component.control.setErrors({required: true});
        component.control.markAsDirty();
        component.control.markAsTouched();
        fixture.detectChanges();

        expect(fixture.nativeElement.querySelector('evo-control-error')).toBeTruthy();

        fixture.componentRef.setInput('errorsVisible', false);
        fixture.detectChanges();

        expect(fixture.nativeElement.querySelector('evo-control-error')).toBeFalsy();
    });

    it('triggers onChange call when set new value', () => {
        spyOn(component, 'onChange');
        const text = 'something to say';
        component.onInputChange(text);
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

    it('should hide additional elements when passing loading attribute', () => {
        component.tooltip = 'some tooltip';
        component.clearable = true;
        component.writeValue('some value');
        component.loading = true;
        fixture.detectChanges();
        expect(
            fixture.nativeElement.querySelector('.evo-input .evo-input__additional .evo-input__tooltip'),
        ).toBeFalsy();
        expect(
            fixture.nativeElement.querySelector('.evo-input .evo-input__clearable .evo-input__icon-clear'),
        ).toBeFalsy();
        expect(fixture.nativeElement.querySelector('.evo-input .evo-input__loading-spinner')).toBeTruthy();
    });

    it('should set value without prefix', () => {
        component.prefix = 'PRE-';
        const val = 'dator';
        component.value = `${component.prefix}${val}`;
        fixture.detectChanges();
        expect(component.value).toEqual(val);
        expect(component['_value']).toEqual(val);
    });

    it('should call onChange when set value', () => {
        spyOn(component, 'onChange');
        component.onInputChange('something');
        expect(component.onChange).toHaveBeenCalledWith(component.value);
    });

    it('should call onChange with prefix+value', () => {
        spyOn(component, 'onChange');
        component.prefix = 'PRE-';
        const val = 'dator';
        component.onInputChange(`${component.prefix}${val}`);
        expect(component.onChange).toHaveBeenCalledWith(`${component.prefix}${val}`);
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
        component.onInputFocus(new Event('focus'));
        expect(component.uiStates.isFocused).toBeTruthy();
    });

    it('should set uiStates.isFocused to false when call onBlur', () => {
        component.onInputFocus(new Event('focus'));
        expect(component.uiStates.isFocused).toBeTruthy();
        component.onInputBlur(new Event('blur'));
        expect(component.uiStates.isFocused).toBeFalsy();
    });

    it('should set call onTouched and blur.emit when call onBlur', () => {
        spyOn(component, 'onTouched');
        spyOn(component.blur, 'emit');
        component.onInputFocus(new Event('focus'));
        component.onInputBlur(new Event('blur'));
        expect(component.onTouched).toHaveBeenCalled();
        expect(component.blur.emit).toHaveBeenCalled();
    });

    it('should call onTooltipClick when click to tooltip', () => {
        component.tooltip = 'some tooltip';
        fixture.detectChanges();

        spyOn(component, 'onTooltipClick');
        const event = new MouseEvent('click');
        fixture.nativeElement
            .querySelector('.evo-input .evo-input__additional .evo-input__tooltip')
            .dispatchEvent(event);
        expect(component.onTooltipClick).toHaveBeenCalled();
    });

    it('should call hideTooltip when mouseleave event triggered', () => {
        component.tooltip = 'some tooltip';
        fixture.detectChanges();

        spyOn(component, 'hideTooltip');
        fixture.nativeElement
            .querySelector('.evo-input .evo-input__additional .evo-input__tooltip')
            .dispatchEvent(new MouseEvent('mouseenter'));
        fixture.nativeElement
            .querySelector('.evo-input .evo-input__additional .evo-input__tooltip')
            .dispatchEvent(new MouseEvent('mouseleave'));
        expect(component.hideTooltip).toHaveBeenCalled();
    });

    it('should set isTooltipVisible to false after mouseleave', fakeAsync(() => {
        component.tooltip = 'some tooltip';
        fixture.detectChanges();

        fixture.nativeElement
            .querySelector('.evo-input .evo-input__additional .evo-input__tooltip')
            .dispatchEvent(new MouseEvent('mouseenter'));
        fixture.nativeElement
            .querySelector('.evo-input .evo-input__additional .evo-input__tooltip')
            .dispatchEvent(new MouseEvent('mouseleave'));
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
        // eslint-disable-next-line
        spyOn(component as any, 'createMaskInstance');
        component.ngOnChanges({
            mask: {
                previousValue: null,
                currentValue: mask,
                firstChange: false,
                isFirstChange: () => false,
            },
        });
        expect(component['createMaskInstance']).toHaveBeenCalledWith(mask);
    });

    it('should update mask if new passed', () => {
        createMask();
        expect(component['iMask'] instanceof IMask.InputMask).toBeTruthy();
        component.writeValue('9999999999');
        expect(fixture.nativeElement.querySelector('.evo-input__field').value).toEqual(maskedNumber);

        const newMask = {mask: '{8} (000) 000-00-00'};
        component.mask = newMask;
        component.ngOnChanges({
            mask: {
                previousValue: null,
                currentValue: newMask,
                firstChange: false,
                isFirstChange: () => false,
            },
        });
        expect(fixture.nativeElement.querySelector('.evo-input__field').value).toEqual('8 (999) 999-99-99');
    });

    it('should update clearable state when a mask is added dynamically', fakeAsync((): void => {
        const nativeInput = component.inputElement.nativeElement as HTMLInputElement;
        const dynamicMask = {mask: '000'};
        component.clearable = true;
        component.mask = dynamicMask;
        component.ngOnChanges({mask: new SimpleChange(null, dynamicMask, false)});
        fixture.detectChanges();

        nativeInput.value = '1';
        nativeInput.dispatchEvent(new InputEvent('input'));

        expect(component.isClearable).toBeTrue();
        expect(fixture.nativeElement.querySelector('.evo-input__clearable')).toBeTruthy();

        nativeInput.value = '';
        nativeInput.dispatchEvent(new InputEvent('input'));

        expect(component.isClearable).toBeFalse();
        expect(fixture.nativeElement.querySelector('.evo-input__clearable')).toBeFalsy();

        tick(component.inputDebounce);
    }));

    it('should update clearable state when new mask options clear the visible value', (): void => {
        const nativeInput = component.inputElement.nativeElement as HTMLInputElement;
        const digitsMask = {mask: '000'};
        const lettersMask = {mask: 'aaa'};
        component.clearable = true;
        component.mask = digitsMask;
        component.ngOnChanges({mask: new SimpleChange(null, digitsMask, false)});
        component.writeValue('1');
        fixture.detectChanges();

        expect(nativeInput.value).toBe('1');
        expect(component.isClearable).toBeTrue();

        component.mask = lettersMask;
        component.ngOnChanges({mask: new SimpleChange(digitsMask, lettersMask, false)});
        fixture.detectChanges();

        expect(nativeInput.value).toBe('');
        expect(component.isClearable).toBeFalse();
        expect(fixture.nativeElement.querySelector('.evo-input__clearable')).toBeFalsy();
    });

    it('should update clearable state after masked undo and redo', fakeAsync((): void => {
        const nativeInput = component.inputElement.nativeElement as HTMLInputElement;
        component.clearable = true;
        createMask({mask: '000'});
        fixture.detectChanges();

        nativeInput.value = '1';
        nativeInput.dispatchEvent(new InputEvent('input'));

        expect(component.isClearable).toBeTrue();
        expect(fixture.nativeElement.querySelector('.evo-input__clearable')).toBeTruthy();

        nativeInput.dispatchEvent(new InputEvent('beforeinput', {inputType: 'historyUndo', cancelable: true}));

        expect(nativeInput.value).toBe('');
        expect(component.isClearable).toBeFalse();
        expect(fixture.nativeElement.querySelector('.evo-input__clearable')).toBeFalsy();

        nativeInput.dispatchEvent(new InputEvent('beforeinput', {inputType: 'historyRedo', cancelable: true}));

        expect(nativeInput.value).toBe('1');
        expect(component.isClearable).toBeTrue();
        expect(fixture.nativeElement.querySelector('.evo-input__clearable')).toBeTruthy();

        tick(component.inputDebounce);
    }));

    it('should unsubscribe from input event on component destroy', () => {
        createMask();
        const imaskInstance = component['iMask'];
        const offSpy = spyOn(imaskInstance, 'off').and.callThrough();
        component.ngOnDestroy();

        expect(component['iMask']).toEqual(null);
        expect(component['destroy$'].isStopped).toEqual(true);
        expect(offSpy).toHaveBeenCalledOnceWith('accept', component['onMaskAccept']);
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
        // eslint-disable-next-line
        const imaskInstance = component['iMask'] as IMask.InputMask<any>;
        spyOn(imaskInstance, 'destroy');
        component.ngOnChanges({
            mask: {
                previousValue: null,
                currentValue: null,
                firstChange: false,
                isFirstChange: () => false,
            },
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
        expect(fixture.nativeElement.querySelector('.evo-input__field').value).toEqual(maskedNumber);
        expect(component['iMask'].unmaskedValue).toEqual('7' + unmaskedNumber);
        expect(component.maskValue).toEqual('7' + unmaskedNumber);
    });

    it('should be default if theme param is not provided', () => {
        expect(
            fixture.nativeElement.querySelector('.evo-input').classList.contains('evo-input_theme-rounded'),
        ).toBeFalsy();
    });

    it('should be default if theme param is not set', () => {
        expect(component.theme).toEqual(EvoInputTheme.default);
        expect(
            fixture.nativeElement.querySelector('.evo-input').classList.contains('evo-input_theme-rounded'),
        ).toBeFalsy();
    });

    it('should be default if theme param is default', () => {
        component.setTheme = EvoInputTheme.default;
        fixture.detectChanges();
        expect(component.theme).toEqual(EvoInputTheme.default);
        expect(
            fixture.nativeElement.querySelector('.evo-input').classList.contains('evo-input_theme-rounded'),
        ).toBeFalsy();
    });

    it('should be default if theme param is incorrect', () => {
        component.setTheme = 'incorrect' as EvoInputTheme;
        fixture.detectChanges();
        expect(component.theme).toEqual(EvoInputTheme.default);
        expect(
            fixture.nativeElement.querySelector('.evo-input').classList.contains('evo-input_theme-rounded'),
        ).toBeFalsy();
        expect(
            fixture.nativeElement.querySelector('.evo-input').classList.contains('evo-input_theme-incorrect'),
        ).toBeFalsy();
    });

    it('should be rounded if theme param is rounded', () => {
        component.setTheme = EvoInputTheme.rounded;
        fixture.detectChanges();
        expect(component.theme).toEqual(EvoInputTheme.rounded);
        expect(
            fixture.nativeElement.querySelector('.evo-input').classList.contains('evo-input_theme-rounded'),
        ).toBeTruthy();
    });

    it('should not be clearable if clearable param is not provided', () => {
        expect(fixture.nativeElement.querySelector('.evo-input .evo-input__clearable')).toBeFalsy();
    });

    it('should not be clearable if clearable param is false', () => {
        component.clearable = false;
        fixture.detectChanges();
        expect(component.isClearable).toBeFalsy();
        expect(fixture.nativeElement.querySelector('.evo-input .evo-input__clearable')).toBeFalsy();
    });

    it('should be clearable only if clearable param is true and the field has a value', fakeAsync(() => {
        const nativeInput = component.inputElement.nativeElement as HTMLInputElement;
        const onChangeSpy = spyOn(component, 'onChange');
        component.clearable = true;
        fixture.detectChanges();

        expect(component.isClearable).toBeFalsy();
        expect(fixture.nativeElement.querySelector('.evo-input .evo-input__clearable')).toBeFalsy();

        nativeInput.value = 'some value';
        nativeInput.dispatchEvent(new InputEvent('input'));

        expect(component.isClearable).toBeTruthy();
        expect(fixture.nativeElement.querySelector('.evo-input .evo-input__clearable')).toBeTruthy();
        expect(fixture.nativeElement.querySelector('.evo-input__icon-clear').getAttribute('shape')).toBe('close');
        expect(onChangeSpy).not.toHaveBeenCalled();

        tick(component.inputDebounce);

        expect(onChangeSpy).toHaveBeenCalledOnceWith('some value');

        nativeInput.value = '';
        nativeInput.dispatchEvent(new InputEvent('input'));

        expect(component.isClearable).toBeFalsy();
        expect(fixture.nativeElement.querySelector('.evo-input .evo-input__clearable')).toBeFalsy();
        expect(onChangeSpy).toHaveBeenCalledTimes(1);

        tick(component.inputDebounce);

        expect(onChangeSpy).toHaveBeenCalledWith('');
    }));

    it('should detect changes only when visible value transitions between empty and non-empty', fakeAsync((): void => {
        const nativeInput = component.inputElement.nativeElement as HTMLInputElement;
        const detectChangesSpy = spyOn(component['changeDetector'], 'detectChanges');

        nativeInput.value = 'a';
        nativeInput.dispatchEvent(new InputEvent('input'));

        expect(detectChangesSpy).toHaveBeenCalledTimes(1);

        nativeInput.value = 'ab';
        nativeInput.dispatchEvent(new InputEvent('input'));

        expect(detectChangesSpy).toHaveBeenCalledTimes(1);

        nativeInput.value = '';
        nativeInput.dispatchEvent(new InputEvent('input'));

        expect(detectChangesSpy).toHaveBeenCalledTimes(2);

        tick(component.inputDebounce);
    }));

    it('should be clearable when the displayed value is zero', () => {
        const nativeInput = component.inputElement.nativeElement as HTMLInputElement;
        component.clearable = true;
        component.writeValue(0);
        fixture.detectChanges();

        expect(nativeInput.value).toBe('0');
        expect(component.isClearable).toBeTruthy();
        expect(fixture.nativeElement.querySelector('.evo-input .evo-input__clearable')).toBeTruthy();
    });

    it('should not be clearable when a typed number mask is visually empty', () => {
        const nativeInput = component.inputElement.nativeElement as HTMLInputElement;
        component.clearable = true;
        component.unmask = 'typed';
        createMask({mask: Number});
        fixture.detectChanges();

        expect(component.maskValue).toBe(0);
        expect(nativeInput.value).toBe('');
        expect(component.isClearable).toBeFalsy();
        expect(fixture.nativeElement.querySelector('.evo-input .evo-input__clearable')).toBeFalsy();
    });

    it('should ignore mask placeholders when checking if the input is clearable', () => {
        const nativeInput = component.inputElement.nativeElement as HTMLInputElement;
        component.clearable = true;
        createMask({mask: '000', lazy: false});
        fixture.detectChanges();

        expect(nativeInput.value).toBe('___');
        expect(component.isClearable).toBeFalsy();
        expect(fixture.nativeElement.querySelector('.evo-input .evo-input__clearable')).toBeFalsy();

        component.writeValue('1');
        fixture.detectChanges();

        expect(nativeInput.value).toBe('1__');
        expect(component.isClearable).toBeTruthy();
        expect(fixture.nativeElement.querySelector('.evo-input .evo-input__clearable')).toBeTruthy();

        component.onClear();
        fixture.detectChanges();

        expect(nativeInput.value).toBe('___');
        expect(component.isClearable).toBeFalsy();
        expect(fixture.nativeElement.querySelector('.evo-input .evo-input__clearable')).toBeFalsy();
    });

    it('should not be clearable if clearable is true and disabled is true', () => {
        component.clearable = true;
        component.writeValue('some value');
        component.disabled = true;
        fixture.detectChanges();
        expect(component.isClearable).toBeFalsy();
        expect(fixture.nativeElement.querySelector('.evo-input .evo-input__clearable')).toBeFalsy();
    });

    it('should not be clearable if clearable param is true and param disabled is true', () => {
        component.clearable = true;
        component.disabled = true;
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('.evo-input .evo-input__clearable')).toBeFalsy();
    });

    it('should notify form via onChange when onClear is called', (): void => {
        const onChangeSpy = spyOn(component, 'onChange');
        component.clearable = true;
        component.writeValue('some value');
        fixture.detectChanges();

        expect(fixture.nativeElement.querySelector('.evo-input .evo-input__clearable')).toBeTruthy();

        const writeToElementSpy = spyOn(component, 'writeToElement').and.callThrough();
        component.onClear();
        fixture.detectChanges();

        expect(writeToElementSpy).toHaveBeenCalledWith('');
        expect(onChangeSpy).toHaveBeenCalledWith('');
        expect((component.inputElement.nativeElement as HTMLInputElement).value).toBe('');
        expect(component.value).toBe('');
        expect(fixture.nativeElement.querySelector('.evo-input .evo-input__clearable')).toBeFalsy();
    });

    it('should clear mask and notify form via onChange when onClear is called', (): void => {
        const onChangeSpy = spyOn(component, 'onChange');
        createMask();
        component.maskValue = '9999999999';
        fixture.detectChanges();
        component.onClear();
        fixture.detectChanges();

        expect(component.maskValue).toBe('');
        expect(onChangeSpy).toHaveBeenCalledWith('');
    });

    it('should not call onChange when writeValue is called, but should call onChange when onInputChange is triggered', fakeAsync(() => {
        const onChangeSpy = spyOn(component, 'onChange');

        // Регистрируем spy как onChange callback
        component.registerOnChange(onChangeSpy);

        // Проверяем, что onChange НЕ вызывается при writeValue
        component.writeValue('test value');
        tick();
        fixture.detectChanges();

        expect(onChangeSpy).not.toHaveBeenCalled();
        expect(component.value).toBe('test value');

        // Сбрасываем spy
        onChangeSpy.calls.reset();

        // Проверяем, что onChange вызывается при пользовательском взаимодействии
        component.onInputChange('user input');
        tick();
        fixture.detectChanges();

        expect(onChangeSpy).toHaveBeenCalledWith('user input');
        expect(onChangeSpy).toHaveBeenCalledTimes(1);
    }));
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

    it('should create a dynamically added mask outside Angular zone', fakeAsync((): void => {
        createTestHost(`<evo-input [mask]="templateVars?.mask"></evo-input>`);
        wrapperComponent.templateVars = {mask: {mask: '000'}};
        fixture.detectChanges();

        let acceptRanInAngularZone: boolean;
        component['iMask'].on('accept', (): void => {
            acceptRanInAngularZone = NgZone.isInAngularZone();
        });

        const nativeInput = component.inputElement.nativeElement as HTMLInputElement;
        nativeInput.value = '1';
        nativeInput.dispatchEvent(new InputEvent('input'));

        expect(acceptRanInAngularZone).toBeFalse();

        tick(component.inputDebounce);
    }));

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
            size: `${EvoInputSizes.small}`,
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

    it('should not have prefix icon if prefix icon projected without [evoInputIcon] directive', () => {
        createTestHost(`
                                    <evo-input>
                                        <evo-icon shape="decline"></evo-icon>
                                    </evo-input>
                                `);

        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('.evo-input .evo-input__prefix-icon .evo-icon')).toBeFalsy();
    });

    it('should have prefix icon if prefix icon projected with [evoInputIcon] directive', () => {
        createTestHost(`
                                    <evo-input>
                                        <evo-icon evoInputIcon shape="decline"></evo-icon>
                                    </evo-input>
                                `);

        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('.evo-input .evo-input__prefix-icon .evo-icon')).toBeTruthy();
    });

    it('should project postfix content', () => {
        createTestHost(`
            <evo-input>
                <span evoInputPostfixContent>₽</span>
            </evo-input>
        `);

        fixture.detectChanges();

        expect(fixture.nativeElement.querySelector('.evo-input__postfix-content').textContent.trim()).toBe('₽');
    });

    it('should set control as invalid if the value doesnt match the mask', () => {
        createTestHost(`<evo-input
            [formControl]="control"
            [mask]="{ mask: '+{7} (000) 000-00-00' }"
            [maskValidation]="true">
        </evo-input>`);

        wrapperComponent.control.setValue('923034');

        fixture.detectChanges();

        expect(wrapperComponent.control.invalid).toBeTruthy();
    });

    it('should set control as valid if the value matches the mask', () => {
        createTestHost(`<evo-input
            [formControl]="control"
            [mask]="{ mask: '+{7} (000) 000-00-00' }"
            [maskValidation]="true">
        </evo-input>`);

        wrapperComponent.control.setValue('79230343434');

        fixture.detectChanges();

        expect(wrapperComponent.control.valid).toBeTruthy();
    });

    it('shouldnt validate the mask', () => {
        createTestHost(`<evo-input
            [formControl]="control"
            [mask]="{ mask: '+{7} (000) 000-00-00' }"
            [maskValidation]="false">
        </evo-input>`);

        wrapperComponent.control.setValue('923034');

        fixture.detectChanges();

        expect(wrapperComponent.control.valid).toBeTruthy();
    });

    it('shouldnt throw an error if mask is not provided and validation is disabled', () => {
        createTestHost(`<evo-input
            [formControl]="control">
        </evo-input>`);

        expect(true).toBeTruthy();
    });

    it('should keep control untouched after focus and mark as touched after blur', () => {
        createTestHost(`<evo-input [formControl]="control"/>`);

        expect(wrapperComponent.control.touched).toBeFalse();

        component.inputElement.nativeElement.dispatchEvent(new Event('focus'));
        fixture.detectChanges();

        expect(wrapperComponent.control.touched).toBeFalse();

        component.inputElement.nativeElement.dispatchEvent(new Event('blur'));
        fixture.detectChanges();

        expect(wrapperComponent.control.touched).toBeTrue();
    });
});
