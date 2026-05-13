import {fakeAsync, TestBed, tick} from '@angular/core/testing';
import {EvoTooltipService} from './evo-tooltip.service';
import {EvoTooltipPosition} from '../enums/evo-tooltip-position';
import {EvoTooltipStyles} from '../interfaces/evo-tooltip-styles';
import {ElementRef, NO_ERRORS_SCHEMA} from '@angular/core';
import {first} from 'rxjs/operators';
import {EvoTooltipStyleVariable} from '../enums/evo-tooltip-style-variable';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EvoTooltipComponent} from '../evo-tooltip.component';

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
            },
        };
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should set arrow visibility', fakeAsync(() => {
        service.showTooltip({
            parentRef: elementRef,
            content: 'Test content',
            position: EvoTooltipPosition.TOP,
            hasArrow: false,
        });

        tick();

        service.visibleArrow$.pipe(first()).subscribe((value) => {
            expect(value).toBeFalse();
        });
    }));

    it('should set tooltip styles', () => {
        const styles: EvoTooltipStyles = {
            [EvoTooltipStyleVariable.VERTICAL_POSITION_ARROW]: '10px',
            [EvoTooltipStyleVariable.HORIZONTAL_POSITION_ARROW]: '20px',
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

        service.showTooltip({
            parentRef: elementRef,
            content,
            position,
        });

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

    it('should hide tooltip', fakeAsync(() => {
        service.showTooltip({
            parentRef: elementRef,
            content: 'Test content',
            position: EvoTooltipPosition.TOP,
            hasArrow: true,
        });

        tick();

        service.isOpen$.pipe(first()).subscribe((value) => {
            expect(value).toBeFalse();
            expect(service.hasAttached).toBeFalse();
        });

        service.hideTooltip();

        tick();
    }));

    it('should check if tooltip is attached', () => {
        expect(service.hasAttached).toBeFalse();
    });
});
