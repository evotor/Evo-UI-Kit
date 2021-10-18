import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { EvoBadgeComponent } from './evo-badge.component';
import { COMPOSITION_BUFFER_MODE } from '@angular/forms';
import { EVO_COLOR } from '../../common/enums/evo-color';

describe('EvoBadgeComponent', () => {
    let component: EvoBadgeComponent;
    let fixture: ComponentFixture<EvoBadgeComponent>;
    let badgeEl: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EvoBadgeComponent],
            providers: [{
                provide: COMPOSITION_BUFFER_MODE,
                useValue: true,
            }]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EvoBadgeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        badgeEl = fixture.nativeElement.querySelector('.evo-badge');
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should be success if input color = success', fakeAsync(() => {
        expect(badgeEl.classList.contains('evo-badge_success')).toBeFalsy();
        component.color = EVO_COLOR.success;
        fixture.detectChanges();
        tick();
        expect(component.color).toEqual(EVO_COLOR.success);
        expect(fixture.nativeElement.querySelector('.evo-badge').classList.contains('evo-badge_success').toBeTruthy);
    }));
});
