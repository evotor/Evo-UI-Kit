import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EvoButtonColor, EvoButtonComponent, EvoButtonModule, EvoButtonTheme } from './index';
import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { EvoUiClassDirective } from '../../directives/';
import { createHostFactory } from '@ngneat/spectator';

@Component({selector: 'evo-host-component', template: ``})
class TestHostComponent {
    @ViewChild(EvoButtonComponent, {static: true})
    public evoButtonComponent: EvoButtonComponent;

    color: EvoButtonColor = undefined;
    theme: EvoButtonTheme = undefined;
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
    it(`should be small if input size = small`, () => {
        const host = createHost(`<evo-button size="small">test</evo-button>`)
        host.detectChanges();
        expect(host.query('.evo-button_size-small')).toExist();
    });

    it(`should be disabled if input disabled = true`, () => {
        const host = createHost(`<evo-button [disabled]="true">test</evo-button>`)
        host.detectChanges();
        expect(host.query('.evo-button_is-disabled')).toExist();
    });

    it(`should be loading if input loading = true`, () => {
        const host = createHost(`<evo-button [loading]="true">test</evo-button>`)
        host.detectChanges();
        expect(host.query('.evo-button_is-loading')).toExist();
        expect(host.query('evo-circular-loader')).toExist();
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
            expect(host.query(`.evo-button_color-${color}`)).toExist();
        }
    });

    it(`should be outline or solid and take corresponding shape if theme param is set`, () => {
        const host = createHost(`<evo-button [theme]="theme">test</evo-button>`)
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
            const outlineSelector = splitList.pop() === 'outline'
                ? '.evo-button.evo-button_is-outline'
                : '.evo-button:not(.evo-button_is-outline)';
            const shape = splitList.join('-');
            expect(host.query(`${outlineSelector}.evo-button_shape-${shape}`)).toExist();
        }
    });
})
