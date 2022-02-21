import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EvoButtonComponent, EvoButtonSizes, EvoButtonStyles } from './index';
import { ChangeDetectionStrategy } from '@angular/core';
import { EvoUiClassDirective } from '../../directives/';

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
            set: { changeDetection: ChangeDetectionStrategy.Default },
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EvoButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        buttonEl = fixture.nativeElement.querySelector('.evo-button');
    });

    it(`should be small if input size = ${EvoButtonSizes.small}`, () => {
        component.size = EvoButtonSizes.small;
        fixture.detectChanges();
        expect(buttonEl.classList.contains('evo-button_small')).toBeTruthy();
    });

    it(`should be darkblue if input color = ${EvoButtonStyles.darkblue}`, () => {
        component.color = EvoButtonStyles.darkblue;
        fixture.detectChanges();
        expect(buttonEl.classList.contains('evo-button_darkblue')).toBeTruthy();
    });

    it(`should be disabled if input disabled = true`, () => {
        component.isDisabled = true;
        fixture.detectChanges();
        expect(buttonEl.classList.contains('evo-button_disabled')).toBeTruthy();
    });

    it(`should contain dotts(spinner) if input loading = true`, () => {
        component.isLoading = true;
        fixture.detectChanges();
        expect(buttonEl.querySelector('.evo-button__dots') != null).toBeTruthy();
    });

});
