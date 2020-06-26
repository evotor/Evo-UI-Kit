import { EvoInputComponent,  } from './index';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { EvoUiClassDirective } from '../../directives';
import { IMaskModule } from 'angular-imask';
import { EvoControlErrorComponent } from '../evo-control-error';
import { EvoButtonComponent } from '../evo-button';

describe('EvoButtonComponent', () => {
    let component: EvoInputComponent;
    let fixture: ComponentFixture<EvoInputComponent>;
    let inputEl: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                EvoInputComponent,
                EvoUiClassDirective,
                EvoControlErrorComponent,
            ],
            imports: [
                IMaskModule,
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

        expect(component.isTooltipVisible).toBeTruthy();
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('.evo-input .evo-input__tooltip-container')).toBeTruthy();
        expect(fixture.nativeElement.querySelector('.evo-input .evo-input__tooltip-container').textContent.trim()).toEqual(tooltip);
    }));

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
});
