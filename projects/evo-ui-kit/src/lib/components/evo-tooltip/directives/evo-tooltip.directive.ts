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
import {fromEvent, Observable, Subject} from 'rxjs';
import {takeUntil, tap, throttleTime} from 'rxjs/operators';
import {EvoTooltipService} from '../services/evo-tooltip.service';
import {EvoTooltipPositionType} from '../types/evo-tooltip-position-type';
import {EvoTooltipConfig} from '../interfaces/evo-tooltip-config';
import {EVO_TOOLTIP_CONFIG} from '../constants/evo-tooltip-config';
import {EvoTooltipPosition} from '../enums/evo-tooltip-position';
import {EvoTooltipStyles} from '../interfaces/evo-tooltip-styles';

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

    readonly isOpen$: Observable<boolean> = this.tooltipService.isOpen$;

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

    show(event?: MouseEvent): void {
        if (!this.content || this.tooltipService.hasAttached || this.disabled) {
            return;
        }

        this.tooltipService.showTooltip(
            this.elementRef,
            this.content,
            this.position as EvoTooltipPosition,
            {...EVO_TOOLTIP_CONFIG, ...this.config},
            event?.target,
        );
    }

    private initSubscriptions(): void {
        fromEvent(this.elementRef.nativeElement, 'mouseenter')
            .pipe(
                throttleTime(this.config?.showDelay ?? EVO_TOOLTIP_CONFIG.showDelay),
                tap(() => {
                    this.show();
                }),
                takeUntil(this.destroy$),
            )
            .subscribe();

        this.tooltipService.isOpen$
            .pipe(
                tap((isOpen) => {
                    isOpen ? this.evoTooltipOpen.emit() : this.evoTooltipClose.emit();
                }),
                takeUntil(this.destroy$),
            )
            .subscribe();
    }
}
