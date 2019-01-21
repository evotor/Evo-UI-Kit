import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EvoRadioGroupComponent, EvoUiClassDirective } from '../../evo-ui-kit.module';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { ViewChild, Component } from '@angular/core';
import { EvoRadioGroupDirections, EvoRadioGroupThemes } from './evo-radio-group.component';

@Component({
    selector: 'evo-host-component',
    template: `
    <form [formGroup]="formModel">
        <evo-radio-group
            formControlName="radioGroupValue"
            [options]="options"
            [value]="initValue"
            [theme]="theme"
            [direction]="direction"
            ></evo-radio-group>
    </form>`,
})
class TestHostComponent {
    @ViewChild(EvoRadioGroupComponent)
    public radioGroupComponent: EvoRadioGroupComponent;
    initValue: string;
    options: {[key: string]: any};
    formModel: FormGroup;
    theme: EvoRadioGroupThemes;
    direction: EvoRadioGroupDirections;
}

describe('EvoRadioGroupComponent', () => {
    let testHostComponent: TestHostComponent;
    let testHostFixture: ComponentFixture<TestHostComponent>;
    let radioInputEls: HTMLInputElement[];

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ FormsModule, ReactiveFormsModule ],
            declarations: [ EvoRadioGroupComponent, TestHostComponent, EvoUiClassDirective ],
        }).compileComponents();
    }));

    beforeEach(() => {
        testHostFixture = TestBed.createComponent(TestHostComponent);
        testHostComponent = testHostFixture.componentInstance;
        testHostComponent.options = {
            BLUE: {
                value: 'blue',
                presentationText: 'Синяя таблетка',
            },
            RED: {
                value: 'red',
                presentationText: 'Красная таблетка',
            },
        };
        testHostComponent.initValue = testHostComponent.options.BLUE.value;
        testHostComponent.formModel = new FormBuilder().group({
            radioGroupValue: [ testHostComponent.initValue, [] ],
        });
        testHostFixture.detectChanges();
        radioInputEls = [ ...testHostFixture.nativeElement.querySelectorAll('input[type="radio"]') ];
    });

    it(`should have checked first radio input after construction`, () => {
        expect(radioInputEls[0].checked).toBeTruthy();
    });

    it(`should have checked second radio input after click`, () => {
        [ ...testHostFixture.nativeElement.querySelectorAll('.evo-radio-group__radio') ][1]
            .dispatchEvent(new MouseEvent('click', null));
        testHostFixture.detectChanges();
        expect(radioInputEls[1].checked).toBeTruthy();
    });

    it(`should have specified labels`, () => {
        const labelsEls = [ ...testHostFixture.nativeElement.querySelectorAll('.evo-radio-group__radio-value') ];
        expect(labelsEls[0].textContent).toEqual(testHostComponent.options.BLUE.presentationText);
        expect(labelsEls[1].textContent).toEqual(testHostComponent.options.RED.presentationText);
    });

    it(`should have direction & theme classNames`, () => {
        const radioGroupEl = testHostFixture.nativeElement.querySelector('.evo-radio-group');
        const theme = EvoRadioGroupThemes.light;
        const direction = EvoRadioGroupDirections.column;
        testHostComponent.theme = theme;
        testHostComponent.direction = direction;
        testHostFixture.detectChanges();
        expect(radioGroupEl.classList.contains(`evo-radio-group_${theme}`)).toBeTruthy();
        expect(radioGroupEl.classList.contains(`evo-radio-group_${direction}`)).toBeTruthy();
    });
});
