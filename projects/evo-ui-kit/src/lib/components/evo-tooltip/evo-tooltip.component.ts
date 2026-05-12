import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    OnDestroy,
    Renderer2,
    TemplateRef,
} from '@angular/core';
import {combineLatest, Observable, Subject} from 'rxjs';
import {map, pairwise, startWith, takeUntil, tap} from 'rxjs/operators';
import {EVO_TOOLTIP_FADEIN_ANIMATION} from './constants/evo-tooltip-fadein.animation';
import {EvoTooltipService} from './services/evo-tooltip.service';
import {EvoTooltipStyles} from './interfaces/evo-tooltip-styles';
import {EvoTooltipPosition} from './enums/evo-tooltip-position';
import {EVO_TOOLTIP_ARROW_SIZE} from './constants/evo-tooltip-arrow-size';
import {EVO_TOOLTIP_RADIUS} from './constants/evo-tooltip-radius';
import {EvoTooltipStyleVariable} from './enums/evo-tooltip-style-variable';

const START_POSITIONS_LIST: ReadonlyArray<EvoTooltipPosition> = [
    EvoTooltipPosition.TOP_START,
    EvoTooltipPosition.BOTTOM_START,
    EvoTooltipPosition.LEFT_START,
    EvoTooltipPosition.RIGHT_START,
];

const END_POSITIONS_LIST: ReadonlyArray<EvoTooltipPosition> = [
    EvoTooltipPosition.TOP_END,
    EvoTooltipPosition.BOTTOM_END,
    EvoTooltipPosition.LEFT_END,
    EvoTooltipPosition.RIGHT_END,
];

interface TooltipArrowCalcParams {
    parentStart: number;
    parentEnd: number;
    tooltipStart: number;
    tooltipEnd: number;
    position: EvoTooltipPosition;
}

@Component({
    selector: 'evo-tooltip',
    templateUrl: './evo-tooltip.component.html',
    styleUrls: ['./evo-tooltip.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [EVO_TOOLTIP_FADEIN_ANIMATION],
})
export class EvoTooltipComponent implements AfterViewInit, OnDestroy {
    readonly position$: Observable<EvoTooltipPosition> = this.tooltipService.position$;
    readonly stringContent$: Observable<string> = this.tooltipService.stringContent$;
    readonly templateContent$: Observable<TemplateRef<unknown>> = this.tooltipService.templateContent$;
    readonly visibleArrow$: Observable<boolean> = this.tooltipService.visibleArrow$;

    readonly styles$: Observable<EvoTooltipStyles> = combineLatest([
        this.position$,
        this.tooltipService.styles$,
        this.tooltipService.parentRef$,
        this.visibleArrow$,
    ]).pipe(
        map(
            ([position, baseStyles, parentRef, visibleArrow]: [
                EvoTooltipPosition,
                EvoTooltipStyles,
                ElementRef,
                boolean,
            ]) =>
                visibleArrow && parentRef
                    ? {...baseStyles, ...this.calculateArrowStyles(parentRef, position)}
                    : baseStyles,
        ),
    );

    @HostBinding('@fadeIn') fadeIn = true;

    private readonly _destroy$ = new Subject<void>();

    constructor(
        private readonly elementRef: ElementRef,
        private readonly tooltipService: EvoTooltipService,
        private readonly renderer: Renderer2,
    ) {}

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

    private getArrowOffset(params: TooltipArrowCalcParams): number {
        const tooltipSize = params.tooltipEnd - params.tooltipStart;

        // tooltip after the parent
        if (params.parentEnd < params.tooltipStart) {
            return -EVO_TOOLTIP_ARROW_SIZE;
        }

        // tooltip before the parent
        if (params.parentStart > params.tooltipEnd) {
            return tooltipSize;
        }

        const parentCenter = params.parentStart + (params.parentEnd - params.parentStart) / 2;
        const safeBoundary = EVO_TOOLTIP_RADIUS + EVO_TOOLTIP_ARROW_SIZE / 2;

        let idealTargetOnScreen: number;

        if (START_POSITIONS_LIST.includes(params.position)) {
            idealTargetOnScreen = Math.min(parentCenter, params.parentStart + safeBoundary);
        } else if (END_POSITIONS_LIST.includes(params.position)) {
            idealTargetOnScreen = Math.max(parentCenter, params.parentEnd - safeBoundary);
        } else {
            idealTargetOnScreen = parentCenter;
        }

        // target in tooltip coordinates
        const initialOffset = idealTargetOnScreen - params.tooltipStart - EVO_TOOLTIP_ARROW_SIZE / 2;

        // clamping
        const minPosition = EVO_TOOLTIP_RADIUS;
        const maxPosition = tooltipSize - EVO_TOOLTIP_RADIUS - EVO_TOOLTIP_ARROW_SIZE;

        return Math.round(Math.max(minPosition, Math.min(initialOffset, maxPosition)));
    }

    private calculateArrowStyles(parentRef: ElementRef, position: EvoTooltipPosition): EvoTooltipStyles {
        const parentRect = (parentRef.nativeElement as HTMLElement).getBoundingClientRect();
        const tooltipRect = (this.elementRef.nativeElement as HTMLElement).getBoundingClientRect();

        const vertical = this.getArrowOffset({
            parentStart: parentRect.top,
            parentEnd: parentRect.bottom,
            tooltipStart: tooltipRect.top,
            tooltipEnd: tooltipRect.bottom,
            position,
        });

        const horizontal = this.getArrowOffset({
            parentStart: parentRect.left,
            parentEnd: parentRect.right,
            tooltipStart: tooltipRect.left,
            tooltipEnd: tooltipRect.right,
            position,
        });

        return {
            [EvoTooltipStyleVariable.VERTICAL_POSITION_ARROW]: `${vertical}px`,
            [EvoTooltipStyleVariable.HORIZONTAL_POSITION_ARROW]: `${horizontal}px`,
        };
    }
}
