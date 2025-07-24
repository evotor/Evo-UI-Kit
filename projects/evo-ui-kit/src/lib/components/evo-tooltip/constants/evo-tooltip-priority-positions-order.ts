import {EvoTooltipPosition} from '../enums/evo-tooltip-position';

export const EVO_PRIORITY_POSITIONS_ORDER: {[key in EvoTooltipPosition]?: EvoTooltipPosition[]} = {
    [EvoTooltipPosition.TOP]: [EvoTooltipPosition.TOP, EvoTooltipPosition.BOTTOM],
    [EvoTooltipPosition.BOTTOM]: [EvoTooltipPosition.BOTTOM, EvoTooltipPosition.TOP],
    [EvoTooltipPosition.LEFT]: [EvoTooltipPosition.LEFT, EvoTooltipPosition.RIGHT],
    [EvoTooltipPosition.RIGHT]: [EvoTooltipPosition.RIGHT, EvoTooltipPosition.LEFT],
};
