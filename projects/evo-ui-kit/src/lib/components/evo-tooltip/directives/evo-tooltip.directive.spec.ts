import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { EvoTooltipDirective } from './evo-tooltip.directive';
import { Component } from '@angular/core';
import { EvoTooltipPosition } from '../enums/evo-tooltip-position';
import { EvoTooltipStyles } from '../interfaces/evo-tooltip-styles';
import { EvoTooltipVariableArrowPosition } from '../enums/evo-tooltip-variable-arrow-position';
import { CommonModule } from '@angular/common';
import { EvoTooltipService } from '../services/evo-tooltip.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { first } from 'rxjs/operators';
import { EvoTooltipComponent } from '../evo-tooltip.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

@Component({
    template: `
        <div evoTooltip="Test tooltip"
             [evoTooltipPosition]="position"
             [evoTooltipDisabled]="disabled"
             [evoTooltipConfig]="config"
             [evoTooltipVisibleArrow]="visibleArrow"
             [evoTooltipStyles]="styles"
             [evoTooltipClass]="classes"
             (evoTooltipOpen)="onOpen()"
             (evoTooltipClose)="onClose()">
            Hover me
        </div>
    `,
})
class TestHostComponent {
    position = EvoTooltipPosition.BOTTOM;
    disabled = false;
    config = { showDelay: 0, hideDelay: 0 };
    visibleArrow = true;
    styles: EvoTooltipStyles = {
        [EvoTooltipVariableArrowPosition.VERTICAL_POSITION_ARROW]: '10px',
        [EvoTooltipVariableArrowPosition.HORIZONTAL_POSITION_ARROW]: '20px',
    };
    classes = ['class-1', 'class-2'];
    onOpen = jasmine.createSpy('onOpen');
    onClose = jasmine.createSpy('onClose');
}

describe('EvoTooltipDirective', () => {
    let component: TestHostComponent;
    let fixture: ComponentFixture<TestHostComponent>;
    let directive: EvoTooltipDirective;
    let tooltipService: EvoTooltipService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TestHostComponent, EvoTooltipDirective, EvoTooltipComponent],
            imports: [CommonModule, BrowserAnimationsModule],
            providers: [EvoTooltipService],
            schemas: [NO_ERRORS_SCHEMA],
        }).compileComponents();

        fixture = TestBed.createComponent(TestHostComponent);
        component = fixture.componentInstance;
        directive = fixture.debugElement.children[0].injector.get(EvoTooltipDirective);
        tooltipService = TestBed.inject(EvoTooltipService);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(directive).toBeTruthy();
    });

    it('should have correct host classes', () => {
        const element = fixture.debugElement.children[0].nativeElement;
        expect(element.classList.contains('evo-tooltip-trigger')).toBeTrue();
    });

    it('should add disabled class when disabled', () => {
        component.disabled = true;
        fixture.detectChanges();
        const element = fixture.debugElement.children[0].nativeElement;
        expect(element.classList.contains('evo-tooltip-trigger_disabled')).toBeTrue();
    });

    it('should emit open event when tooltip is shown', fakeAsync(() => {
        directive.show();
        tick(0);
        fixture.detectChanges();
        expect(component.onOpen).toHaveBeenCalled();
    }));

    it('should emit close event when tooltip is hidden', fakeAsync(() => {
        directive.show();
        tick(0);
        fixture.detectChanges();
        directive.hide();
        tick(0);
        fixture.detectChanges();
        expect(component.onClose).toHaveBeenCalled();
    }));

    it('should not show tooltip when disabled', fakeAsync(() => {
        component.disabled = true;
        fixture.detectChanges();
        directive.show();
        tick(0);
        fixture.detectChanges();
        expect(component.onOpen).not.toHaveBeenCalled();
    }));

    it('should not show tooltip when content is empty', fakeAsync(() => {
        directive.content = null;
        directive.show();
        tick(0);
        fixture.detectChanges();
        expect(component.onOpen).not.toHaveBeenCalled();
    }));

    it('should handle mouseenter event', fakeAsync(() => {
        const element = fixture.debugElement.children[0].nativeElement;
        element.dispatchEvent(new MouseEvent('mouseenter'));
        tick(0);
        fixture.detectChanges();
        tooltipService.isOpen$.pipe(first()).subscribe(isOpen => {
            expect(isOpen).toBeTrue();
        });
    }));
}); 