import { EvoIconButtonColor, EvoIconButtonComponent } from './evo-icon-button.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { EvoIconButtonModule } from './evo-icon-button.module';
import { createHostFactory, SpectatorHost } from '@ngneat/spectator';
import { By } from '@angular/platform-browser';

@Component({
    template: '',
})
class TestHostComponent {
    @ViewChild(EvoIconButtonComponent) evoIconButtonComponent;
    shape = 'download';
    label: string;
    color: string | EvoIconButtonColor;
    loading: boolean;
    disabled: boolean;
}

const createHost = createHostFactory({
    component: EvoIconButtonComponent,
    imports: [
        EvoIconButtonModule,
    ],
    host: TestHostComponent,
});

const wrapperSelector = 'evo-icon-button';

describe('EvoIconButtonComponent: basic', () => {
    let component: EvoIconButtonComponent;
    let fixture: ComponentFixture<EvoIconButtonComponent>;
    let wrapperEl: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                EvoIconButtonModule,
            ],
        }).overrideComponent(EvoIconButtonComponent, {
            set: {changeDetection: ChangeDetectionStrategy.Default},
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EvoIconButtonComponent);
        component = fixture.componentInstance;
        component.shape = 'download';
        fixture.detectChanges();
        wrapperEl = fixture.nativeElement.querySelector(`.${ wrapperSelector }`);
    });

    it('should create', function () {
        expect(component).toBeTruthy();
    });

    it('should have default color class if "color" property is missing', function () {
        expect(wrapperEl.classList.contains(`${ wrapperSelector }_color-link`)).toBeTruthy();
    });

    it('should have empty label if component contents is empty', function () {
        expect(wrapperEl.querySelector(`.${ wrapperSelector }__label`).innerHTML).toBe('');
    });

    it('should not have loader if "loading" property is undefined or false', function () {
        expect(wrapperEl.querySelector(`.${ wrapperSelector }__loading-spinner`)).not.toExist();
    });
});

describe('EvoIconButtonComponent: wrapped', () => {
    let host: SpectatorHost<EvoIconButtonComponent, TestHostComponent>;
    let hostComponent: TestHostComponent;
    let component: EvoIconButtonComponent;
    let wrapperEl: HTMLElement;

    const initHost = (template?: string) => {
        const hostTemplate = template
            || '<button evo-icon-button [shape]="shape" [disabled]="disabled" [loading]="loading" [color]="color">{{label}}</button>';
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

    it('should have loader if loader property is true', function () {
        initHost();
        hostComponent.loading = true;
        host.detectChanges();
        expect(wrapperEl.querySelector(`.${ wrapperSelector }__loading-spinner`)).toExist();
    });
});
