import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {EvoButtonOldComponent, EvoButtonSizes, EvoButtonStyles} from '../../index';
import {ChangeDetectionStrategy} from '@angular/core';
import {EvoUiClassDirective} from '../../../../directives';

describe('EvoButtonOldComponent', () => {
    let component: EvoButtonOldComponent;
    let fixture: ComponentFixture<EvoButtonOldComponent>;
    let buttonEl: HTMLElement;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [EvoButtonOldComponent, EvoUiClassDirective],
            })
                .overrideComponent(EvoButtonOldComponent, {
                    set: {changeDetection: ChangeDetectionStrategy.Default},
                })
                .compileComponents();
        }),
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(EvoButtonOldComponent);
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
        component.disabled = true;
        fixture.detectChanges();
        expect(buttonEl.classList.contains('evo-button_disabled')).toBeTruthy();
    });

    it(`should contain dotts(spinner) if input loading = true`, () => {
        component.loading = true;
        fixture.detectChanges();
        expect(buttonEl.querySelector('.evo-button__dots') != null).toBeTruthy();
    });
});
