import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    DestroyRef,
    ElementRef,
    HostBinding,
    inject,
    OnDestroy,
    Renderer2,
    Signal,
    TemplateRef,
} from '@angular/core';
import {combineLatest} from 'rxjs';
import {map, pairwise, startWith, tap} from 'rxjs/operators';
import {EVO_TOOLTIP_ARROW_SIZE} from './constants/evo-tooltip-arrow-size';
import {EVO_TOOLTIP_FADEIN_ANIMATION} from './constants/evo-tooltip-fadein.animation';
import {EVO_TOOLTIP_RADIUS} from './constants/evo-tooltip-radius';
import {EvoTooltipPosition} from './enums/evo-tooltip-position';
import {EvoTooltipStyleVariable} from './enums/evo-tooltip-style-variable';
import {EvoTooltipStyles} from './interfaces/evo-tooltip-styles';
import {EvoTooltipService} from './services/evo-tooltip.service';
import {takeUntilDestroyed, toSignal} from "@angular/core/rxjs-interop";
import {NgTemplateOutlet} from "@angular/common";

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
    standalone: true,
    imports: [
        NgTemplateOutlet
    ]
})
export class EvoTooltipComponent implements AfterViewInit, OnDestroy {
    readonly position: Signal<EvoTooltipPosition> = toSignal(this.tooltipService.position$);
    readonly stringContent: Signal<string> = toSignal(this.tooltipService.stringContent$);
    readonly templateContent: Signal<TemplateRef<unknown>> = toSignal(this.tooltipService.templateContent$);
    readonly visibleArrow: Signal<boolean> = toSignal(this.tooltipService.visibleArrow$);

    readonly styles: Signal<EvoTooltipStyles> = toSignal(combineLatest([
        this.tooltipService.position$,
        this.tooltipService.styles$,
        this.tooltipService.parentRef$,
        this.tooltipService.visibleArrow$,
    ]).pipe(
        map(
            ([position, baseStyles, parentRef, visibleArrow]: [
                EvoTooltipPosition,
                EvoTooltipStyles,
                ElementRef,
                boolean,
            ]): EvoTooltipStyles =>
                visibleArrow && parentRef
                    ? {...baseStyles, ...this.calculateArrowStyles(parentRef, position)}
                    : baseStyles,
        ),
    ));

    @HostBinding('@fadeIn') fadeIn = true;

    private readonly destroyRef = inject(DestroyRef);

    constructor(
        private readonly elementRef: ElementRef,
        private readonly tooltipService: EvoTooltipService,
        private readonly renderer: Renderer2,
    ) {
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
                takeUntilDestroyed(this.destroyRef),
            )
            .subscribe();
    }

    ngOnDestroy(): void {
        this.fadeIn = false;
    }

    private getArrowStartEdge({parentStart, parentEnd, tooltipStart, position}: TooltipArrowCalcParams): number {
        const parentWidth = parentEnd - parentStart;
        const parentCenter = Math.round(parentWidth / 2);

        const arrowHalf = EVO_TOOLTIP_ARROW_SIZE / 2;
        const safeBoundary = EVO_TOOLTIP_RADIUS + arrowHalf;

        let idealCenter: number;

        if (START_POSITIONS_LIST.includes(position)) {
            idealCenter = Math.min(parentCenter, safeBoundary);
        } else if (END_POSITIONS_LIST.includes(position)) {
            idealCenter = Math.max(parentCenter, parentWidth - safeBoundary);
        } else {
            idealCenter = parentCenter;
        }

        return Math.round(idealCenter + parentStart - tooltipStart - arrowHalf);
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

        const minPosition = EVO_TOOLTIP_RADIUS;
        const arrowStartEdge = this.getArrowStartEdge(params);
        const maxPosition = tooltipSize - EVO_TOOLTIP_RADIUS - EVO_TOOLTIP_ARROW_SIZE;

        return Math.max(minPosition, Math.min(arrowStartEdge, maxPosition));
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
