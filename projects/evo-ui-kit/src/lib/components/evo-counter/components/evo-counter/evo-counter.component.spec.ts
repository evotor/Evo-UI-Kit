import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {EvoCounterComponent} from './evo-counter.component';
import {EvoCounterSize} from '../../types/evo-counter-size';
import {ChangeDetectionStrategy} from '@angular/core';

describe('EvoCounterComponent', () => {
    let component: EvoCounterComponent;
    let fixture: ComponentFixture<EvoCounterComponent>;
    let counterEl: HTMLElement;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [EvoCounterComponent],
            })
                .overrideComponent(EvoCounterComponent, {
                    set: {changeDetection: ChangeDetectionStrategy.Default},
                })
                .compileComponents();
        }),
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(EvoCounterComponent);

        component = fixture.componentInstance;
        fixture.detectChanges();
        counterEl = fixture.nativeElement.querySelector('.evo-counter');
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should be disabled if set disabled attribute to true', () => {
        expect(counterEl.classList.contains('evo-counter_disabled')).toBeFalsy();
        expect(component.disabled).toBeFalsy();
        component.disabled = true;
        fixture.detectChanges();
        expect(component.disabled).toBeTruthy();
        expect(counterEl.classList.contains('evo-counter_disabled')).toBeTruthy();
    });

    it('should have normal size class by default', () => {
        expect(counterEl.classList.contains('evo-counter_size_normal')).toBeTruthy();
    });

    it(`should have size class if input size is set`, () => {
        const sizes: EvoCounterSize[] = ['small', 'normal', 'large'];

        sizes.forEach((size) => {
            component.size = size;
            fixture.detectChanges();
            expect(counterEl.classList.contains(`evo-counter_size_${size}`)).toBeTruthy();
        });
    });

    it('should display the current value if it is less than maxValue', () => {
        component.value = 5;
        component.maxValue = 10;

        fixture.detectChanges();

        const content = counterEl.textContent;
        expect(content).toContain('5');
    });

    it('should display maxValue with a plus sign if value exceeds maxValue', () => {
        component.value = 100;
        component.maxValue = 99;

        fixture.detectChanges();

        const content = counterEl.textContent;
        expect(content).toContain('99+');
    });
});
