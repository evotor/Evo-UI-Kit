import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {EvoTooltipDirective} from './evo-tooltip.directive';
import {Component, NO_ERRORS_SCHEMA} from '@angular/core';
import {EvoTooltipPosition} from '../enums/evo-tooltip-position';
import {EvoTooltipStyles} from '../interfaces/evo-tooltip-styles';
import {EvoTooltipStyleVariable} from '../enums/evo-tooltip-style-variable';
import {CommonModule} from '@angular/common';
import {EvoTooltipService} from '../services/evo-tooltip.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {first} from 'rxjs/operators';
import {By} from "@angular/platform-browser";

@Component({
    template: `
        <div [evoTooltip]="content"
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
    content = 'Test tooltip';
    position = EvoTooltipPosition.BOTTOM;
    disabled = false;
    config = {showDelay: 0, hideDelay: 0};
    visibleArrow = true;
    styles: EvoTooltipStyles = {
        [EvoTooltipStyleVariable.VERTICAL_POSITION_ARROW]: '10px',
        [EvoTooltipStyleVariable.HORIZONTAL_POSITION_ARROW]: '20px',
    };
    classes = ['class-1', 'class-2'];
    onOpen = jasmine.createSpy('onOpen');
    onClose = jasmine.createSpy('onClose');
}

describe('EvoTooltipDirective', () => {
    let fixture: ComponentFixture<TestHostComponent>;

    let component: TestHostComponent;
    let triggerEl: HTMLElement;

    let directive: EvoTooltipDirective;
    let tooltipService: EvoTooltipService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TestHostComponent],
            imports: [CommonModule, BrowserAnimationsModule, EvoTooltipDirective],
            providers: [EvoTooltipService],
            schemas: [NO_ERRORS_SCHEMA],
        }).compileComponents();

        fixture = TestBed.createComponent(TestHostComponent);
        component = fixture.componentInstance;

        const directiveEl = fixture.debugElement.query(By.directive(EvoTooltipDirective));
        triggerEl = directiveEl.nativeElement;

        directive = directiveEl.injector.get(EvoTooltipDirective);
        tooltipService = TestBed.inject(EvoTooltipService);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(directive).toBeTruthy();
    });

    it('should have correct host classes', () => {
        expect(triggerEl.classList.contains('evo-tooltip-trigger')).toBeTrue();
    });

    it('should add disabled class when disabled', () => {
        component.disabled = true;
        fixture.detectChanges();
        expect(triggerEl.classList.contains('evo-tooltip-trigger_disabled')).toBeTrue();
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
        component.content = null;
        fixture.detectChanges();
        directive.show();
        tick(0);
        fixture.detectChanges();
        expect(component.onOpen).not.toHaveBeenCalled();
    }));

    it('should handle mouseenter event', fakeAsync(() => {
        triggerEl.dispatchEvent(new MouseEvent('mouseenter'));
        tick(0);
        fixture.detectChanges();
        tooltipService.isOpen$.pipe(first()).subscribe((isOpen) => {
            expect(isOpen).toBeTrue();
        });
    }));

    it('should handle touchstart event', fakeAsync(() => {
        triggerEl.dispatchEvent(new MouseEvent('touchstart'));
        tick(0);
        fixture.detectChanges();
        tooltipService.isOpen$.pipe(first()).subscribe((isOpen) => {
            expect(isOpen).toBeTrue();
        });
    }));
});
