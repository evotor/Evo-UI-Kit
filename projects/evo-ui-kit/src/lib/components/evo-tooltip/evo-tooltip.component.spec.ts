import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {EvoTooltipComponent} from './evo-tooltip.component';
import {EvoTooltipService} from './services/evo-tooltip.service';
import {Component, ElementRef, NO_ERRORS_SCHEMA, TemplateRef, ViewChild} from '@angular/core';
import {EvoTooltipPosition} from './enums/evo-tooltip-position';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EvoTooltipStyles} from './interfaces/evo-tooltip-styles';
import {EvoTooltipStyleVariable} from './enums/evo-tooltip-style-variable';
import {CommonModule} from '@angular/common';

@Component({
    selector: 'evo-host-component',
    template: `
        <div #tooltipParent>Parent</div>
        <evo-tooltip />
        <ng-template #testTemplate>
            <div>Test template content</div>
        </ng-template>
    `,
})
class TestHostComponent {
    @ViewChild(EvoTooltipComponent, {static: true}) tooltipComponent: EvoTooltipComponent;
    @ViewChild('testTemplate', {static: true}) testTemplate: TemplateRef<HTMLTemplateElement>;
    @ViewChild('tooltipParent', {static: true}) parentRef: ElementRef
}

describe('EvoTooltipComponent', () => {
    let testHostComponent: TestHostComponent;
    let testHostFixture: ComponentFixture<TestHostComponent>;
    let tooltipComponent: EvoTooltipComponent;
    let tooltipService: EvoTooltipService;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [EvoTooltipComponent, TestHostComponent],
                imports: [BrowserAnimationsModule, CommonModule],
                schemas: [NO_ERRORS_SCHEMA],
                providers: [EvoTooltipService],
            }).compileComponents();
        }),
    );

    beforeEach(() => {
        testHostFixture = TestBed.createComponent(TestHostComponent);
        testHostComponent = testHostFixture.componentInstance;
        tooltipComponent = testHostComponent.tooltipComponent;
        tooltipService = TestBed.inject(EvoTooltipService);
        tooltipService['_parentRef$'].next(testHostComponent.parentRef);
        testHostFixture.detectChanges();
    });

    it('should create', () => {
        expect(tooltipComponent).toBeTruthy();
    });

    it('should update position when position$ changes', () => {
        const position = EvoTooltipPosition.TOP;
        tooltipService['_position$'].next(position);
        testHostFixture.detectChanges();

        tooltipComponent.position$.subscribe((value) => {
            expect(value).toBe(position);
        });
    });

    it('should update string content when stringContent$ changes', () => {
        const content = 'Test content';
        tooltipService['_stringContent$'].next(content);
        testHostFixture.detectChanges();

        tooltipComponent.stringContent$.subscribe((value) => {
            expect(value).toBe(content);
        });
    });

    it('should update template content when templateContent$ changes', () => {
        const template = testHostComponent.testTemplate;
        tooltipService['_templateContent$'].next(template);
        testHostFixture.detectChanges();

        tooltipComponent.templateContent$.subscribe((value) => {
            expect(value).toBe(template);
        });
    });

    it('should update styles when styles$ changes', () => {
        const styles: EvoTooltipStyles = {
            [EvoTooltipStyleVariable.MAX_WIDTH]: 'auto',
            [EvoTooltipStyleVariable.PADDING]: 0,
        };
        tooltipService['_styles$'].next(styles);
        testHostFixture.detectChanges();

        tooltipComponent.styles$.subscribe((value) => {
            Object.keys(styles).forEach((key: string) => expect(value[key]).toEqual(styles[key]));
        });
    });

    it('should update visible arrow when visibleArrow$ changes', () => {
        const visibleArrow = false;
        tooltipService['_visibleArrow$'].next(visibleArrow);
        testHostFixture.detectChanges();

        tooltipComponent.visibleArrow$.subscribe((value) => {
            expect(value).toBe(visibleArrow);
        });
    });

    it('should unsubscribe from all observables on destroy', () => {
        const destroySpy = spyOn(tooltipComponent['_destroy$'], 'next');
        tooltipComponent.ngOnDestroy();
        expect(destroySpy).toHaveBeenCalled();
    });
});
