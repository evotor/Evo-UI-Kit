import { EvoIconButtonColor, EvoIconButtonComponent } from './evo-icon-button.component';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { createHostFactory, SpectatorHost } from '@ngneat/spectator';
import { By } from '@angular/platform-browser';
import { EvoIconButtonTheme } from './types';
import { EvoIconButtonSize } from './types/evo-icon-button-size';

@Component({
    selector: 'evo-test-host-component',
    template: '',
})
class TestHostComponent {
    @ViewChild(EvoIconButtonComponent) evoIconButtonComponent;
    shape = 'download';
    label: string;
    color: string | EvoIconButtonColor;
    theme: EvoIconButtonTheme;
    size: EvoIconButtonSize;
    loading: boolean;
    disabled: boolean;
}

const createHost = createHostFactory({
    component: EvoIconButtonComponent,
    host: TestHostComponent,
});

const wrapperSelector = 'evo-icon-button';

describe('EvoIconButtonComponent: basic', () => {
    let component: EvoIconButtonComponent;
    let fixture: ComponentFixture<EvoIconButtonComponent>;
    let wrapperEl: HTMLElement;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [
                EvoIconButtonComponent,
            ],
        }).overrideComponent(EvoIconButtonComponent, {
            set: {changeDetection: ChangeDetectionStrategy.Default},
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EvoIconButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        wrapperEl = fixture.nativeElement.querySelector(`.${ wrapperSelector }`);
    });

    it('should create', function () {
        expect(component).toBeTruthy();
    });

    it('should have default color class if "color" property is missing', function () {
        expect(wrapperEl.classList.contains(`${ wrapperSelector }_color-link`)).toBeTruthy();
    });

    it('should have default theme class if "theme" property is missing', function () {
        expect(wrapperEl.classList.contains(`${ wrapperSelector }_theme-default`)).toBeTruthy();
    });

    it('should not have a size class if "size" property is missing', function () {
        expect(wrapperEl.classList.contains(`${ wrapperSelector }_size-small`)).not.toExist();
    });

    it('should have empty label if component contents is empty', function () {
        expect(wrapperEl.querySelector(`.${ wrapperSelector }__label`).innerHTML).toBe('');
    });

    it('should not have loader if "loading" property is undefined or false', function () {
        expect(wrapperEl.querySelector(`.${ wrapperSelector }__loader`)).not.toExist();
    });
});

describe('EvoIconButtonComponent: wrapped', () => {
    let host: SpectatorHost<EvoIconButtonComponent, TestHostComponent>;
    let hostComponent: TestHostComponent;
    let component: EvoIconButtonComponent;
    let wrapperEl: HTMLElement;

    const initHost = (template?: string) => {
        const hostTemplate = template
            || `
<button evo-icon-button [disabled]="disabled" [loading]="loading" [color]="color" [theme]="theme" [size]="'small'">
    <evo-icon shape="download"></evo-icon>
    {{label}}
</button>
`;
        host = createHost(hostTemplate);
        hostComponent = host.hostComponent;
        component = host.hostComponent.evoIconButtonComponent;
        wrapperEl = host.debugElement.query(By.css(`.${ wrapperSelector }`)).nativeElement;
    };

    it('should have proper color class if "color" property is set', function () {
        const color = EvoIconButtonColor.danger;
        initHost();
        hostComponent.color = color;
        host.detectChanges();
        expect(wrapperEl.classList.contains(`${ wrapperSelector }_color-${ color }`)).toBeTruthy();
    });

    it('should have proper theme class if "theme" property is set', function () {
        initHost();
        const theme: EvoIconButtonTheme = 'rectangle';
        hostComponent.theme = theme;
        host.detectChanges();
        expect(wrapperEl.classList.contains(`${ wrapperSelector }_theme-${ theme }`)).toBeTruthy();
    });

    it('should have proper size class if "size" property is set', function () {
        initHost();
        const size: EvoIconButtonSize = 'small';
        hostComponent.size = size;
        host.detectChanges();
        expect(wrapperEl.classList.contains(`${ wrapperSelector }_size-${ size }`)).toBeTruthy();
    });

    it('should have loader if loading property is true', function () {
        initHost();
        hostComponent.loading = true;
        host.detectChanges();
        expect(wrapperEl.querySelector(`.${ wrapperSelector }__loader`)).toExist();
    });

    it('should have icon if evo-icon is in contents', function () {
        initHost('<button evo-icon-button><evo-icon shape="download"></evo-icon></button>');
        expect(wrapperEl.querySelector(`.${ wrapperSelector }__icon-wrapper`).querySelector('evo-icon')).toExist();
    });

    it('should have overriding icon with loader, if evo-icon is contents and loading property is true', () => {
        initHost();
        hostComponent.loading = true;
        host.detectChanges();
        expect(wrapperEl.querySelector(`.${wrapperSelector}__loader`) &&
            !wrapperEl.querySelector(`.${wrapperSelector}__icon-wrapper`)).toBeTruthy();
    });
});
