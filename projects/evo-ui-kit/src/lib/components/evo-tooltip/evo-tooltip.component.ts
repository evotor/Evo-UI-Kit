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
import {EvoTooltipStyleVariable} from './enums/evo-tooltip-style-variable';
import {getTooltipArrowOffset} from './utils/get-tooltip-arrow-offset';

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

    private calculateArrowStyles(parentRef: ElementRef, position: EvoTooltipPosition): EvoTooltipStyles {
        const parentRect = (parentRef.nativeElement as HTMLElement).getBoundingClientRect();
        const tooltipRect = (this.elementRef.nativeElement as HTMLElement).getBoundingClientRect();

        const vertical = getTooltipArrowOffset({
            parentStart: parentRect.top,
            parentEnd: parentRect.bottom,
            tooltipStart: tooltipRect.top,
            tooltipEnd: tooltipRect.bottom,
            position,
        });

        const horizontal = getTooltipArrowOffset({
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
