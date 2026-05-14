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
import {fromEvent, merge, Subject} from 'rxjs';
import {debounceTime, filter, takeUntil, tap, throttleTime} from 'rxjs/operators';
import {EvoTooltipService} from '../services/evo-tooltip.service';
import {EvoTooltipPositionType} from '../types/evo-tooltip-position-type';
import {EvoTooltipConfig} from '../interfaces/evo-tooltip-config';
import {EVO_TOOLTIP_CONFIG} from '../constants/evo-tooltip-config';
import {EvoTooltipPosition} from '../enums/evo-tooltip-position';
import {EvoTooltipStyles} from '../interfaces/evo-tooltip-styles';
import {EvoScrollStrategyOptions} from '../../../common/scroll';

@Directive({
    selector: '[evoTooltip]',
    exportAs: 'evoTooltip',
    providers: [EvoTooltipService, EvoScrollStrategyOptions],
})
export class EvoTooltipDirective implements OnInit, OnDestroy {
    @Input('evoTooltip') content: string | TemplateRef<HTMLElement>;
    @Input('evoTooltipPosition') position: EvoTooltipPositionType | string = EvoTooltipPosition.BOTTOM;
    @Input('evoTooltipDisabled') disabled = false;
    @Input('evoTooltipConfig') config: Partial<EvoTooltipConfig>;

    @Input('evoTooltipVisibleArrow') visibleArrow = true;

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

        const tooltip = this.tooltipService.showTooltip({
            parentRef: this.elementRef,
            content: this.content,
            position: this.position as EvoTooltipPosition,
            hasArrow: this.visibleArrow,
            scrollStrategy: this.config?.scrollStrategy,
        });

        this.initHideSubscription(tooltip);
    }

    private initSubscriptions(): void {
        const element = this.elementRef.nativeElement;
        const showDelay = this.config?.showDelay ?? EVO_TOOLTIP_CONFIG.showDelay;

        merge(fromEvent(element, 'mouseenter'), fromEvent(element, 'touchstart'))
            .pipe(
                throttleTime(showDelay),
                tap(() => this.show()),
                takeUntil(this.destroy$),
            )
            .subscribe();

        this.tooltipService.isOpen$
            .pipe(
                tap((isOpen) => {
                    if (isOpen) {
                        this.evoTooltipOpen.emit();
                        return;
                    }

                    this.evoTooltipClose.emit();
                }),
                takeUntil(this.destroy$),
            )
            .subscribe();
    }

    private initHideSubscription(tooltip: HTMLElement): void {
        const trigger = this.elementRef.nativeElement;
        const closed$ = this.tooltipService.isOpen$.pipe(filter((isOpen) => !isOpen));

        const hideDelay = this.config?.hideDelay ?? EVO_TOOLTIP_CONFIG.hideDelay;

        merge(fromEvent(tooltip, 'mouseleave'), fromEvent(trigger, 'mouseleave'))
            .pipe(
                debounceTime(hideDelay),
                filter(() => !tooltip.matches(':hover') && !trigger.matches(':hover')),
                tap(() => this.tooltipService.hideTooltip()),
                takeUntil(merge(closed$, this.destroy$)),
            )
            .subscribe();
    }
}
