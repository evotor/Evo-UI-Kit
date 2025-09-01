import {
    Directive,
    ElementRef,
    EventEmitter,
    HostBinding,
    Input,
    OnDestroy,
    OnInit,
    Output,
    TemplateRef,
} from '@angular/core';
import {EMPTY, filter, fromEvent, merge, Subject} from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, first, map, takeUntil, tap, throttleTime} from 'rxjs/operators';
import {EVO_TOOLTIP_CONFIG} from '../constants/evo-tooltip-config';
import {EvoTooltipPosition} from '../enums/evo-tooltip-position';
import {EvoTooltipConfig} from '../interfaces/evo-tooltip-config';
import {EvoTooltipStyles} from '../interfaces/evo-tooltip-styles';
import {EvoTooltipService} from '../services/evo-tooltip.service';
import {EvoTooltipPositionType} from '../types/evo-tooltip-position-type';

@Directive({
    selector: '[evoTooltip]',
    exportAs: 'evoTooltip',
    providers: [EvoTooltipService],
})
export class EvoTooltipDirective implements OnInit, OnDestroy {
    @Input('evoTooltip') content: string | TemplateRef<HTMLElement>;
    @Input('evoTooltipPosition') position: EvoTooltipPositionType | string = EvoTooltipPosition.BOTTOM;
    @Input('evoTooltipDisabled') disabled = false;
    @Input('evoTooltipConfig') config: Partial<EvoTooltipConfig>;
    @Input() set evoTooltipVisibleArrow(visibleArrow: boolean) {
        this.tooltipService.setArrowVisibility(visibleArrow);
    }
    @Input() set evoTooltipStyles(tooltipStyles: EvoTooltipStyles) {
        this.tooltipService.setTooltipStyles(tooltipStyles);
    }
    @Input() set evoTooltipClass(tooltipClass: string | string[]) {
        this.tooltipService.setTooltipClass(tooltipClass);
    }

    @Output() evoTooltipOpen = new EventEmitter<void>();
    @Output() evoTooltipClose = new EventEmitter<void>();

    @HostBinding('class') get hostClasses(): string[] {
        return ['evo-tooltip-trigger', ...(this.disabled ? ['evo-tooltip-trigger_disabled'] : [])];
    }

    private readonly destroy$ = new Subject<void>();

    constructor(private readonly elementRef: ElementRef, private readonly tooltipService: EvoTooltipService) {}

    ngOnInit(): void {
        this.initSubscriptions();
    }

    ngOnDestroy(): void {
        this.hide();
        this.destroy$.next();
        this.destroy$.complete();
    }

    hide(): void {
        this.tooltipService.hideTooltip();
    }

    show(): void {
        if (!this.content || this.tooltipService.hasAttached || this.disabled) {
            return;
        }

        const tooltip = this.tooltipService.showTooltip(
            this.elementRef,
            this.content,
            this.position as EvoTooltipPosition,
            {...EVO_TOOLTIP_CONFIG, ...this.config},
        );

        this.initHideSubscription(tooltip);
    }

    private initSubscriptions(): void {
        const element = this.elementRef.nativeElement;

        merge(fromEvent(element, 'mouseenter'), fromEvent(element, 'touchstart'))
            .pipe(
                throttleTime(this.config?.showDelay ?? EVO_TOOLTIP_CONFIG.showDelay),
                tap(() => this.show()),
                takeUntil(this.destroy$),
            )
            .subscribe();

        this.tooltipService.isOpen$
            .pipe(
                distinctUntilChanged(),
                tap((isOpen) => {
                    if (isOpen) {
                        this.evoTooltipOpen.emit();
                    } else {
                        this.evoTooltipClose.emit();
                    }
                }),
                takeUntil(this.destroy$),
            )
            .subscribe();
    }

    private initHideSubscription(tooltip: HTMLElement): void {
        const mouseLeaveParentElement$ = fromEvent(tooltip, 'mouseleave').pipe(map(() => this.elementRef.nativeElement));
        const mouseLeaveOverlayElement$ = fromEvent(this.elementRef.nativeElement, 'mouseleave').pipe(map(() => tooltip));

        merge(mouseLeaveParentElement$, mouseLeaveOverlayElement$)
            .pipe(
                filter((element) => !element.matches(':hover')),
                debounceTime(this.config?.hideDelay ?? EVO_TOOLTIP_CONFIG.hideDelay),
                filter(() => !tooltip.matches(':hover') && !this.elementRef.nativeElement.matches(':hover')),
                first(),
                catchError(() => {
                    this.tooltipService.hideTooltip();
                    return EMPTY;
                }),
                takeUntil(merge(
                    this.destroy$,
                    this.tooltipService.isOpen$.pipe(
                        filter((isOpened: boolean) => !isOpened)
                    )
                )),
            )
            .subscribe(() => this.tooltipService.hideTooltip());
    }
}
