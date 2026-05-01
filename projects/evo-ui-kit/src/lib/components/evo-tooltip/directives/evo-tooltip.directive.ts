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
import {EMPTY, filter, fromEvent, merge} from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, first, map, takeUntil, tap, throttleTime} from 'rxjs/operators';
import {EVO_TOOLTIP_CONFIG} from '../constants/evo-tooltip-config';
import {EvoTooltipPosition} from '../enums/evo-tooltip-position';
import {EvoTooltipConfig} from '../interfaces/evo-tooltip-config';
import {EvoTooltipStyles} from '../interfaces/evo-tooltip-styles';
import {EvoTooltipService} from '../services/evo-tooltip.service';
import {EvoTooltipPositionType} from '../types/evo-tooltip-position-type';
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

    private readonly destroyRef = inject(DestroyRef);
    private readonly elementRef = inject(ElementRef);
    private readonly tooltipService = inject(EvoTooltipService);

    @HostBinding('class') get hostClasses(): string[] {
        return ['evo-tooltip-trigger', ...(this.disabled() ? ['evo-tooltip-trigger_disabled'] : [])];
    }

    constructor() {
        effect((): void => this.tooltipService.setArrowVisibility(this.isVisibleArrow()));
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

        const tooltip = this.tooltipService.showTooltip(
            this.elementRef,
            content,
            this.position() as EvoTooltipPosition,
            {...EVO_TOOLTIP_CONFIG, ...this.config()},
        );

        this.initHideSubscription(tooltip);
    }

    private initSubscriptions(): void {
        const element = this.elementRef.nativeElement;

        merge(fromEvent(element, 'mouseenter'), fromEvent(element, 'touchstart'))
            .pipe(
                throttleTime(this.config()?.showDelay ?? EVO_TOOLTIP_CONFIG.showDelay),
                tap((): void => this.show()),
                takeUntilDestroyed(this.destroyRef),
            )
            .subscribe();

        this.tooltipService.isOpen$
            .pipe(
                distinctUntilChanged(),
                tap((isOpen): void => {
                    if (isOpen) {
                        this.evoTooltipOpen.emit();
                    } else {
                        this.evoTooltipClose.emit();
                    }
                }),
                takeUntilDestroyed(this.destroyRef),
            )
            .subscribe();
    }

    private initHideSubscription(tooltip: HTMLElement): void {
        const mouseLeaveParentElement$ = fromEvent(tooltip, 'mouseleave').pipe(map(() => this.elementRef.nativeElement));
        const mouseLeaveOverlayElement$ = fromEvent(this.elementRef.nativeElement, 'mouseleave').pipe(map(() => tooltip));

        merge(mouseLeaveParentElement$, mouseLeaveOverlayElement$)
            .pipe(
                filter((element) => !element.matches(':hover')),
                debounceTime(this.config()?.hideDelay ?? EVO_TOOLTIP_CONFIG.hideDelay),
                filter(() => !tooltip.matches(':hover') && !this.elementRef.nativeElement.matches(':hover')),
                first(),
                catchError(() => {
                    this.tooltipService.hideTooltip();
                    return EMPTY;
                }),
                takeUntil(this.tooltipService.isOpen$.pipe(filter((isOpened: boolean) => !isOpened))),
                takeUntilDestroyed(this.destroyRef),
            )
            .subscribe(() => this.tooltipService.hideTooltip());
    }
}
