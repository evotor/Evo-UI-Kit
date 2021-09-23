import { async, ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { EvoCounterComponent, EvoCounterSize } from './evo-counter.component';
import { COMPOSITION_BUFFER_MODE } from '@angular/forms';

describe('EvoCounterComponent', () => {
    let component: EvoCounterComponent;
    let fixture: ComponentFixture<EvoCounterComponent>;
    let counterEl: HTMLElement;

    beforeEach(async(() => {
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
        fixture = TestBed.overrideComponent(EvoCounterComponent, {set: {host: { '(click)': 'dummy' }}}).createComponent(EvoCounterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        counterEl = fixture.nativeElement.querySelector('.evo-counter');
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it(`should set default size ${EvoCounterSize.normal} if size param is not set`, () => {
        expect(component.size === EvoCounterSize.normal).toBeTruthy();
    });

    it('should omit CSS size modifier if size is set to default', () => {
        component.size = EvoCounterSize.normal;
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('.evo-counter').classList.contains('evo-counter_sizes-small')).toBeFalsy();
    });

    it('should be default if size is incorrect', () => {
        component.size = '' as EvoCounterSize;
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('.evo-counter').classList.contains('evo-counter_sizes-small')).toBeFalsy();
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

    it(`should be small if size attribute to ${EvoCounterSize.small}`, fakeAsync(() => {
        expect(counterEl.classList.contains('evo-counter_size-small')).toBeFalsy();
        expect(component.size).toEqual(EvoCounterSize.normal);
        component.size = EvoCounterSize.small;
        fixture.debugElement.triggerEventHandler('click', null);
        fixture.detectChanges();
        expect(component.size).toEqual(EvoCounterSize.small);
        expect(fixture.nativeElement.querySelector('.evo-counter').classList.contains('evo-counter_size-small')).toBeTruthy();
    }));
});
