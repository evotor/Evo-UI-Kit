import {ComponentRef} from '@angular/core';
import {ComponentFixture, fakeAsync, TestBed, waitForAsync} from '@angular/core/testing';
import {COMPOSITION_BUFFER_MODE} from '@angular/forms';
import {EvoCounterSize} from '@evotor-dev/ui-kit';
import {EvoCounterComponent} from './evo-counter.component';

describe('EvoCounterComponent', () => {
    let component: EvoCounterComponent;
    let componentRef: ComponentRef<EvoCounterComponent>;
    let fixture: ComponentFixture<EvoCounterComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [EvoCounterComponent],
            providers: [
                {
                    provide: COMPOSITION_BUFFER_MODE,
                    useValue: true,
                },
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.overrideComponent(EvoCounterComponent, {set: {host: {'(click)': 'dummy'}}}).createComponent(
            EvoCounterComponent,
        );
        component = fixture.componentInstance;
        componentRef = fixture.componentRef;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should be disabled if set disabled attribute to true', fakeAsync(() => {
        expect(fixture.nativeElement.querySelector('.evo-counter').classList.contains('evo-counter_disabled')).toBeFalsy();
        // expect(fixture.nativeElement.querySelector('.evo-counter').classList.contains('evo-counter_disabled')).toBeFalsy();
        expect(component.disabled()).toBeFalsy();
        componentRef.setInput('disabled', true);

        fixture.debugElement.triggerEventHandler('click', null);
        fixture.detectChanges();

        expect(component.disabled()).toBeTruthy();
        expect(
            fixture.nativeElement.querySelector('.evo-counter').classList.contains('evo-counter_disabled'),
        ).toBeTruthy();
    }));

    it('should be normal if size is not set', () => {
        expect(component.size()).toEqual(EvoCounterSize.NORMAL);
        expect(
            fixture.nativeElement.querySelector('.evo-counter').classList.contains('evo-counter_size-small'),
        ).toBeFalsy();
    });

    it('should be small if set small size', fakeAsync(() => {
        expect(fixture.nativeElement.querySelector('.evo-counter').classList.contains('evo-counter_size-small')).toBeFalsy();
        expect(component.size()).toEqual(EvoCounterSize.NORMAL);
        componentRef.setInput('size', EvoCounterSize.SMALL);

        fixture.debugElement.triggerEventHandler('click', null);
        fixture.detectChanges();

        expect(component.size()).toEqual(EvoCounterSize.SMALL);
    }));

    it('should be large if set large size', fakeAsync(() => {
        expect(fixture.nativeElement.querySelector('.evo-counter').classList.contains('evo-counter_size_small')).toBeFalsy();
        expect(component.size()).toEqual(EvoCounterSize.NORMAL);
        componentRef.setInput('size', EvoCounterSize.LARGE);

        fixture.debugElement.triggerEventHandler('click', null);
        fixture.detectChanges();

        expect(component.size()).toEqual(EvoCounterSize.LARGE);
        expect(fixture.nativeElement.querySelector('.evo-counter').classList.contains('evo-counter_size_large')).toBeTruthy();
    }));

    it('should display the current value if it is less than maxValue', () => {
        componentRef.setInput('value', 5);
        componentRef.setInput('maxValue', 10);

        fixture.debugElement.triggerEventHandler('click', null);
        fixture.detectChanges();

        const content = fixture.nativeElement.querySelector('.evo-counter').textContent;
        expect(content).toContain('5');
    });

    it('should display maxValue with a plus sign if value exceeds maxValue', () => {
        componentRef.setInput('value', 100);
        componentRef.setInput('maxValue', 99);

        fixture.debugElement.triggerEventHandler('click', null);
        fixture.detectChanges();

        const content = fixture.nativeElement.querySelector('.evo-counter').textContent;
        expect(content).toContain('99+');
    });
});
