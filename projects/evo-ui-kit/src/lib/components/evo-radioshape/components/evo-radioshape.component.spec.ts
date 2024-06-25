import {FormsModule, UntypedFormControl} from '@angular/forms';
import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {EvoRadioshapeComponent} from './evo-radioshape.component';
import {EvoControlErrorComponent} from '../../evo-control-error/evo-control-error.component';
import {EvoUiClassDirective} from '../../../directives/evo-ui-class.directive';
import {Component, ViewChild} from '@angular/core';

@Component({
    selector: 'evo-host-component',
    template: `
        <evo-radioshape #radioshape1 class="radioshape1" />
        <evo-radioshape #radioshape2 class="radioshape2" />
        <evo-radioshape #radioshape3 class="radioshape3"><span>some content</span></evo-radioshape>
    `,
    standalone: true,
    imports: [FormsModule, EvoRadioshapeComponent],
})
class TestHostComponent {
    @ViewChild('radioshape1')
    radioshapeComponentFirst: EvoRadioshapeComponent;

    @ViewChild('radioshape2')
    radioshapeComponentSecond: EvoRadioshapeComponent;

    @ViewChild('radioshape3')
    radioshapeComponentThird: EvoRadioshapeComponent;
}

describe('EvoRadioshapeComponent', () => {
    let testHostComponent: TestHostComponent;
    let testHostFixture: ComponentFixture<TestHostComponent>;
    let radioshapeElFirst: HTMLElement;
    let radioshapeElSecond: HTMLElement;
    let radioshapeElThird: HTMLElement;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                EvoRadioshapeComponent,
                EvoUiClassDirective,
                EvoControlErrorComponent,
                TestHostComponent,
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        testHostFixture = TestBed.createComponent(TestHostComponent);
        testHostComponent = testHostFixture.componentInstance;
        radioshapeElFirst = testHostFixture.nativeElement.querySelector('.radioshape1 .evo-radioshape');
        radioshapeElSecond = testHostFixture.nativeElement.querySelector('.radioshape2 .evo-radioshape');
        radioshapeElThird = testHostFixture.nativeElement.querySelector('.radioshape3 .evo-radioshape');
        testHostFixture.detectChanges();
    });

    it('should be created', () => {
        expect(testHostComponent).toBeTruthy();
        expect(testHostComponent.radioshapeComponentFirst).toBeTruthy();
        expect(testHostComponent.radioshapeComponentSecond).toBeTruthy();
        expect(testHostComponent.radioshapeComponentThird).toBeTruthy();
    });

    it('becomes disabled when disable input is true', () => {
        testHostComponent.radioshapeComponentFirst.value = 'some value';
        testHostFixture.detectChanges();
        expect(radioshapeElFirst.classList.contains('evo-radioshape_disabled')).toBeFalsy();
        const inputElement = <HTMLInputElement>radioshapeElFirst.querySelector('.evo-radioshape__input');
        expect(inputElement.disabled).toBeFalsy();

        testHostComponent.radioshapeComponentFirst.disabled = true;
        testHostFixture.detectChanges();
        expect(radioshapeElFirst.classList.contains('evo-radioshape_disabled')).toBeTruthy();
        expect(inputElement.disabled).toBeTruthy();
    });

    it('shows input element only when value or forceChecked params are passed', () => {
        let inputElement = <HTMLInputElement>radioshapeElFirst.querySelector('.evo-radioshape__input');
        expect(inputElement).toBeFalsy();

        testHostComponent.radioshapeComponentFirst.value = 'some value';
        testHostFixture.detectChanges();
        inputElement = <HTMLInputElement>radioshapeElFirst.querySelector('.evo-radioshape__input');
        expect(inputElement).toBeTruthy();

        testHostComponent.radioshapeComponentFirst.value = null;
        testHostComponent.radioshapeComponentFirst.forceChecked = true;
        testHostFixture.detectChanges();
        inputElement = <HTMLInputElement>radioshapeElFirst.querySelector('.evo-radioshape__input');
        expect(inputElement).toBeTruthy();
    });

    it('places the passed template in ng-content slot', () => {
        expect(radioshapeElThird.querySelector('.evo-radioshape__content').children.length).toEqual(1);
        const elem = <Element>radioshapeElThird.querySelector('.evo-radioshape__content').firstChild;
        expect(elem.innerHTML).toEqual('some content');
    });

    it('is checked if forceChecked param is true', () => {
        testHostComponent.radioshapeComponentFirst.value = 'some text';
        testHostComponent.radioshapeComponentFirst.forceChecked = false;
        testHostFixture.detectChanges();

        expect(testHostComponent.radioshapeComponentFirst.checked).toBeFalsy();
        expect(radioshapeElFirst.classList.contains('evo-radioshape_checked')).toBeFalsy();
        const inputElement = <HTMLInputElement>radioshapeElFirst.querySelector('.evo-radioshape__input');
        expect(inputElement.checked).toBeFalsy();

        testHostComponent.radioshapeComponentFirst.forceChecked = true;
        testHostFixture.detectChanges();

        expect(testHostComponent.radioshapeComponentFirst.checked).toBeTruthy();
        expect(radioshapeElFirst.classList.contains('evo-radioshape_checked')).toBeTruthy();
        expect(inputElement.checked).toBeTruthy();
    });

    it('is checked if control value is equal to value', () => {
        const value = 'value';
        testHostComponent.radioshapeComponentFirst.forceChecked = false;
        testHostComponent.radioshapeComponentFirst.value = value;
        testHostFixture.detectChanges();
        expect(testHostComponent.radioshapeComponentFirst.checked).toBeFalsy();

        testHostComponent.radioshapeComponentFirst.control = new UntypedFormControl('another value');
        testHostFixture.detectChanges();
        expect(testHostComponent.radioshapeComponentFirst.checked).toBeFalsy();

        testHostComponent.radioshapeComponentFirst.control.setValue(value);
        testHostFixture.detectChanges();
        expect(testHostComponent.radioshapeComponentFirst.checked).toBeTruthy();
    });

    it('calls handleOnChange method when input is changed', () => {
        testHostComponent.radioshapeComponentFirst.value = 'some text';
        testHostFixture.detectChanges();

        spyOn(testHostComponent.radioshapeComponentFirst, 'handleOnChange');
        radioshapeElFirst.querySelector('.evo-radioshape__input').dispatchEvent(new Event('change'));
        expect(testHostComponent.radioshapeComponentFirst.handleOnChange).toHaveBeenCalled();
    });

    it('make other elements unchecked when one is check', () => {
        const val1 = 'text 1';
        const val2 = 'text 2';
        const val3 = 'text 3';

        const control = new UntypedFormControl(val1);

        testHostComponent.radioshapeComponentFirst.value = val1;
        testHostComponent.radioshapeComponentFirst.forceChecked = false;
        testHostComponent.radioshapeComponentFirst.control = control;
        testHostFixture.detectChanges();
        expect(testHostComponent.radioshapeComponentFirst.checked).toBeTruthy();

        testHostComponent.radioshapeComponentSecond.value = val2;
        testHostComponent.radioshapeComponentSecond.forceChecked = false;
        testHostComponent.radioshapeComponentSecond.control = control;
        testHostFixture.detectChanges();
        expect(testHostComponent.radioshapeComponentSecond.checked).toBeFalsy();

        testHostComponent.radioshapeComponentThird.value = val3;
        testHostComponent.radioshapeComponentThird.forceChecked = false;
        testHostComponent.radioshapeComponentThird.control = control;
        testHostFixture.detectChanges();
        expect(testHostComponent.radioshapeComponentThird.checked).toBeFalsy();

        control.setValue(val2);
        testHostFixture.detectChanges();
        expect(testHostComponent.radioshapeComponentFirst.checked).toBeFalsy();
        expect(testHostComponent.radioshapeComponentSecond.checked).toBeTruthy();
        expect(testHostComponent.radioshapeComponentThird.checked).toBeFalsy();

        control.setValue(val3);
        testHostFixture.detectChanges();
        expect(testHostComponent.radioshapeComponentFirst.checked).toBeFalsy();
        expect(testHostComponent.radioshapeComponentSecond.checked).toBeFalsy();
        expect(testHostComponent.radioshapeComponentThird.checked).toBeTruthy();
    });
});
