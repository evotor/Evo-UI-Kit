import {EvoTooltipPosition} from '../enums/evo-tooltip-position';

export interface TooltipArrowCalcParams {
    parentStart: number;
    parentEnd: number;
    tooltipStart: number;
    tooltipEnd: number;
    position: EvoTooltipPosition;
}
