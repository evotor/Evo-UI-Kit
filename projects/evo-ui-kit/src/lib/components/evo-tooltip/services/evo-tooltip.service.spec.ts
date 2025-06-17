import {TestBed} from '@angular/core/testing';
import {EvoTooltipService} from './evo-tooltip.service';
import {EvoTooltipPosition} from '../enums/evo-tooltip-position';
import {EvoTooltipStyles} from '../interfaces/evo-tooltip-styles';
import {ElementRef} from '@angular/core';
import {first} from 'rxjs/operators';
import {EvoTooltipVariableArrowPosition} from '../enums/evo-tooltip-variable-arrow-position';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EvoTooltipComponent} from '../evo-tooltip.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('EvoTooltipService', () => {
    let service: EvoTooltipService;
    let elementRef: ElementRef;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [CommonModule, BrowserAnimationsModule],
            declarations: [EvoTooltipComponent],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [EvoTooltipService],
        });

        service = TestBed.inject(EvoTooltipService);
        elementRef = {
            nativeElement: {
                offsetWidth: 100,
                offsetHeight: 50,
                addEventListener: () => {},
                removeEventListener: () => {},
            },
        };
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should set arrow visibility', () => {
        service.setArrowVisibility(false);
        service.visibleArrow$.pipe(first()).subscribe((value) => {
            expect(value).toBeFalse();
        });
    });

    it('should set tooltip styles', () => {
        const styles: EvoTooltipStyles = {
            [EvoTooltipVariableArrowPosition.VERTICAL_POSITION_ARROW]: '10px',
            [EvoTooltipVariableArrowPosition.HORIZONTAL_POSITION_ARROW]: '20px',
        };
        service.setTooltipStyles(styles);
        service.styles$.pipe(first()).subscribe((value) => {
            expect(value).toEqual(styles);
        });
    });

    it('should set tooltip class', () => {
        const classes = ['class-1', 'class-2'];
        service.setTooltipClass(classes);
        service.tooltipClasses$.pipe(first()).subscribe((value) => {
            expect(value).toEqual(classes);
        });
    });

    it('should set tooltip class from string', () => {
        service.setTooltipClass('single-class');
        service.tooltipClasses$.pipe(first()).subscribe((value) => {
            expect(value).toEqual(['single-class']);
        });
    });

    it('should set tooltip class to empty array when null', () => {
        service.setTooltipClass(null);
        service.tooltipClasses$.pipe(first()).subscribe((value) => {
            expect(value).toEqual([]);
        });
    });

    it('should show tooltip', () => {
        const content = 'Test content';
        const position = EvoTooltipPosition.TOP;
        const config = {showDelay: 0, hideDelay: 0};

        service.showTooltip(elementRef, content, position, config);

        service.stringContent$.pipe(first()).subscribe((value) => {
            expect(value).toBe(content);
        });

        service.position$.pipe(first()).subscribe((value) => {
            expect(value).toBe(position);
        });

        service.isOpen$.pipe(first()).subscribe((value) => {
            expect(value).toBeTrue();
        });
    });

    it('should hide tooltip', () => {
        service.hideTooltip();
        service.isOpen$.pipe(first()).subscribe((value) => {
            expect(value).toBeFalse();
        });
    });

    it('should check if tooltip is attached', () => {
        expect(service.hasAttached).toBeFalse();
    });
});
