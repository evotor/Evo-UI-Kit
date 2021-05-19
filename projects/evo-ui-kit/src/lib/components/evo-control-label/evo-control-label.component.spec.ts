import { EvoControlLabelComponent } from './evo-control-label.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, TemplateRef, ViewChild } from '@angular/core';

const LABEL_TEXT_FROM_INPUT = 'LABEL TEXT FROM INPUT';
const LABEL_TEXT_FROM_TEMPLATE = 'LABEL TEXT FROM TEMPLATE';

@Component({
    template: `
        <evo-control-label [label]="labelParam" [context]="contextParam">
            <div class="projection">inner element</div>
        </evo-control-label>
        <ng-template
            #labelTemplate
            let-contextTest="contextTest"
        >{{ contextTest || labelTextFromTemplate }}</ng-template>
    `,
})
class TestHostComponent {
    @ViewChild('labelTemplate') templateRef: TemplateRef<any>;

    labelParam: string | TemplateRef<any> = '';
    contextParam = null;

    labelTextFromTemplate = LABEL_TEXT_FROM_TEMPLATE;
}

describe('EvoControlLabelComponent', () => {
    let component: EvoControlLabelComponent;
    let fixture: ComponentFixture<EvoControlLabelComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                EvoControlLabelComponent,
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(EvoControlLabelComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have empty label if [label] prop is missing', () => {
        expect(fixture.nativeElement.querySelector('.evo-control-label__text').innerText).toBe('');
    });

    it('should have text label if [label] prop is string', () => {
        component.label = LABEL_TEXT_FROM_INPUT;
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('.evo-control-label__text').innerText).toBe(LABEL_TEXT_FROM_INPUT);
    });

    it('should have text label if [label] prop is string and context is set', () => {
        component.label = LABEL_TEXT_FROM_INPUT;
        component.context = {test: 'ok'};
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('.evo-control-label__text').innerText).toBe(LABEL_TEXT_FROM_INPUT);
    });
});

describe('EvoControlLabelComponent: under test host', () => {
    let component: TestHostComponent;
    let fixture: ComponentFixture<TestHostComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                TestHostComponent,
                EvoControlLabelComponent,
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(TestHostComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have empty trimmed label if [label] prop is missing', () => {
        expect(fixture.nativeElement.querySelector('.evo-control-label__text').innerText.trim()).toBe('');
    });

    it('should have inner element projection', () => {
        expect(fixture.nativeElement.querySelector('.projection')).toBeTruthy();
    });

    it('should have text label if [label] prop is string', () => {
        component.labelParam = LABEL_TEXT_FROM_INPUT;
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('.evo-control-label__text').innerText).toBe(LABEL_TEXT_FROM_INPUT);
    });

    it('should support templateRef as [label] prop', () => {
        component.labelParam = component.templateRef;
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('.evo-control-label__text').innerText).toBe(LABEL_TEXT_FROM_TEMPLATE);
    });

    it('should apply [context] to templateRef as [label] prop', () => {
        const contextTest = 1;
        component.labelParam = component.templateRef;
        component.contextParam = {contextTest: contextTest};

        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('.evo-control-label__text').innerText).toBe(`${ contextTest }`);
    });
});
