import {
    Directive,
    ElementRef,
    Input, OnDestroy, OnInit,
    TemplateRef,
} from '@angular/core';
import {
    fromEvent,
} from 'rxjs';
import { tap, throttleTime } from 'rxjs/operators';
import { EvoTooltipService } from '../services/evo-tooltip.service';
import { EvoTooltipPositionType } from '../types/evo-tooltip-position-type';
import { EvoTooltipConfig } from '../interfaces/evo-tooltip-config';
import { EVO_TOOLTIP_CONFIG } from '../constants/evo-tooltip-config';
import { EVO_TOOLTIP_POSITION } from '../enums/evo-tooltip-position';

@Directive({
    selector: '[evoTooltip]',
    exportAs: 'tooltip',
    providers: [EvoTooltipService],
})
export class EvoTooltipDirective implements OnInit, OnDestroy {
    @Input() evoTooltip: string | TemplateRef<HTMLElement>;
    @Input('evoTooltipPosition') position: EvoTooltipPositionType | string = EVO_TOOLTIP_POSITION.BOTTOM;
    @Input('evoTooltipDisabled') disabled = false;
    @Input('evoTooltipConfig') config: Partial<EvoTooltipConfig>;

    constructor(
        private readonly elementRef: ElementRef,
        private readonly tooltipService: EvoTooltipService,
    ) {
    }

    ngOnInit(): void {
        this.initSubscriptions();
    }

    ngOnDestroy() {
        this.hide();
    }

    hide(): void {
        this.tooltipService.hideTooltip();
    }

    show(event?: MouseEvent): void {
        if (this.tooltipService.hasAttached || this.disabled) {
            return;
        }

        this.tooltipService.showTooltip(
            this.elementRef,
            this.evoTooltip,
            this.position,
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
            )
            .subscribe();
    }
}
