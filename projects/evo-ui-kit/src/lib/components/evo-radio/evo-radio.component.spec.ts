import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvoRadioComponent } from './index';
import { getElementByClassName } from '../../utils/testing';
import { Component, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
    template: `
        <evo-radio
            [formControl]="control"
            [checkingByValue]="checkingByValue"
        ></evo-radio>
    `,
})
class TestHostComponent {
    @ViewChild(EvoRadioComponent) component: EvoRadioComponent;

    control = new FormControl('123', [Validators.required]);
    checkingByValue = '123';
}

describe('EvoRadioComponent', () => {
    let component: EvoRadioComponent;
    let hostComponent: TestHostComponent;
    let fixture: ComponentFixture<TestHostComponent>;
    const radioInputClass = '.evo-radio__input';

    beforeEach(async(() => {
        TestBed
            .configureTestingModule({
                declarations: [
                    EvoRadioComponent,
                ],
            })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TestHostComponent);
        hostComponent = fixture.componentInstance;
        fixture.detectChanges();
        component = hostComponent.component;
    });

    it('should create', () => {
        expect(component).toBeDefined();
    });

    it('should be true, checking by value', () => {
        hostComponent.checkingByValue = 'test';
        hostComponent.control.setValue('test');
        fixture.detectChanges();

        expect(getElementByClassName(fixture, radioInputClass)).toBeChecked();
    });
});
