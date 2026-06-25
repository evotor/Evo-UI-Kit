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
import {EVO_TOOLTIP_FADEIN_ANIMATION} from './constants/evo-tooltip-fadein.animation';
import {EvoTooltipService} from './services/evo-tooltip.service';
import {EvoTooltipStyles} from './interfaces/evo-tooltip-styles';
import {EvoTooltipPosition} from './enums/evo-tooltip-position';
import {EvoTooltipStyleVariable} from './enums/evo-tooltip-style-variable';
import {getTooltipArrowOffset} from './utils/get-tooltip-arrow-offset';
import {takeUntilDestroyed, toSignal} from "@angular/core/rxjs-interop";
import {NgTemplateOutlet} from "@angular/common";

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
    readonly position: Signal<EvoTooltipPosition>;
    readonly stringContent: Signal<string>;
    readonly templateContent: Signal<TemplateRef<unknown>>;
    readonly visibleArrow: Signal<boolean>;

    readonly styles: Signal<EvoTooltipStyles>;

    @HostBinding('@fadeIn') fadeIn = true;

    private readonly tooltipService = inject(EvoTooltipService);
    private readonly renderer = inject(Renderer2);
    private readonly elementRef = inject(ElementRef);
    private readonly destroyRef = inject(DestroyRef);

    constructor() {
        this.position = toSignal(this.tooltipService.position$);
        this.stringContent = toSignal(this.tooltipService.stringContent$);
        this.templateContent = toSignal(this.tooltipService.templateContent$);
        this.visibleArrow = toSignal(this.tooltipService.visibleArrow$);

        this.styles = this.getStyles();
    }


    ngAfterViewInit(): void {
        this.tooltipService.tooltipClasses$
            .pipe(
                startWith([]),
                pairwise(),
                tap(([a, b]: [string[], string[]]): void => {
                    (a || []).forEach((oldClass): void => this.renderer.removeClass(this.elementRef.nativeElement, oldClass));
                    (b || []).forEach((newClass): void => this.renderer.addClass(this.elementRef.nativeElement, newClass));
                }),
                takeUntilDestroyed(this.destroyRef),
            )
            .subscribe();
    }

    ngOnDestroy(): void {
        this.fadeIn = false;
    }

    private getStyles(): Signal<EvoTooltipStyles> {
        return toSignal(combineLatest([
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
