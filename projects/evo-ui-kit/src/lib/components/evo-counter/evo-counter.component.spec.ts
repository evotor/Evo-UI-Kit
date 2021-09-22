import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
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
        fixture = TestBed.createComponent(EvoCounterComponent);
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
        fixture.detectChanges();
        tick();
        expect(component.disabled).toBeTruthy();
        expect(fixture.nativeElement.querySelector('.evo-counter').classList.contains('evo-counter_disabled').toBeTruthy);
    }));

    it('should be small is size attribute to true', fakeAsync(() => {
        expect(counterEl.classList.contains('evo-counter_sizes-small')).toBeFalsy();
        expect(component.size).toEqual(EvoCounterSize.normal);
        component.size = EvoCounterSize.small;
        fixture.detectChanges();
        tick();
        expect(component.size).toEqual(EvoCounterSize.small);
        expect(fixture.nativeElement.querySelector('.evo-counter').classList.contains('evo-counter_sizes-small').toBeTruthy);
    }));
});
