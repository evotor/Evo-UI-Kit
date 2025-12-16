import {ComponentFixture, fakeAsync, TestBed, tick, waitForAsync} from '@angular/core/testing';
import {EvoQuantityComponent} from './evo-quantity.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LOCALE_ID, NO_ERRORS_SCHEMA} from '@angular/core';
import {InputMode} from './enums/input-mode';
import {By} from '@angular/platform-browser';
import {registerLocaleData} from '@angular/common';
import localeRu from '@angular/common/locales/ru';

registerLocaleData(localeRu);

describe('EvoQuantityComponent', () => {
    const CONTROL_BTN_SELECTOR = '.evo-quantity__control';
    const INPUT_SELECTOR = '.evo-quantity__field';

    let component: EvoQuantityComponent;
    let fixture: ComponentFixture<EvoQuantityComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule, ReactiveFormsModule],
            declarations: [EvoQuantityComponent],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [{provide: LOCALE_ID, useValue: 'ru'}],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EvoQuantityComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should set value through writeValue', () => {
        component.writeValue(5);
        fixture.detectChanges();
        expect(component.control.value).toBe(5);
    });

    it('should increment value on plus button click', fakeAsync(() => {
        component.registerOnChange(() => {});
        component.registerOnTouched(() => {});
        component.writeValue(5);
        component.step = 1;
        fixture.detectChanges();

        const buttons = fixture.debugElement.queryAll(By.css(CONTROL_BTN_SELECTOR));
        buttons[1].triggerEventHandler('click', null);
        tick();
        fixture.detectChanges();

        expect(component.control.value).toBe(6);
    }));

    it('should decrement value on minus button click', fakeAsync(() => {
        component.registerOnChange(() => {});
        component.registerOnTouched(() => {});
        component.writeValue(5);
        component.step = 1;
        fixture.detectChanges();

        const buttons = fixture.debugElement.queryAll(By.css(CONTROL_BTN_SELECTOR));
        buttons[0].triggerEventHandler('click', null);
        tick();
        fixture.detectChanges();

        expect(component.control.value).toBe(4);
    }));

    it('should not go below min value', fakeAsync(() => {
        component.registerOnChange(() => {});
        component.registerOnTouched(() => {});
        component.min = 0;
        component.writeValue(0);
        fixture.detectChanges();

        const buttons = fixture.debugElement.queryAll(By.css(CONTROL_BTN_SELECTOR));
        buttons[0].triggerEventHandler('click', null);
        tick();
        fixture.detectChanges();

        expect(component.control.value).toBe(0);
    }));

    it('should not go above max value', fakeAsync(() => {
        component.registerOnChange(() => {});
        component.registerOnTouched(() => {});
        component.max = 10;
        component.writeValue(10);
        fixture.detectChanges();

        const buttons = fixture.debugElement.queryAll(By.css(CONTROL_BTN_SELECTOR));
        buttons[1].triggerEventHandler('click', null);
        tick();
        fixture.detectChanges();

        expect(component.control.value).toBe(10);
    }));

    it('should disable control when setDisabledState is called with true', fakeAsync(() => {
        component.setDisabledState(true);
        tick();
        fixture.detectChanges();

        expect(component.control.disabled).toBeTruthy();
    }));

    it('should enable control when setDisabledState is called with false', fakeAsync(() => {
        component.setDisabledState(true);
        tick();
        fixture.detectChanges();

        component.setDisabledState(false);
        tick();
        fixture.detectChanges();

        expect(component.control.disabled).toBeFalsy();
    }));

    it('should emit delete event when delete button clicked', () => {
        spyOn(component.delete, 'emit');
        component.onDeleteBtnClick();
        expect(component.delete.emit).toHaveBeenCalled();
    });

    it('should not call onChange when writeValue is called', fakeAsync(() => {
        const onChangeSpy = jasmine.createSpy('onChange');
        component.registerOnChange(onChangeSpy);

        component.writeValue(10);
        tick();
        fixture.detectChanges();

        expect(onChangeSpy).not.toHaveBeenCalled();
        expect(component.control.value).toBe(10);
    }));

    it('should call onChange on user interaction via step buttons', fakeAsync(() => {
        const onChangeSpy = jasmine.createSpy('onChange');
        component.registerOnChange(onChangeSpy);
        component.registerOnTouched(() => {});
        component.writeValue(5);
        tick();
        fixture.detectChanges();

        onChangeSpy.calls.reset();

        const buttons = fixture.debugElement.queryAll(By.css(CONTROL_BTN_SELECTOR));
        buttons[1].triggerEventHandler('click', null);
        tick();
        fixture.detectChanges();

        expect(onChangeSpy).toHaveBeenCalledWith(6);
        expect(onChangeSpy).toHaveBeenCalledTimes(1);
    }));

    it('should start in PER_BUTTONS mode', () => {
        expect(component.mode).toBe(InputMode.PER_BUTTONS);
    });

    it('should emit manualInputStart when focusing input', () => {
        spyOn(component.manualInputStart, 'emit');
        component.registerOnTouched(() => {});
        component.isInputAllowed = true;
        fixture.detectChanges();

        const input = fixture.debugElement.query(By.css(INPUT_SELECTOR));
        input.nativeElement.dispatchEvent(new Event('focus'));
        fixture.detectChanges();

        expect(component.manualInputStart.emit).toHaveBeenCalled();
    });

    it('should emit manualInputEnd when finishing manual mode', () => {
        spyOn(component.manualInputEnd, 'emit');
        component.registerOnChange(() => {});
        component.registerOnTouched(() => {});
        component.writeValue(5);

        // Start manual mode first
        component.onInputFocus();
        fixture.detectChanges();

        // Finish manual mode
        component.onFinishManualModeBtnClick();
        fixture.detectChanges();

        expect(component.manualInputEnd.emit).toHaveBeenCalled();
    });

    it('should unsubscribe on destroy', () => {
        const destroySpy = spyOn(component['destroy$'], 'next');
        component.ngOnDestroy();
        expect(destroySpy).toHaveBeenCalled();
    });

    describe('size', () => {
        it('should have normal size by default', () => {
            expect(component.size).toBe('normal');
        });

        it('should apply size-normal class by default', () => {
            expect(component.wrapClasses['evo-quantity__wrap_size-normal']).toBeTruthy();
        });

        it('should apply size-small class when size is small', () => {
            component.size = 'small';
            expect(component.wrapClasses['evo-quantity__wrap_size-small']).toBeTruthy();
        });
    });

    describe('theme', () => {
        it('should have default theme by default', () => {
            expect(component.theme).toBe('default');
        });

        it('should apply theme-default class by default', () => {
            expect(component.wrapClasses['evo-quantity__wrap_theme-default']).toBeTruthy();
        });

        it('should apply theme-borderless class when theme is borderless', () => {
            component.theme = 'borderless';
            expect(component.wrapClasses['evo-quantity__wrap_theme-borderless']).toBeTruthy();
        });
    });

    describe('error state', () => {
        it('should include error class when control is invalid', () => {
            component.control.setValidators(() => ({error: true}));
            component.control.updateValueAndValidity();
            expect(component.wrapClasses['evo-quantity__wrap_error']).toBeTruthy();
        });

        it('should not include error class when control is valid', () => {
            component.writeValue(5);
            expect(component.wrapClasses['evo-quantity__wrap_error']).toBeFalsy();
        });
    });

    describe('keyboard events', () => {
        it('should cancel manual mode on Escape key', fakeAsync(() => {
            component.registerOnChange(() => {});
            component.registerOnTouched(() => {});
            component.writeValue(5);
            component.isInputAllowed = true;
            fixture.detectChanges();

            component.onInputFocus();
            fixture.detectChanges();
            expect(component.mode).toBe(InputMode.MANUAL);

            component.control.setValue(10);
            fixture.detectChanges();

            const event = new KeyboardEvent('keydown', {key: 'Escape'});
            document.dispatchEvent(event);
            tick();
            fixture.detectChanges();

            expect(component.mode).toBe(InputMode.PER_BUTTONS);
            expect(component.control.value).toBe(5);
        }));

        it('should confirm manual mode on Enter key', fakeAsync(() => {
            component.registerOnChange(() => {});
            component.registerOnTouched(() => {});
            component.writeValue(5);
            component.isInputAllowed = true;
            fixture.detectChanges();

            component.onInputFocus();
            fixture.detectChanges();

            component.control.setValue(10);
            fixture.detectChanges();

            const event = new KeyboardEvent('keydown', {key: 'Enter'});
            document.dispatchEvent(event);
            tick();
            fixture.detectChanges();

            expect(component.mode).toBe(InputMode.PER_BUTTONS);
            expect(component.control.value).toBe(10);
        }));

        it('should not react to Escape when not in manual mode', () => {
            component.writeValue(5);
            fixture.detectChanges();

            const event = new KeyboardEvent('keydown', {key: 'Escape'});
            document.dispatchEvent(event);
            fixture.detectChanges();

            expect(component.mode).toBe(InputMode.PER_BUTTONS);
            expect(component.control.value).toBe(5);
        });
    });

    describe('isDeletable', () => {
        const DELETE_BTN_SELECTOR = '.evo-quantity__control evo-icon[shape="delete"]';
        const MINUS_BTN_SELECTOR = '.evo-quantity__control evo-icon[shape="minus"]';

        it('should show delete button when isDeletable is true and value equals min', fakeAsync(() => {
            component.isDeletable = true;
            component.min = 1;
            component.writeValue(1);
            tick();
            component['cdr'].markForCheck();
            fixture.detectChanges();

            const deleteBtn = fixture.debugElement.query(By.css(DELETE_BTN_SELECTOR));
            const minusBtn = fixture.debugElement.query(By.css(MINUS_BTN_SELECTOR));

            expect(deleteBtn).toBeTruthy();
            expect(minusBtn).toBeFalsy();
        }));

        it('should show minus button when isDeletable is true but value is above min', fakeAsync(() => {
            component.isDeletable = true;
            component.min = 1;
            component.writeValue(2);
            tick();
            component['cdr'].markForCheck();
            fixture.detectChanges();

            const deleteBtn = fixture.debugElement.query(By.css(DELETE_BTN_SELECTOR));
            const minusBtn = fixture.debugElement.query(By.css(MINUS_BTN_SELECTOR));

            expect(deleteBtn).toBeFalsy();
            expect(minusBtn).toBeTruthy();
        }));

        it('should show minus button when isDeletable is false and value equals min', fakeAsync(() => {
            component.isDeletable = false;
            component.min = 1;
            component.writeValue(1);
            tick();
            component['cdr'].markForCheck();
            fixture.detectChanges();

            const deleteBtn = fixture.debugElement.query(By.css(DELETE_BTN_SELECTOR));
            const minusBtn = fixture.debugElement.query(By.css(MINUS_BTN_SELECTOR));

            expect(deleteBtn).toBeFalsy();
            expect(minusBtn).toBeTruthy();
        }));

        it('should emit delete event when delete button is clicked in DOM', fakeAsync(() => {
            spyOn(component.delete, 'emit');
            component.isDeletable = true;
            component.min = 1;
            component.writeValue(1);
            tick();
            component['cdr'].markForCheck();
            fixture.detectChanges();

            const deleteBtn = fixture.debugElement.query(By.css(DELETE_BTN_SELECTOR)).parent;
            deleteBtn.triggerEventHandler('click', null);

            expect(component.delete.emit).toHaveBeenCalled();
        }));
    });

    describe('disabled state in DOM', () => {
        it('should disable minus button when value equals min', () => {
            component.min = 0;
            component.writeValue(0);
            fixture.detectChanges();

            const buttons = fixture.debugElement.queryAll(By.css(CONTROL_BTN_SELECTOR));
            const minusBtn = buttons[0].nativeElement;

            expect(minusBtn.disabled).toBeTruthy();
        });

        it('should disable plus button when value equals max', fakeAsync(() => {
            component.max = 10;
            component.writeValue(10);
            tick();
            component['cdr'].markForCheck();
            fixture.detectChanges();

            const plusBtnIcon = fixture.debugElement.query(By.css('evo-icon[shape="plus"]'));
            const plusBtn = plusBtnIcon.parent.nativeElement;

            expect(plusBtn.disabled).toBeTruthy();
        }));

        it('should disable all buttons when control is disabled', fakeAsync(() => {
            component.writeValue(5);
            component.setDisabledState(true);
            tick();
            fixture.detectChanges();

            const buttons = fixture.debugElement.queryAll(By.css(CONTROL_BTN_SELECTOR));
            buttons.forEach((btn) => {
                expect(btn.nativeElement.disabled).toBeTruthy();
            });
        }));

        it('should have disabled class on input when control is disabled', fakeAsync(() => {
            component.setDisabledState(true);
            tick();
            fixture.detectChanges();

            const input = fixture.debugElement.query(By.css(INPUT_SELECTOR));
            expect(input.nativeElement.classList).toContain('evo-quantity__field_disabled');
        }));
    });

    describe('isInputAllowed', () => {
        it('should have readonly input when isInputAllowed is false', () => {
            component.isInputAllowed = false;
            fixture.detectChanges();

            const input = fixture.debugElement.query(By.css(INPUT_SELECTOR));
            expect(input.nativeElement.readOnly).toBeTruthy();
        });

        it('should not have readonly input when isInputAllowed is true', fakeAsync(() => {
            component.isInputAllowed = true;
            tick();
            component['cdr'].markForCheck();
            fixture.detectChanges();

            const input = fixture.debugElement.query(By.css(INPUT_SELECTOR));
            expect(input.nativeElement.readOnly).toBeFalsy();
        }));

        it('should have readonly input when disabled even if isInputAllowed is true', fakeAsync(() => {
            component.isInputAllowed = true;
            component.setDisabledState(true);
            tick();
            fixture.detectChanges();

            const input = fixture.debugElement.query(By.css(INPUT_SELECTOR));
            expect(input.nativeElement.readOnly).toBeTruthy();
        }));
    });

    describe('pricePerOne hint', () => {
        const HINT_SELECTOR = '.evo-quantity__hint';

        it('should display hint when pricePerOne is set', fakeAsync(() => {
            component.pricePerOne = 100;
            tick();
            component['cdr'].markForCheck();
            fixture.detectChanges();

            const hint = fixture.debugElement.query(By.css(HINT_SELECTOR));
            expect(hint).toBeTruthy();
        }));

        it('should not display hint when pricePerOne is not set', () => {
            component.pricePerOne = undefined;
            fixture.detectChanges();

            const hint = fixture.debugElement.query(By.css(HINT_SELECTOR));
            expect(hint).toBeFalsy();
        });

        it('should not display hint when control is disabled', fakeAsync(() => {
            component.pricePerOne = 100;
            component.setDisabledState(true);
            tick();
            fixture.detectChanges();

            const hint = fixture.debugElement.query(By.css(HINT_SELECTOR));
            expect(hint).toBeFalsy();
        }));
    });

    describe('MANUAL mode', () => {
        const CHECK_BTN_SELECTOR = '.evo-quantity__control evo-icon[shape="check-rounded"]';
        const PLUS_BTN_SELECTOR = '.evo-quantity__control evo-icon[shape="plus"]';

        it('should show check button instead of plus when in manual mode', () => {
            component.registerOnTouched(() => {});
            component.isInputAllowed = true;
            fixture.detectChanges();

            const input = fixture.debugElement.query(By.css(INPUT_SELECTOR));
            input.nativeElement.dispatchEvent(new Event('focus'));
            fixture.detectChanges();

            const checkBtn = fixture.debugElement.query(By.css(CHECK_BTN_SELECTOR));
            const plusBtn = fixture.debugElement.query(By.css(PLUS_BTN_SELECTOR));

            expect(checkBtn).toBeTruthy();
            expect(plusBtn).toBeFalsy();
        });

        it('should hide minus button in manual mode', () => {
            component.registerOnTouched(() => {});
            component.isInputAllowed = true;
            component.writeValue(5);
            fixture.detectChanges();

            const input = fixture.debugElement.query(By.css(INPUT_SELECTOR));
            input.nativeElement.dispatchEvent(new Event('focus'));
            fixture.detectChanges();

            const buttons = fixture.debugElement.queryAll(By.css(CONTROL_BTN_SELECTOR));
            expect(buttons.length).toBe(1);
        });

        it('should confirm value when check button is clicked', fakeAsync(() => {
            const onChangeSpy = jasmine.createSpy('onChange');
            component.registerOnChange(onChangeSpy);
            component.registerOnTouched(() => {});
            component.isInputAllowed = true;
            component.writeValue(5);
            tick();
            fixture.detectChanges();

            onChangeSpy.calls.reset();

            component.onInputFocus();
            component['cdr'].markForCheck();
            fixture.detectChanges();

            component.control.setValue(10);
            fixture.detectChanges();

            const checkBtn = fixture.debugElement.query(By.css(CHECK_BTN_SELECTOR)).parent;
            checkBtn.triggerEventHandler('click', null);
            tick();
            fixture.detectChanges();

            expect(component.mode).toBe(InputMode.PER_BUTTONS);
            expect(onChangeSpy).toHaveBeenCalledWith(10);
        }));
    });

    describe('onClickOutside', () => {
        it('should cancel manual mode when clicking outside', fakeAsync(() => {
            component.registerOnChange(() => {});
            component.registerOnTouched(() => {});
            component.isInputAllowed = true;
            component.writeValue(5);
            fixture.detectChanges();

            component.onInputFocus();
            fixture.detectChanges();

            component.control.setValue(10);
            fixture.detectChanges();

            component.onClickOutside();
            tick();
            fixture.detectChanges();

            expect(component.mode).toBe(InputMode.PER_BUTTONS);
            expect(component.control.value).toBe(5);
        }));

        it('should not affect PER_BUTTONS mode when clicking outside', () => {
            component.writeValue(5);
            fixture.detectChanges();

            component.onClickOutside();
            fixture.detectChanges();

            expect(component.mode).toBe(InputMode.PER_BUTTONS);
            expect(component.control.value).toBe(5);
        });
    });
});
