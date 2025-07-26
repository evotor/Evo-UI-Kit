import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    OnDestroy,
    OnInit,
    Renderer2,
    TemplateRef,
} from '@angular/core';
import {BehaviorSubject, combineLatest, EMPTY, Observable, Subject} from 'rxjs';
import {filter, map, pairwise, startWith, takeUntil, tap} from 'rxjs/operators';
import {EVO_TOOLTIP_FADEIN_ANIMATION} from './constants/evo-tooltip-fadein.animation';
import {EvoTooltipService} from './services/evo-tooltip.service';
import {EvoTooltipStyles} from './interfaces/evo-tooltip-styles';
import {EvoTooltipPosition} from './enums/evo-tooltip-position';
import {EvoTooltipStyleVariable} from './enums/evo-tooltip-style-variable';
import {EVO_TOOLTIP_RADIUS} from './constants/evo-tooltip-radius';
import {EVO_TOOLTIP_ARROW_SIZE} from './constants/evo-tooltip-arrow-size';

@Component({
    selector: 'evo-tooltip',
    templateUrl: './evo-tooltip.component.html',
    styleUrls: ['./evo-tooltip.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [EVO_TOOLTIP_FADEIN_ANIMATION],
})
export class EvoTooltipComponent implements OnInit, AfterViewInit, OnDestroy {
    readonly position$: Observable<EvoTooltipPosition> = this.tooltipService.position$;
    readonly stringContent$: Observable<string> = this.tooltipService.stringContent$;
    readonly templateContent$: Observable<TemplateRef<unknown>> = this.tooltipService.templateContent$;
    readonly visibleArrow$: Observable<boolean> = this.tooltipService.visibleArrow$;
    readonly styles$: Observable<EvoTooltipStyles> = EMPTY;

    @HostBinding('@fadeIn') fadeIn = true;

    private readonly _positionArrowStyles$ = new BehaviorSubject<EvoTooltipStyles>(null);
    private readonly _destroy$ = new Subject<void>();

    constructor(
        private readonly elementRef: ElementRef,
        private readonly tooltipService: EvoTooltipService,
        private readonly renderer: Renderer2,
    ) {
        this.styles$ = combineLatest([this.tooltipService.styles$, this._positionArrowStyles$]).pipe(
            map(([style1, style2]) => ({...style1, ...style2})),
        );
    }

    ngOnInit(): void {
        combineLatest([this.position$, this.tooltipService.parentRef$, this.visibleArrow$])
            .pipe(
                filter(([_position, _parentRef, visibleArrow]) => visibleArrow),
                tap(([_, parentRef]) => {
                    this.setArrowPosition(parentRef);
                }),
                takeUntil(this._destroy$),
            )
            .subscribe();
    }

    ngAfterViewInit(): void {
        this.tooltipService.tooltipClasses$
            .pipe(
                startWith([]),
                pairwise(),
                tap(([a, b]: [string[], string[]]) => {
                    (a || []).forEach((oldClass) => this.renderer.removeClass(this.elementRef.nativeElement, oldClass));
                    (b || []).forEach((newClass) => this.renderer.addClass(this.elementRef.nativeElement, newClass));
                }),
                takeUntil(this._destroy$),
            )
            .subscribe();
    }

    ngOnDestroy(): void {
        this.fadeIn = false;
        this._destroy$.next();
        this._destroy$.complete();
    }

    private getArrowOffset(params: {
        parentStart: number;
        parentEnd: number;
        tooltipStart: number;
        tooltipEnd: number;
    }): number {
        const tooltipSize = params.tooltipEnd - params.tooltipStart;
        const parentSize = params.parentEnd - params.parentStart;

        // tooltip after the parent
        if (params.parentEnd < params.tooltipStart) {
            return -EVO_TOOLTIP_ARROW_SIZE;
        }

        // tooltip before the parent
        if (params.parentStart > params.tooltipEnd) {
            return tooltipSize;
        }

        const tooltipCenter = Math.round(tooltipSize / 2);
        const parentCenterOnTooltip = Math.round(parentSize / 2 + params.parentStart - params.tooltipStart);

        const defaultArrowOffset = parentCenterOnTooltip - EVO_TOOLTIP_ARROW_SIZE / 2;

        // centers are is one positions
        if (tooltipCenter === parentCenterOnTooltip) {
            return defaultArrowOffset;
        }

        const minPosition = EVO_TOOLTIP_RADIUS;
        const maxPosition = tooltipSize - EVO_TOOLTIP_ARROW_SIZE - EVO_TOOLTIP_RADIUS;

        // parent center inside tooltip
        if (defaultArrowOffset >= minPosition && parentCenterOnTooltip <= maxPosition) {
            return defaultArrowOffset;
        }

        return tooltipCenter > parentCenterOnTooltip ? minPosition : maxPosition;
    }

    private setArrowPosition(parentRef: ElementRef): void {
        const parentRect = (parentRef.nativeElement as HTMLElement).getBoundingClientRect();
        const tooltipRect = (this.elementRef.nativeElement as HTMLElement).getBoundingClientRect();

        const vertical = this.getArrowOffset({
            parentStart: parentRect.top,
            parentEnd: parentRect.bottom,
            tooltipStart: tooltipRect.top,
            tooltipEnd: tooltipRect.bottom,
        });

        const horizontal = this.getArrowOffset({
            parentStart: parentRect.left,
            parentEnd: parentRect.right,
            tooltipStart: tooltipRect.left,
            tooltipEnd: tooltipRect.right,
        });

        this._positionArrowStyles$.next({
            [EvoTooltipStyleVariable.VERTICAL_POSITION_ARROW]: `${vertical}px`,
            [EvoTooltipStyleVariable.HORIZONTAL_POSITION_ARROW]: `${horizontal}px`,
        });
    }
}
