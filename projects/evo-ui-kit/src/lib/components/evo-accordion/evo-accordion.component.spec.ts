import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EvoAccordionContentComponent } from './evo-accordion-content/evo-accordion-content.component';
import { EvoAccordionPanelComponent } from './evo-accordion-panel/evo-accordion-panel.component';
import { EvoAccordionTitleComponent } from './evo-accordion-title/evo-accordion-title.component';
import { EvoAccordionComponent } from './evo-accordion.component';
import { EvoIconModule } from '../evo-icon/evo-icon.module';
import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { iconExpandMore } from 'projects/evo-ui-kit/icons/navigation';
import { By } from '@angular/platform-browser';
import { EvoUiKitModule } from '../../evo-ui-kit.module';

@Component({
    template: `
    <evo-accordion>
        <evo-accordion-panel #testPanel>
            <evo-accordion-title label="Panel 1"></evo-accordion-title>
            <evo-accordion-content *evoIsExpanded></evo-accordion-content>
        </evo-accordion-panel>
        <evo-accordion-panel>
            <evo-accordion-title label="Panel 2"></evo-accordion-title>
            <evo-accordion-content *evoIsExpanded></evo-accordion-content>
        </evo-accordion-panel>
    </evo-accordion>
    `
})
export class TestHostComponent {
    @ViewChild('testPanel') testPanel: EvoAccordionPanelComponent;
}

describe('EvoAccordionComponent', () => {
    let component: TestHostComponent;
    let fixture: ComponentFixture<TestHostComponent>;

    beforeEach(async(() => {
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
                EvoUiKitModule,
                EvoIconModule.forRoot([
                    {
                        name: 'navigation',
                        shapes: {
                            expand: iconExpandMore
                        }
                    }
                ])
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TestHostComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should accordion create', () => {
        expect(component).toBeTruthy();
    });

    it('not should EvoAccordionContent component with expanded = false', () => {
        expect(fixture.debugElement.query(By.css('evo-accordion-content'))).toBeFalsy();
    });

    it('should panel expanded', () => {
        component.testPanel.toggle();
        expect(fixture.debugElement.query(By.css('evo-accordion-content'))).toBeTruthy();
    });
});
