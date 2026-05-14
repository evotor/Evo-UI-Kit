import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {EvoTooltipComponent} from './evo-tooltip.component';
import {EvoTooltipService} from './services/evo-tooltip.service';
import {Component, ElementRef, NO_ERRORS_SCHEMA, TemplateRef, ViewChild} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {OverlayContainer} from '@angular/cdk/overlay';
import {EvoTooltipPosition} from './enums/evo-tooltip-position';
import {EvoTooltipStyleVariable} from './enums/evo-tooltip-style-variable';

@Component({
    selector: 'evo-host-component',
    template: `
        <div #trigger>Hover me</div>

        <ng-template #testTemplate>
            <div class="tooltip-custom-template">Test template content</div>
        </ng-template>
    `,
})
class TestHostComponent {
    @ViewChild('trigger', {static: true}) triggerEl: ElementRef;
    @ViewChild('testTemplate', {static: true}) testTemplate: TemplateRef<HTMLTemplateElement>;
}

describe('EvoTooltipComponent', () => {
    const textTooltipContent = 'Text tooltip content';

    let overlayContainer: OverlayContainer;
    let overlayContainerElement: HTMLElement;

    let testHostComponent: TestHostComponent;
    let testHostFixture: ComponentFixture<TestHostComponent>;
    let tooltipService: EvoTooltipService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TestHostComponent],
            imports: [BrowserAnimationsModule, CommonModule, EvoTooltipComponent],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [EvoTooltipService],
        }).compileComponents();

        overlayContainer = TestBed.inject(OverlayContainer);
        overlayContainerElement = overlayContainer.getContainerElement();

        testHostFixture = TestBed.createComponent(TestHostComponent);
        testHostComponent = testHostFixture.componentInstance;

        tooltipService = TestBed.inject(EvoTooltipService);
        testHostFixture.detectChanges();
    });

    afterEach(() => {
        overlayContainer.ngOnDestroy();
    });

    const showTooltip = (
        content: string | TemplateRef<HTMLElement>,
        position = EvoTooltipPosition.TOP,
        hasArrow = true,
    ): HTMLElement => {
        tooltipService.showTooltip({
            parentRef: testHostComponent.triggerEl,
            content,
            position,
            hasArrow,
        });
        tick();
        testHostFixture.detectChanges();

        return overlayContainerElement.querySelector('evo-tooltip');
    };

    const getTooltipElementFromHost = (host: HTMLElement): HTMLElement => {
        return host.querySelector('.evo-tooltip');
    };

    it('should create', fakeAsync(() => {
        const tooltipEl = showTooltip(textTooltipContent);

        expect(tooltipEl).toBeTruthy();
    }));

    it('should render correct string content when string is passed', fakeAsync(() => {
        const tooltipHost = showTooltip(textTooltipContent);

        expect(tooltipHost.textContent?.trim()).toBe(textTooltipContent);
    }));

    it('should render correct template content when template is passed', fakeAsync(() => {
        const tooltipHost = showTooltip(testHostComponent.testTemplate);

        expect(tooltipHost.querySelector('.tooltip-custom-template')).toBeTruthy();
    }));

    it('should apply the correct host classes', fakeAsync(() => {
        const tooltipHost = showTooltip(textTooltipContent);

        tooltipService.setTooltipClass(['dynamic-class-1', 'dynamic-class-2']);
        testHostFixture.detectChanges();

        expect(tooltipHost.classList.contains('dynamic-class-1')).toBeTrue();
        expect(tooltipHost.classList.contains('dynamic-class-2')).toBeTrue();
    }));

    it('should apply custom styles to the style attribute', fakeAsync(() => {
        const testBackground = 'red';
        const testPadding = '12px';

        tooltipService.setTooltipStyles({
            [EvoTooltipStyleVariable.BACKGROUND_COLOR]: testBackground,
            [EvoTooltipStyleVariable.PADDING]: testPadding,
        });

        const tooltipHost = showTooltip(textTooltipContent);
        const tooltip = getTooltipElementFromHost(tooltipHost);

        expect(tooltip.style.getPropertyValue(EvoTooltipStyleVariable.BACKGROUND_COLOR)).toBe(testBackground);
        expect(tooltip.style.getPropertyValue(EvoTooltipStyleVariable.PADDING)).toBe(testPadding);
    }));

    it('should apply the correct position modifier class', fakeAsync(() => {
        const position = EvoTooltipPosition.TOP;
        const tooltipHost = showTooltip(textTooltipContent, position);
        const tooltip = getTooltipElementFromHost(tooltipHost);

        expect(tooltip.classList.contains(`evo-tooltip_${position}`)).toBeTrue();
    }));

    it('should add "not-arrow" class when arrow is hidden', fakeAsync(() => {
        const tooltipHost = showTooltip(textTooltipContent, EvoTooltipPosition.TOP, false);
        const tooltip = getTooltipElementFromHost(tooltipHost);

        expect(tooltip?.classList.contains('evo-tooltip_not-arrow')).toBeTrue();
    }));

    it('should apply arrow positions to the style attribute', fakeAsync(() => {
        const tooltipHost = showTooltip(textTooltipContent);
        const tooltip = getTooltipElementFromHost(tooltipHost);

        expect(tooltip.style.getPropertyValue(EvoTooltipStyleVariable.HORIZONTAL_POSITION_ARROW)).toBeTruthy();
        expect(tooltip.style.getPropertyValue(EvoTooltipStyleVariable.VERTICAL_POSITION_ARROW)).toBeTruthy();
    }));

    it('should unsubscribe from service updates on destroy', fakeAsync(() => {
        const tooltipHost = showTooltip(textTooltipContent);

        tooltipService.hideTooltip();

        const classTest = 'should-not-be-applied';

        tooltipService.setTooltipClass([classTest]);

        expect(tooltipHost.classList.contains(classTest)).toBeFalse();
    }));
});
