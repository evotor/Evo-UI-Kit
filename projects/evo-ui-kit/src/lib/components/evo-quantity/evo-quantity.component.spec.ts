import {ComponentFixture, fakeAsync, TestBed, tick, waitForAsync} from '@angular/core/testing';
import {EvoQuantityComponent} from './evo-quantity.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {InputMode} from './enums/input-mode';
import {EvoQuantitySize} from './enums/evo-quantity-size';

describe('EvoQuantityComponent', () => {
    let component: EvoQuantityComponent;
    let fixture: ComponentFixture<EvoQuantityComponent>;
    let quantityEl: HTMLElement;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule, ReactiveFormsModule],
            declarations: [EvoQuantityComponent],
            schemas: [NO_ERRORS_SCHEMA],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EvoQuantityComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        quantityEl = fixture.nativeElement.querySelector('.evo-quantity');
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

        component.onChangeValueByStepClick(1);
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

        component.onChangeValueByStepClick(-1);
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
        component.onInputFocus();
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
        it('should have regular size by default', () => {
            expect(component.size).toBe(EvoQuantitySize.regular);
        });

        it('should apply size-regular class by default', () => {
            expect(component.wrapClasses['evo-quantity__wrap_size-regular']).toBeTruthy();
        });

        it('should apply size-small class when size is small', () => {
            component.size = EvoQuantitySize.small;
            expect(component.wrapClasses['evo-quantity__wrap_size-small']).toBeTruthy();
        });

        it('should apply size-simple class when size is simple', () => {
            component.size = EvoQuantitySize.simple;
            expect(component.wrapClasses['evo-quantity__wrap_size-simple']).toBeTruthy();
        });

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
