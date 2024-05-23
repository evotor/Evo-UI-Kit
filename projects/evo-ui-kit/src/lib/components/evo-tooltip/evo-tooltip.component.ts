import {
    ChangeDetectionStrategy,
    Component, HostBinding, OnDestroy,
} from '@angular/core';
import { EVO_TOOLTIP_FADEIN_ANIMATION } from './constants/evo-tooltip-fadein.animation';
import { EvoTooltipService } from './services/evo-tooltip.service';

@Component({
    selector: 'evo-tooltip',
    templateUrl: './evo-tooltip.component.html',
    styleUrls: ['./evo-tooltip.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [EVO_TOOLTIP_FADEIN_ANIMATION]
})
export class EvoTooltipComponent implements OnDestroy  {
    position$ = this.tooltipService.position$;
    styles$ = this.tooltipService.styles$;
    stringContent$ = this.tooltipService.stringContent$;
    templateContent$ = this.tooltipService.templateContent$;

    @HostBinding('@fadeIn') fadeIn = true;

    constructor(private readonly tooltipService: EvoTooltipService) {}

    ngOnDestroy() {
        this.fadeIn = false;
    }
}
