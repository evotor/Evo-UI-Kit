import {ComponentFixture, fakeAsync, TestBed, tick, waitForAsync} from '@angular/core/testing';
import {EvoQuantityComponent} from './evo-quantity.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {provideHttpClient} from '@angular/common/http';
import {By} from '@angular/platform-browser';
import {InputMode} from './enums/input-mode';

describe('EvoQuantityComponent', () => {
    const CONTROL_BTN_SELECTOR = '.evo-quantity__control';

    let component: EvoQuantityComponent;
    let fixture: ComponentFixture<EvoQuantityComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                ReactiveFormsModule,
                EvoQuantityComponent,
            ],
            providers: [provideHttpClient()],
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
        const plusBtn = buttons[1]; // second button is plus
        plusBtn.triggerEventHandler('click', null);
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
        const minusBtn = buttons[0]; // first button is minus
        minusBtn.triggerEventHandler('click', null);
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

        component.onChangeValueByStepClick(-1);
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

        component.onChangeValueByStepClick(1);
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

    it('should emit delete event when delete button clicked', waitForAsync(() => {
        spyOn(component.delete, 'emit');
        component.isDeletable = true;
        component.min = 0;
        component.writeValue(0);
        fixture.detectChanges();

        // Allow time for delete icon to load via XHR
        fixture.whenStable().then(() => {
            fixture.detectChanges();

            // When isDeletable=true and value=min, left wrap has delete button (not minus)
            const leftControlWrap = fixture.debugElement.query(By.css('.evo-quantity__control-wrap'));
            const deleteBtn = leftControlWrap.query(By.css(CONTROL_BTN_SELECTOR));
            expect(deleteBtn).toBeTruthy();
            deleteBtn.nativeElement.click();
            fixture.detectChanges();

            expect(component.delete.emit).toHaveBeenCalled();
        });
    }));

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

        component.onChangeValueByStepClick(1);
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

        const input = fixture.debugElement.query(By.css('.evo-quantity__field'));
        input.nativeElement.dispatchEvent(new Event('focus'));

        expect(component.manualInputStart.emit).toHaveBeenCalled();
    });

    it('should emit manualInputEnd when finishing manual mode', () => {
        spyOn(component.manualInputEnd, 'emit');
        component.registerOnChange(() => {});
        component.registerOnTouched(() => {});
        component.isInputAllowed = true;
        component.writeValue(5);
        fixture.detectChanges();

        // Enter manual mode via focus
        const input = fixture.debugElement.query(By.css('.evo-quantity__field'));
        input.nativeElement.dispatchEvent(new Event('focus'));
        fixture.detectChanges();

        // In manual mode, check button appears. Find all buttons and click the one in right control-wrap
        const buttons = fixture.debugElement.queryAll(By.css(CONTROL_BTN_SELECTOR));
        const checkBtn = buttons[buttons.length - 1]; // check button is on the right side
        checkBtn.triggerEventHandler('click', null);
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
});
