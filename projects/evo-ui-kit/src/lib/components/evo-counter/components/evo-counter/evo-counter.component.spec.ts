import {ComponentRef} from '@angular/core';
import {ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';
import {EvoCounterSize} from '@evotor-dev/ui-kit';
import {EvoCounterComponent} from './evo-counter.component';

describe('EvoCounterComponent', () => {
    let component: EvoCounterComponent;
    let componentRef: ComponentRef<EvoCounterComponent>;
    let fixture: ComponentFixture<EvoCounterComponent>;
    let counterEl: HTMLElement;

    beforeEach(() => {
        fixture = TestBed.createComponent(EvoCounterComponent);

        component = fixture.componentInstance;
        componentRef = fixture.componentRef;
        fixture.detectChanges();
        counterEl = fixture.nativeElement.querySelector('.evo-counter');
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should be disabled if set disabled attribute to true', fakeAsync(() => {
        expect(counterEl.classList.contains('evo-counter_disabled')).toBeFalsy();
        expect(component.disabled()).toBeFalsy();
        componentRef.setInput('disabled', true);

        fixture.debugElement.triggerEventHandler('click', null);
        fixture.detectChanges();

        expect(component.disabled()).toBeTruthy();
        expect(
            counterEl.classList.contains('evo-counter_disabled'),
        ).toBeTruthy();
    }));

    it('should have normal size class by default', () => {
        expect(counterEl.classList.contains('evo-counter_size_normal')).toBeTruthy();
    });

    it(`should have size class if input size is set`, () => {
        const sizes: EvoCounterSize[] = ['small', 'normal', 'large'];

        sizes.forEach((size) => {
            componentRef.setInput('size', size);
            fixture.detectChanges();
            expect(counterEl.classList.contains(`evo-counter_size_${size}`)).toBeTruthy();
        });
    });

    it('should display the current value if it is less than maxValue', () => {
        componentRef.setInput('value', 5);
        componentRef.setInput('maxValue', 10);

        fixture.debugElement.triggerEventHandler('click', null);
        fixture.detectChanges();

        const content = counterEl.textContent;
        expect(content).toContain('5');
    });

    it('should display maxValue with a plus sign if value exceeds maxValue', () => {
        componentRef.setInput('value', 100);
        componentRef.setInput('maxValue', 99);

        fixture.debugElement.triggerEventHandler('click', null);
        fixture.detectChanges();

        const content = counterEl.textContent;
        expect(content).toContain('99+');
    });
});
