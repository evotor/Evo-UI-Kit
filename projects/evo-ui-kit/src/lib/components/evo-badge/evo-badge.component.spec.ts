import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { EvoBadgeComponent } from './evo-badge.component';
import { COMPOSITION_BUFFER_MODE } from '@angular/forms';
import { EvoColor } from '../../common/enums/evo-color';
import { EvoSize } from '../../common/enums';

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
        component.color = EvoColor.success;
        fixture.detectChanges();
        tick();
        expect(component.color).toEqual(EvoColor.success);
        expect(fixture.nativeElement.querySelector('.evo-badge').classList.contains('evo-badge_success').toBeTruthy);
    }));

    it(`should be small if input size = ${EvoSize.small}`, () => {
        expect(badgeEl.classList.contains('evo-badge_small')).toBeFalsy();
        component.size = EvoSize.small;
        fixture.detectChanges();
        const classes = component.classes;
        expect(classes.includes(component.size));
    });

    it(`should be error if input color  = ${EvoColor.error}`, () => {
        expect(badgeEl.classList.contains('evo-badge_error')).toBeFalsy();
        component.color = EvoColor.error;
        fixture.detectChanges();
        const classes = component.classes;
        expect(classes.includes(component.color));
    });


});
