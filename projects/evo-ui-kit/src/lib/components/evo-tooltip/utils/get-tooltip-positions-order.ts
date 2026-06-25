import {EVO_PRIORITY_POSITIONS_ORDER} from '../constants/evo-tooltip-priority-positions-order';
import {EVO_DEFAULT_POSITIONS_ORDER} from '../constants/evo-tooltip-default-positions-order';
import {EvoTooltipPosition} from '../enums/evo-tooltip-position';

export function getTooltipPositionsOrder(position: EvoTooltipPosition): EvoTooltipPosition[] {
    const priorityPositions = EVO_PRIORITY_POSITIONS_ORDER[position];

    if (priorityPositions) {
        return [
            ...priorityPositions,
            ...EVO_DEFAULT_POSITIONS_ORDER.filter((defaultPosition) => !priorityPositions.includes(defaultPosition)),
        ];
    }

    const indexPositionKey: number = EVO_DEFAULT_POSITIONS_ORDER.indexOf(position);

    return EVO_DEFAULT_POSITIONS_ORDER.slice(indexPositionKey).concat(
        EVO_DEFAULT_POSITIONS_ORDER.slice(0, indexPositionKey),
    );
}
