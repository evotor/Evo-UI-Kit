import {ComponentFixture, fakeAsync, TestBed, tick, waitForAsync} from '@angular/core/testing';
import {EvoBadgeComponent} from './evo-badge.component';
import {COMPOSITION_BUFFER_MODE} from '@angular/forms';
import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {createHostFactory} from "@ngneat/spectator";
import {EvoBadgeColor, EvoBadgeSize} from "../evo-badge";
import {EvoIconModule} from "../evo-icon";
import {iconStarOutlined} from "@evotor-dev/ui-kit/icons/system";

@Component({
    selector: 'evo-badge-wrapper',
    template: '',
})
class EvoBadgeWrapperComponent {
    @ViewChild(EvoBadgeComponent) evoBadgeComponent: EvoBadgeComponent;
}

const createHost = createHostFactory({
    component: EvoBadgeComponent,
    declarations: [
        EvoBadgeComponent,
    ],
    imports: [EvoIconModule.forRoot([
        {
            name: 'icons',
            shapes: {
                starOutlined: iconStarOutlined,
            },
        }
    ])],
    host: EvoBadgeWrapperComponent,
});
describe('EvoBadgeComponent', () => {
    const fixedWidth = 50;
    let component: EvoBadgeComponent;
    let fixture: ComponentFixture<EvoBadgeComponent>;
    let badgeEl: HTMLElement;

    beforeEach(waitForAsync(() => {
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

    it(`should have color class if input color is set`, () => {
        const colors: EvoBadgeColor[] = ['success',
            'error',
            'icon-dark',
            'icon-light',
            'graph-1',
            'graph-2',
            'graph-3',
            'graph-4',
            'graph-5',
            'graph-6',
            'graph-7',
            'graph-8',
            'graph-9',
            'graph-10',
            'grey',
            'rating',
            'primary',
            'custom'];
        colors.forEach((color) => {
            component.color = color;
            fixture.detectChanges();
            expect(badgeEl.classList.contains(`evo-badge_${color}`)).toBeTruthy();
        });
    });

    it(`should have size class if input size is set`, () => {
        const sizes: EvoBadgeSize[] = ['small', 'normal', 'large'];
        sizes.forEach((size) => {
            component.size = size;
            fixture.detectChanges();
            expect(badgeEl.classList.contains(`evo-badge_${size}`)).toBeTruthy();
        });
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
        expect(badgeEl.clientWidth).toEqual(Math.round(badgeEl.parentNode.parentElement.clientWidth / 2));
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

describe('EvoBadgeComponent: under test host', () => {

    let wrapperComponent: EvoBadgeWrapperComponent;
    let fixture: ComponentFixture<EvoBadgeWrapperComponent>;
    let component: EvoBadgeComponent;

    const createTestHost = function (template?: string) {
        const host = createHost(template || `<evo-badge></evo-badge>`);
        wrapperComponent = host.hostComponent;
        fixture = host.hostFixture;
        component = wrapperComponent.evoBadgeComponent;
    };

    it('should not have prefix icon if prefix icon projected without [evoBadgeIcon] directive', () => {
        createTestHost(`
                                    <evo-badge>
                                        <evo-icon shape="starOutlined"></evo-icon>
                                    </evo-badge>
                                `);

        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('.evo-badge .evo-badge__prefix-icon .evo-icon')).toBeFalsy();
    });

    it('should have prefix icon if prefix icon projected with [evoBadgeIcon] directive', () => {
        createTestHost(`
                                    <evo-badge>
                                        <evo-icon evoBadgeIcon shape="starOutlined"></evo-icon>
                                    </evo-badge>
                                `);

        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('.evo-badge .evo-badge__prefix-icon .evo-icon')).toBeTruthy();
    });
});
