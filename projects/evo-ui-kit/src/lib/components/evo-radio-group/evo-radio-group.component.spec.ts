import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { EvoRadioGroupComponent } from '../../evo-ui-kit.module';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { ViewChild, Component } from '@angular/core';

@Component({
    selector: 'evo-host-component',
    template: `
    <form [formGroup]="formModel">
        <evo-radio-group formControlName="radioGroupValue" [options]="options"></evo-radio-group>
    </form>`,
})
class TestHostComponent {
    @ViewChild(EvoRadioGroupComponent)
    public radioGroupComponent: EvoRadioGroupComponent;

    options: {[key: string]: any};
    formModel: FormGroup;
}

describe('EvoRadioGroupComponent', () => {
    let testHostComponent: TestHostComponent;
    let testHostFixture: ComponentFixture<TestHostComponent>;
    let radioInputEls: HTMLInputElement[];
    let initValue: string;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ FormsModule, ReactiveFormsModule ],
            declarations: [ EvoRadioGroupComponent, TestHostComponent ],
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
        initValue = testHostComponent.options.BLUE;
        testHostComponent.formModel = new FormBuilder().group({
            radioGroupValue: [ initValue, [] ],
        });
        testHostFixture.detectChanges();
    });

    it(`should have checked first radio input after construction`, fakeAsync(() => {
        // console.log(testHostFixture.nativeElement.innerHTML);
        radioInputEls = [ ...testHostFixture.nativeElement.querySelectorAll('.evo-radio-group__radio-control') ];
        // radioInputEls[0].dispatchEvent(new MouseEvent('click', null));
        // console.log(radioInputEls[0]);
        // console.log(testHostComponent.radioGroupComponent.value);
        // console.log(radioInputEls[0].checked);
        // console.log(radioInputEls[0].value);
        // console.log(initValue, testHostComponent.radioGroupComponent.value);
        expect(testHostComponent.radioGroupComponent.value === initValue).toBeTruthy(); // radioInputEls[0].checked
    }));
});
