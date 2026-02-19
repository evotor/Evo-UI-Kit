import { ComponentFixture, fakeAsync, TestBed, waitForAsync } from '@angular/core/testing';
import { EvoCounterComponent } from './evo-counter.component';
import { COMPOSITION_BUFFER_MODE } from '@angular/forms';
import {EvoCounterSize} from '../../enums/evo-counter-size';

describe('EvoCounterComponent', () => {
    let component: EvoCounterComponent;
    let fixture: ComponentFixture<EvoCounterComponent>;
    let counterEl: HTMLElement;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [EvoCounterComponent],
            providers: [{
                provide: COMPOSITION_BUFFER_MODE,
                useValue: true,
            }]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.overrideComponent(EvoCounterComponent,
            {set: {host: {'(click)': 'dummy'}}}).createComponent(EvoCounterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        counterEl = fixture.nativeElement.querySelector('.evo-counter');
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should be disabled if set disabled attribute to true', fakeAsync(() => {
        expect(counterEl.classList.contains('evo-counter_disabled')).toBeFalsy();
        expect(component.disabled).toBeFalsy();
        component.disabled = true;
        fixture.debugElement.triggerEventHandler('click', null);
        fixture.detectChanges();
        expect(component.disabled).toBeTruthy();
        expect(fixture.nativeElement.querySelector('.evo-counter').classList.contains('evo-counter_disabled')).toBeTruthy();
    }));

    it('should be normal if size is not set', () => {
        expect(component.size).toEqual(EvoCounterSize.NORMAL);
        expect(fixture.nativeElement.querySelector('.evo-counter').classList.contains('evo-counter_size_small')).toBeFalsy();
    });

    it('should be small if set small size', fakeAsync(() => {
        expect(counterEl.classList.contains('evo-counter_size_small')).toBeFalsy();
        expect(component.size).toEqual(EvoCounterSize.NORMAL);
        component.size = EvoCounterSize.SMALL;
        fixture.debugElement.triggerEventHandler('click', null);
        fixture.detectChanges();
        expect(component.size).toEqual(EvoCounterSize.SMALL);
        expect(fixture.nativeElement.querySelector('.evo-counter').classList.contains('evo-counter_size_small')).toBeTruthy();
    }));

    it('should be large if set large size', fakeAsync(() => {
        expect(counterEl.classList.contains('evo-counter_size_small')).toBeFalsy();
        expect(component.size).toEqual(EvoCounterSize.NORMAL);
        component.size = EvoCounterSize.LARGE;
        fixture.debugElement.triggerEventHandler('click', null);
        fixture.detectChanges();
        expect(component.size).toEqual(EvoCounterSize.LARGE);
        expect(fixture.nativeElement.querySelector('.evo-counter').classList.contains('evo-counter_size_large')).toBeTruthy();
    }));

    it('should display the current value if it is less than maxValue', () => {
        component.value = 5;
        component.maxValue = 10;

        fixture.debugElement.triggerEventHandler('click', null);
        fixture.detectChanges();

        const content = fixture.nativeElement.querySelector('.evo-counter').textContent;
        expect(content).toContain('5');
    });

    it('should display maxValue with a plus sign if value exceeds maxValue', () => {
        component.value = 100;
        component.maxValue = 99;

        fixture.debugElement.triggerEventHandler('click', null);
        fixture.detectChanges();

        const content = fixture.nativeElement.querySelector('.evo-counter').textContent;
        expect(content).toContain('99+');
    });
});
