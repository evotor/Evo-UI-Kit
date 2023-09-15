import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { EvoTooltipDirective } from './evo-tooltip.directive';
import { EvoTooltipService } from '../services/evo-tooltip.service';

@Component({
    template: `
        <div evoTooltip="Tooltip content" evoTooltipPosition="top"></div>
    `,
})
class TestComponent {}

describe('EvoTooltipDirective', () => {
    let component: TestComponent;
    let fixture: ComponentFixture<TestComponent>;
    let tooltipService: EvoTooltipService;
    let directiveElement: DebugElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TestComponent, EvoTooltipDirective],
            providers: [EvoTooltipService],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;
        tooltipService = TestBed.inject(EvoTooltipService);
        directiveElement = fixture.debugElement.query(By.directive(EvoTooltipDirective));
    });

    it('should create an instance', () => {
        const directive = directiveElement.injector.get(EvoTooltipDirective);
        expect(directive).toBeTruthy();
    });

    xit('should show tooltip on mouseenter', fakeAsync(() => {
        spyOn(tooltipService, 'showTooltip');

        const element = directiveElement.nativeElement;
        element.dispatchEvent(new MouseEvent('mouseenter'));
        fixture.detectChanges();
        tick();
        expect(tooltipService.showTooltip).toHaveBeenCalled();
    }));

    xit('should hide tooltip on ngOnDestroy', () => {
        spyOn(tooltipService, 'hideTooltip');

        fixture.destroy();

        expect(tooltipService.hideTooltip).toHaveBeenCalled();
    });
});
