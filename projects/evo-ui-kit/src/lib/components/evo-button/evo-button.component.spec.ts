import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EvoUiClassDirective, EvoButtonComponent } from '../../evo-ui-kit.module';
import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'evo-host-component',
    template: `
    <button evo-button
        [size]="size"
        [color]="color"
        [disabled]="disabled"
        [loading]="loading"
        >Some button</button>`,
})
class TestHostComponent {
    disabled: boolean;
    loading: boolean;
    color: string;
    size: string;

    @ViewChild(EvoButtonComponent)
    public tabsComponent: EvoButtonComponent;
}

describe('EvoButtonComponent', () => {
    let testHostComponent: TestHostComponent;
    let testHostFixture: ComponentFixture<TestHostComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                TestHostComponent,
                EvoUiClassDirective,
                EvoButtonComponent,
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        testHostFixture = TestBed.createComponent(TestHostComponent);
        testHostComponent = testHostFixture.componentInstance;
        testHostFixture.detectChanges();
    });

    it(`should be small if input size = 'small'`, () => {
        testHostComponent.size = 'small';
        testHostFixture.detectChanges();
        expect(testHostFixture.nativeElement
            .querySelector('.evo-button').classList.contains('evo-button_small')).toBeTruthy();
    });

    it(`should be darkblue if input color = 'darkblue'`, () => {
        testHostComponent.color = 'darkblue';
        testHostFixture.detectChanges();
        expect(testHostFixture.nativeElement
            .querySelector('.evo-button').classList.contains('evo-button_darkblue')).toBeTruthy();
    });

    it(`should be disabled if input disabled = true`, () => {
        testHostComponent.disabled = true;
        testHostFixture.detectChanges();
        expect(testHostFixture.nativeElement.querySelector('button').disabled).toBeTruthy();
    });

    it(`should contain dotts(spinner) if input loading = true`, () => {
        testHostComponent.loading = true;
        testHostFixture.detectChanges();
        expect(testHostFixture.nativeElement.querySelector('.evo-button__dots') != null).toBeTruthy();
    });

});
