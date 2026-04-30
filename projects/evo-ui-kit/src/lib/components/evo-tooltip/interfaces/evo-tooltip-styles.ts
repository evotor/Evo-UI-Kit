import {EvoTooltipStyleVariable} from '../enums/evo-tooltip-style-variable';

export interface EvoTooltipStyles  {
    [EvoTooltipStyleVariable.HORIZONTAL_POSITION_ARROW]?: string;
    [EvoTooltipStyleVariable.VERTICAL_POSITION_ARROW]?: string;

    [EvoTooltipStyleVariable.COLOR]?: string;
    [EvoTooltipStyleVariable.BACKGROUND_COLOR]?: string;

    [EvoTooltipStyleVariable.MAX_WIDTH]?: string | number;

    [EvoTooltipStyleVariable.PADDING]?: string | number;
    [EvoTooltipStyleVariable.BORDER_RADIUS]?: string | number;
};
