import {EVO_TOOLTIP_ARROW_SIZE} from '../constants/evo-tooltip-arrow-size';
import {EVO_TOOLTIP_RADIUS} from '../constants/evo-tooltip-radius';
import {TooltipArrowCalcParams} from '../interfaces/tooltip-arrow-calc-params';
import {EvoTooltipPosition} from '../enums/evo-tooltip-position';

const START_POSITIONS_LIST: ReadonlyArray<EvoTooltipPosition> = [
    EvoTooltipPosition.TOP_START,
    EvoTooltipPosition.BOTTOM_START,
    EvoTooltipPosition.LEFT_START,
    EvoTooltipPosition.RIGHT_START,
];

const END_POSITIONS_LIST: ReadonlyArray<EvoTooltipPosition> = [
    EvoTooltipPosition.TOP_END,
    EvoTooltipPosition.BOTTOM_END,
    EvoTooltipPosition.LEFT_END,
    EvoTooltipPosition.RIGHT_END,
];

export function getTooltipArrowOffset(params: TooltipArrowCalcParams): number {
    const tooltipSize = params.tooltipEnd - params.tooltipStart;

    // tooltip after the parent
    if (params.parentEnd < params.tooltipStart) {
        return -EVO_TOOLTIP_ARROW_SIZE;
    }

    // tooltip before the parent
    if (params.parentStart > params.tooltipEnd) {
        return tooltipSize;
    }

    const parentCenter = params.parentStart + (params.parentEnd - params.parentStart) / 2;
    const safeBoundary = EVO_TOOLTIP_RADIUS + EVO_TOOLTIP_ARROW_SIZE / 2;

    let idealTargetOnScreen: number;

    if (START_POSITIONS_LIST.includes(params.position)) {
        idealTargetOnScreen = Math.min(parentCenter, params.parentStart + safeBoundary);
    } else if (END_POSITIONS_LIST.includes(params.position)) {
        idealTargetOnScreen = Math.max(parentCenter, params.parentEnd - safeBoundary);
    } else {
        idealTargetOnScreen = parentCenter;
    }

    // target in tooltip coordinates
    const initialOffset = idealTargetOnScreen - params.tooltipStart - EVO_TOOLTIP_ARROW_SIZE / 2;

    // clamping
    const minPosition = EVO_TOOLTIP_RADIUS;
    const maxPosition = tooltipSize - EVO_TOOLTIP_RADIUS - EVO_TOOLTIP_ARROW_SIZE;

    return Math.round(Math.max(minPosition, Math.min(initialOffset, maxPosition)));
}
