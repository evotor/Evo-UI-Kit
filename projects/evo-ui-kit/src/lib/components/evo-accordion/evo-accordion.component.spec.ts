import {ComponentFixture, fakeAsync, TestBed, tick, waitForAsync} from '@angular/core/testing';
import {EvoAccordionContentComponent} from './evo-accordion-content/evo-accordion-content.component';
import {EvoAccordionPanelComponent} from './evo-accordion-panel/evo-accordion-panel.component';
import {EvoAccordionTitleComponent} from './evo-accordion-title/evo-accordion-title.component';
import {EvoAccordionComponent} from './evo-accordion.component';
import {EvoIconModule} from '../evo-icon/evo-icon.module';
import {Component, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {By} from '@angular/platform-browser';
import {EvoUiKitModule} from '../../evo-ui-kit.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {iconUnfoldLess, iconUnfoldMore} from '@evotor-dev/ui-kit/icons/navigation';

@Component({
    template: `
        <evo-accordion>
            <evo-accordion-panel #testPanel1>
                <evo-accordion-title label="Panel 1"></evo-accordion-title>
                <evo-accordion-content>Panel 1 content</evo-accordion-content>
            </evo-accordion-panel>
            <evo-accordion-panel #testPanel2>
                <evo-accordion-title label="Panel 2"></evo-accordion-title>
                <evo-accordion-content *evoIsExpanded="testIsExpanded">Panel 2 content</evo-accordion-content>
            </evo-accordion-panel>
        </evo-accordion>
    `,
})
export class TestHostComponent {
    @ViewChild('testPanel1') testPanel1: EvoAccordionPanelComponent;
    @ViewChild('testPanel2') testPanel2: EvoAccordionPanelComponent;
    testIsExpanded = false;
}

describe('EvoAccordionComponent', () => {
    let component: TestHostComponent;
    let fixture: ComponentFixture<TestHostComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [
                EvoAccordionComponent,
                EvoAccordionTitleComponent,
                EvoAccordionPanelComponent,
                EvoAccordionContentComponent,
                TestHostComponent
            ],
            imports: [
                CommonModule,
                BrowserAnimationsModule,
                EvoUiKitModule,
                EvoIconModule.forRoot([
                    {
                        name: 'navigation',
                        shapes: {
                            unfold: iconUnfoldMore,
                            fold: iconUnfoldLess,
                        },
                    }
                ])
            ]
        }).compileComponents();
    }));

    beforeEach(fakeAsync(() => {
        fixture = TestBed.createComponent(TestHostComponent);
        component = fixture.componentInstance;
        tick(300);
        fixture.detectChanges();
    }));

    it('should accordion create', () => {
        expect(component).toBeTruthy();
    });

    it('should hide content default, without evoIsExpanded directive', () => {
        const contentElement = fixture.debugElement.query(By.css('evo-accordion-panel:nth-child(1) evo-accordion-content'));
        expect(contentElement.styles.height === '0px').toBeTruthy();
    });

    it('should show content after panel title click, without evoIsExpanded directive', fakeAsync(() => {
        const titleElement = fixture.debugElement.query(By.css('evo-accordion-panel:nth-child(1) evo-accordion-title'));
        titleElement.triggerEventHandler('click', {});
        tick(300);
        fixture.detectChanges();
        const contentElement = fixture.debugElement.query(By.css('evo-accordion-panel:nth-child(1) evo-accordion-content'));
        expect(contentElement.styles.height === '0px').toBeFalsy();
    }));

    it('should show content after panel toggle, without evoIsExpanded directive', fakeAsync(() => {
        component.testPanel1.toggle();
        tick(300);
        fixture.detectChanges();
        const contentElement = fixture.debugElement.query(By.css('evo-accordion-panel:nth-child(1) evo-accordion-content'));
        expect(contentElement.styles.height === '0px').toBeFalsy();
    }));

    it('should hide content with expanded = false', () => {
        const evoAccordionContentElement = fixture.debugElement.query(By.css('evo-accordion-panel:nth-child(2) evo-accordion-content'));
        expect(evoAccordionContentElement).not.toBeTruthy();
    });

    it('should show content with expanded = true', () => {
        component.testIsExpanded = true;
        fixture.detectChanges();
        const evoAccordionContentElement = fixture.debugElement.query(By.css('evo-accordion-panel:nth-child(2) evo-accordion-content'));
        expect(evoAccordionContentElement).toBeTruthy();
    });

    it('should show content after toggle panel', () => {
        component.testPanel2.toggle();
        const evoAccordionContentElement = fixture.debugElement.query(By.css('evo-accordion-panel:nth-child(2) evo-accordion-content'));
        expect(evoAccordionContentElement).toBeTruthy();
    });
});
