import { EVO_TOOLTIP_POSITION } from '../enums/evo-tooltip-position';

export const EVO_PRIORITY_POSITIONS_ORDER: { [key in EVO_TOOLTIP_POSITION]?: EVO_TOOLTIP_POSITION[] } = {
    [EVO_TOOLTIP_POSITION.TOP]: [EVO_TOOLTIP_POSITION.TOP, EVO_TOOLTIP_POSITION.BOTTOM],
    [EVO_TOOLTIP_POSITION.BOTTOM]: [EVO_TOOLTIP_POSITION.BOTTOM, EVO_TOOLTIP_POSITION.TOP],
    [EVO_TOOLTIP_POSITION.LEFT]: [EVO_TOOLTIP_POSITION.LEFT, EVO_TOOLTIP_POSITION.RIGHT],
    [EVO_TOOLTIP_POSITION.RIGHT]: [EVO_TOOLTIP_POSITION.RIGHT, EVO_TOOLTIP_POSITION.LEFT],
};
