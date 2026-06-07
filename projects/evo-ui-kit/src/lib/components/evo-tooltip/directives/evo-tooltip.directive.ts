import {
    DestroyRef,
    Directive,
    effect,
    ElementRef,
    HostBinding,
    inject,
    input,
    OnDestroy,
    OnInit,
    output,
    TemplateRef,
} from '@angular/core';
import {fromEvent, merge} from 'rxjs';
import {debounceTime, filter, takeUntil, tap, throttleTime} from 'rxjs/operators';
import {EvoTooltipService} from '../services/evo-tooltip.service';
import {EvoTooltipPositionType} from '../types/evo-tooltip-position-type';
import {EvoTooltipConfig} from '../interfaces/evo-tooltip-config';
import {EVO_TOOLTIP_CONFIG} from '../constants/evo-tooltip-config';
import {EvoTooltipPosition} from '../enums/evo-tooltip-position';
import {EvoTooltipStyles} from '../interfaces/evo-tooltip-styles';
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Directive({
    selector: '[evoTooltip]',
    exportAs: 'evoTooltip',
    standalone: true,
    providers: [EvoTooltipService],
})
export class EvoTooltipDirective implements OnInit, OnDestroy {
    readonly content = input<string | TemplateRef<HTMLElement>>('', {alias: 'evoTooltip'});

    readonly position = input<EvoTooltipPositionType | string>(EvoTooltipPosition.BOTTOM, {alias: 'evoTooltipPosition'});

    readonly disabled = input(false, {alias: 'evoTooltipDisabled'});

    readonly config = input<Partial<EvoTooltipConfig>>(EVO_TOOLTIP_CONFIG, {alias: 'evoTooltipConfig'});

    readonly isVisibleArrow = input(true, {alias: 'evoTooltipVisibleArrow'});

    readonly tooltipStyles = input<EvoTooltipStyles>({}, {alias: 'evoTooltipStyles'});

    readonly tooltipClass = input<string | string[]>([], {alias: 'evoTooltipClass'});

    readonly evoTooltipOpen = output<void>()
    readonly evoTooltipClose = output<void>()

    private readonly tooltipService = inject(EvoTooltipService);
    private readonly destroyRef = inject(DestroyRef);
    private readonly elementRef = inject(ElementRef);

    @HostBinding('class') get hostClasses(): string[] {
        return ['evo-tooltip-trigger', ...(this.disabled() ? ['evo-tooltip-trigger_disabled'] : [])];
    }

    constructor() {
        effect((): void => this.tooltipService.setTooltipStyles(this.tooltipStyles()));
        effect((): void => this.tooltipService.setTooltipClass(this.tooltipClass()));
    }

    ngOnInit(): void {
        this.initSubscriptions();
    }

    ngOnDestroy(): void {
        this.hide();
    }

    hide(): void {
        this.tooltipService.hideTooltip();
    }

    show(): void {
        const content = this.content();

        if (!content || this.tooltipService.hasAttached || this.disabled()) {
            return;
        }

        const tooltip = this.tooltipService.showTooltip({
            parentRef: this.elementRef,
            content: content,
            position: this.position() as EvoTooltipPosition,
            hasArrow: this.isVisibleArrow(),
            scrollStrategy: this.config()?.scrollStrategy,
        });

        this.initHideSubscription(tooltip);
    }

    private initSubscriptions(): void {
        const element = this.elementRef.nativeElement;
        const showDelay = this.config()?.showDelay ?? EVO_TOOLTIP_CONFIG.showDelay;

        merge(fromEvent(element, 'mouseenter'), fromEvent(element, 'touchstart'))
            .pipe(
                throttleTime(showDelay),
                tap((): void => this.show()),
                takeUntilDestroyed(this.destroyRef),
            )
            .subscribe();

        this.tooltipService.isOpen$
            .pipe(
                tap((isOpen): void => {
                    if (isOpen) {
                        this.evoTooltipOpen.emit();
                        return;
                    }

                    this.evoTooltipClose.emit();
                }),
                takeUntilDestroyed(this.destroyRef),
            )
            .subscribe();
    }

    private initHideSubscription(tooltip: HTMLElement): void {
        const trigger = this.elementRef.nativeElement;
        const closed$ = this.tooltipService.isOpen$.pipe(filter((isOpen): boolean => !isOpen));

        const hideDelay = this.config()?.hideDelay ?? EVO_TOOLTIP_CONFIG.hideDelay;

        merge(fromEvent(tooltip, 'mouseleave'), fromEvent(trigger, 'mouseleave'))
            .pipe(
                debounceTime(hideDelay),
                filter((): boolean => !tooltip.matches(':hover') && !trigger.matches(':hover')),
                tap((): void => this.tooltipService.hideTooltip()),
                takeUntil(closed$),
                takeUntilDestroyed(this.destroyRef),
            )
            .subscribe();
    }
}
