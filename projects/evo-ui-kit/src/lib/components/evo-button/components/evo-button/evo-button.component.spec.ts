import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {EvoButtonColor, EvoButtonComponent, EvoButtonSize, EvoButtonTheme} from '../../index';
import {ChangeDetectionStrategy} from '@angular/core';
import {EvoUiClassDirective} from '../../../../directives';

describe('EvoButtonComponent', () => {
    let component: EvoButtonComponent;
    let fixture: ComponentFixture<EvoButtonComponent>;
    let buttonEl: HTMLElement;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [EvoButtonComponent, EvoUiClassDirective],
        })
            .overrideComponent(EvoButtonComponent, {
                set: {changeDetection: ChangeDetectionStrategy.Default},
            })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EvoButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        buttonEl = fixture.nativeElement.querySelector('.evo-button');
    });

    it(`should have size class if input size is set`, () => {
        const sizes: EvoButtonSize[] = ['small', 'normal', 'large'];
        sizes.forEach((size) => {
            component.size = size;
            fixture.detectChanges();
            expect(buttonEl.classList.contains(`evo-button_size_${size}`)).toBeTruthy();
        });
    });

    it(`should have color class if input color is set`, () => {
        const colors: EvoButtonColor[] = [
            'custom',
            'secondary',
            'success',
            'bonus',
            'link',
            'error',
            'white',
            'primary',
            'text',
        ];
        colors.forEach((color) => {
            component.color = color;
            fixture.detectChanges();
            expect(buttonEl.classList.contains(`evo-button_color_${color}`)).toBeTruthy();
        });
    });

    it(`should have theme classes if input theme is set`, () => {
        const themesToClassesMap: Map<EvoButtonTheme, Record<string, boolean>> = new Map<
            EvoButtonTheme,
            Record<string, boolean>
        >([
            [
                'rounded-outline',
                {
                    'evo-button_is-outline': true,
                    'evo-button_shape_rounded': true,
                    'evo-button_shape_rectangle': false,
                    'evo-button_shape_semi-rectangle': false,
                },
            ],
            [
                'rectangle-outline',
                {
                    'evo-button_is-outline': true,
                    'evo-button_shape_rounded': false,
                    'evo-button_shape_rectangle': true,
                    'evo-button_shape_semi-rectangle': false,
                },
            ],
            [
                'semi-rectangle-solid',
                {
                    'evo-button_is-outline': false,
                    'evo-button_shape_rounded': false,
                    'evo-button_shape_rectangle': false,
                    'evo-button_shape_semi-rectangle': true,
                },
            ],
            [
                'rounded-solid',
                {
                    'evo-button_is-outline': false,
                    'evo-button_shape_rounded': true,
                    'evo-button_shape_rectangle': false,
                    'evo-button_shape_semi-rectangle': false,
                },
            ],
        ]);
        Array.from(themesToClassesMap.keys()).forEach((theme) => {
            component.theme = theme;
            fixture.detectChanges();
            Object.keys(themesToClassesMap.get(theme)).forEach((className) => {
                if (themesToClassesMap.get(theme)[className]) {
                    expect(buttonEl.classList.contains(className)).toBeTruthy();
                } else {
                    expect(buttonEl.classList.contains(className)).toBeFalsy();
                }
            });
        });
    });

    it(`should have disabled class if disabled property is true`, () => {
        component.disabled = true;
        fixture.detectChanges();
        expect(buttonEl.classList.contains('evo-button_is-disabled')).toBeTruthy();
    });

    it(`should contain loader if loading is true`, () => {
        component.loading = true;
        fixture.detectChanges();
        expect(buttonEl.querySelector('.evo-button__loader') != null).toBeTruthy();
    });
});
