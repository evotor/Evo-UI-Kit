import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
    EvoButtonColor,
    EvoButtonComponent,
    EvoButtonModule,
    EvoButtonShape,
    EvoButtonSize,
    EvoButtonStyles,
    EvoButtonTheme
} from './index';
import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { EvoUiClassDirective } from '../../directives/';
import { createHostFactory } from '@ngneat/spectator';

const btnSelector = '.evo-button';

function outlineSelector(isOutline: boolean): string {
    return isOutline
        ? `${btnSelector}${btnSelector}_is-outline`
        : `${btnSelector}:not(${btnSelector}_is-outline)`;
}

function shapeSelector(shape: EvoButtonShape): string {
    return `${btnSelector}_shape-${shape}`;
}

function sizeSelector(size: EvoButtonSize): string {
    return `${btnSelector}_size-${size}`;
}

function colorSelector(color: EvoButtonColor): string {
    return `${btnSelector}_color-${color}`;
}

@Component({selector: 'evo-host-component', template: ``})
class TestHostComponent {
    @ViewChild(EvoButtonComponent, {static: true})
    public evoButtonComponent: EvoButtonComponent;

    // TODO: remove after major version up
    style: keyof typeof EvoButtonStyles = undefined;

    color: EvoButtonColor = undefined;
    theme: EvoButtonTheme = undefined;
    size: EvoButtonSize = undefined;
}

const createHost = createHostFactory({
    component: EvoButtonComponent,
    declarations: [EvoButtonComponent],
    host: TestHostComponent,
    imports: [EvoButtonModule],
});

describe('EvoButtonComponent', () => {
    let component: EvoButtonComponent;
    let fixture: ComponentFixture<EvoButtonComponent>;
    let buttonEl: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                EvoButtonComponent,
                EvoUiClassDirective,
            ],
        }).overrideComponent(EvoButtonComponent, {
            set: {changeDetection: ChangeDetectionStrategy.Default},
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EvoButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        buttonEl = fixture.nativeElement.querySelector('.evo-button');
    });
});

describe('EvoButtonComponent: inputs binding and events', () => {
    it(`should have default shape, color and size having no parameters`, () => {
        const host = createHost(`<evo-button>test</evo-button>`);
        const defaultParams: {size: EvoButtonSize, color: EvoButtonColor, shape: EvoButtonShape, isOutline: boolean} = {
            size: 'normal',
            color: 'primary',
            shape: 'rounded',
            isOutline: false,
        };
        expect(host.query(`${sizeSelector(defaultParams.size)}`)).toExist();
        expect(host.query(`${shapeSelector(defaultParams.shape)}`)).toExist();
        expect(host.query(`${colorSelector(defaultParams.color)}`)).toExist();
        expect(host.query(`${outlineSelector(defaultParams.isOutline)}`)).toExist();
    });

    it(`should be disabled if input disabled = true`, () => {
        const host = createHost(`<evo-button [disabled]="true">test</evo-button>`)
        host.detectChanges();
        expect(host.query(`${btnSelector}_is-disabled`)).toExist();
    });

    it(`should be loading if input loading = true`, () => {
        const host = createHost(`<evo-button [loading]="true">test</evo-button>`)
        host.detectChanges();
        expect(host.query(`${btnSelector}_is-loading`)).toExist();
        expect(host.query(`evo-circular-loader`)).toExist();
    });

    it(`should have size class if size param is set`, () => {
        const host = createHost(`<evo-button [size]="size">test</evo-button>`)
        const sizesList: EvoButtonSize[] = [
            'normal',
            'small',
            'large',
        ];
        for (const size of sizesList) {
            host.hostComponent.size = size;
            host.detectChanges();
            expect(host.query(`${sizeSelector(size)}`)).toExist();
        }
    });

    it(`should have color class if color param is set`, () => {
        const host = createHost(`<evo-button [color]="color">test</evo-button>`)
        const colorsList: EvoButtonColor[] = [
            'secondary',
            'success',
            'bonus',
            'link',
            'error',
            'white',
            'primary',
        ];
        for (const color of colorsList) {
            host.hostComponent.color = color;
            host.detectChanges();
            expect(host.query(`${colorSelector(color)}`)).toExist();
        }
    });

    it(`should be outline or solid and take corresponding shape if theme param is set`, () => {
        const host = createHost(`<evo-button [theme]="theme">test</evo-button>`);
        const themesList: EvoButtonTheme[] = [
            'rounded-solid',
            'rounded-outline',
            'rectangle-outline',
            'semi-rectangle-solid',
        ];
        for (const theme of themesList) {
            host.hostComponent.theme = theme;
            host.detectChanges();
            const splitList = theme.split('-');
            const isOutline = splitList.pop() === 'outline';
            const shape = splitList.join('-') as EvoButtonShape;
            expect(host.query(`${outlineSelector(isOutline)}${shapeSelector(shape)}`)).toExist();
        }
    });

    // TODO: remove after major version up
    it(`should support old colors via EvoButtonStyles`, () => {
        const host = createHost(`<evo-button [color]="style">test</evo-button>`);

        const oldStyles: Record<EvoButtonStyles, {color: EvoButtonColor, shape: EvoButtonShape, isOutline: boolean}> = {
            [EvoButtonStyles.lined]: {
                color: 'primary',
                shape: 'rounded',
                isOutline: true,
            },
            [EvoButtonStyles.darkblue]: {
                color: 'secondary',
                shape: 'rounded',
                isOutline: false,
            },
            [EvoButtonStyles.darkblueLined]: {
                color: 'secondary',
                shape: 'rounded',
                isOutline: true,
            },
            [EvoButtonStyles.green]: {
                color: 'success',
                shape: 'rounded',
                isOutline: false,
            },
            [EvoButtonStyles.greenlined]: {
                color: 'success',
                shape: 'rounded',
                isOutline: true,
            },
            [EvoButtonStyles.purple]: {
                color: 'bonus',
                shape: 'rounded',
                isOutline: false,
            },
            [EvoButtonStyles.red]: {
                color: 'error',
                shape: 'rounded',
                isOutline: false,
            },
        };

        for (const style of (Object.keys(oldStyles) as Array<keyof typeof EvoButtonStyles>)) {
            host.hostComponent.style = style;
            host.detectChanges();
            expect(host.query(`${outlineSelector(oldStyles[style].isOutline)}${shapeSelector(oldStyles[style].shape)}${colorSelector(oldStyles[style].color)}`)).toExist();
        }
    });
});
