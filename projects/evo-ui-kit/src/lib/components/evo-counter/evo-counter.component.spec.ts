import {ComponentFixture, fakeAsync, TestBed, waitForAsync} from '@angular/core/testing';
import {EvoCounterComponent, EvoCounterSize} from './evo-counter.component';
import {COMPOSITION_BUFFER_MODE} from '@angular/forms';

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
        expect(component.size).toEqual(EvoCounterSize.normal);
        expect(fixture.nativeElement.querySelector('.evo-counter').classList.contains('evo-counter_size-small')).toBeFalsy();
    });

    it('should be small if set small size', fakeAsync(() => {
        expect(counterEl.classList.contains('evo-counter_size-small')).toBeFalsy();
        expect(component.size).toEqual(EvoCounterSize.normal);
        component.setSize = EvoCounterSize.small;
        fixture.debugElement.triggerEventHandler('click', null);
        fixture.detectChanges();
        expect(component.size).toEqual(EvoCounterSize.small);
        expect(fixture.nativeElement.querySelector('.evo-counter').classList.contains('evo-counter_size-small')).toBeTruthy();
    }));

    it('should be normal if set incorrect size', () => {
        expect(component.size).toEqual(EvoCounterSize.normal);
        component.setSize = 'incorrect' as EvoCounterSize;
        fixture.debugElement.triggerEventHandler('click', null);
        fixture.detectChanges();
        expect(component.size).toEqual(EvoCounterSize.normal);
        expect(fixture.nativeElement.querySelector('.evo-counter').classList.contains('evo-counter_size-small')).toBeFalsy();
    });
});
