import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { EvoSelectComponent } from './evo-select.component';
import { EvoUiClassDirective } from '../../evo-ui-kit.module';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ViewChild, Component } from '@angular/core';

@Component({
    selector: 'evo-host-component',
    template: `
    <form [formGroup]="formModel">
        <evo-select formControlName="qty">
            <option
                *ngFor="let option of options"
                [value]="option.value">{{ option.label }}</option>
        </evo-select>
    <form>`,
})
class TestHostComponent {
    options = [
        { label: 'One', value: '1' },
        { label: 'Two', value: '2' },
        { label: 'Three', value: '3' },
    ];

    @ViewChild(EvoSelectComponent)
    public selectComponent: EvoSelectComponent;

    formModel = new FormBuilder().group({
        qty: [ this.options[1].value, [] ],
    });
}

describe('EvoSelectComponent', () => {
    let testHostComponent: TestHostComponent;
    let testHostFixture: ComponentFixture<TestHostComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ FormsModule, ReactiveFormsModule ],
            declarations: [
                TestHostComponent,
                EvoSelectComponent,
                EvoUiClassDirective,
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        testHostFixture = TestBed.createComponent(TestHostComponent);
        testHostComponent = testHostFixture.componentInstance;
        testHostFixture.detectChanges();
    });

    it(`should have selected value = '2', after construction`, () => {
        expect(testHostComponent.selectComponent.selectedValue).toEqual('2');
    });

    it(`should have selected value = '3', after formControl changed`, () => {
        testHostComponent.formModel.get('qty').setValue('3');
        expect(testHostComponent.selectComponent.selectedValue).toEqual('3');
    });

    it(`should be disabled if formControl disabled`, fakeAsync(() => {
        testHostComponent.formModel.get('qty').disable();
        testHostFixture.detectChanges();
        tick();
        expect(testHostFixture.nativeElement.querySelector('.evo-select__native').disabled)
            .toBeTruthy();
    }));
});
