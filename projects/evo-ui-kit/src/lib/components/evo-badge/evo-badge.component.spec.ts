import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { EvoBadgeComponent } from './evo-badge.component';
import { COMPOSITION_BUFFER_MODE } from '@angular/forms';
import { EvoColor, EvoSize } from '../../common/enums';
import { ChangeDetectionStrategy } from '@angular/core';

describe('EvoBadgeComponent', () => {
    const fixedWidth = 50;
    let component: EvoBadgeComponent;
    let fixture: ComponentFixture<EvoBadgeComponent>;
    let badgeEl: HTMLElement;

    beforeEach(async(() => {
        TestBed
            .configureTestingModule({
                declarations: [EvoBadgeComponent],
                providers: [{
                    provide: COMPOSITION_BUFFER_MODE,
                    useValue: true,
                }]
            })
            .overrideComponent(EvoBadgeComponent, {
                set: {
                    changeDetection: ChangeDetectionStrategy.Default,
                },
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

    it(`should be ${fixedWidth} pixels width if width.px input set`, () => {
        expect(badgeEl.attributes.getNamedItem('width')).toBeFalsy();
        component.widthPixels = fixedWidth;
        fixture.detectChanges();
        expect(getComputedStyle(badgeEl).width).toEqual(`${fixedWidth}px`);
    });

    it(`should be ${fixedWidth} percent width if width.% input set`, () => {
        expect(badgeEl.attributes.getNamedItem('width')).toBeFalsy();
        component.widthPercents = fixedWidth;
        fixture.detectChanges();
        expect(badgeEl.clientWidth).toEqual(badgeEl.parentNode.parentElement.clientWidth / 2);
    });

    it(`should be inline if multiline input = false or not set`, () => {
        expect(badgeEl.classList.contains('evo-badge_multiline')).toBeFalsy();
        component.multiline = false;
        fixture.detectChanges();
        expect(component.classes.includes('multiline')).toBeFalsy();
    });

    it(`should be multiline if multiline input = true`, () => {
        expect(badgeEl.classList.contains('evo-badge_multiline')).toBeFalsy();
        component.multiline = true;
        fixture.detectChanges();
        expect(component.classes.includes('multiline')).toBeTruthy();
    });

});
