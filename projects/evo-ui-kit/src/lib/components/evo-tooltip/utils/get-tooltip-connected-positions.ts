import {EvoTooltipPosition} from '../enums/evo-tooltip-position';
import {ElementRef} from '@angular/core';
import {ConnectedPosition} from '@angular/cdk/overlay';
import {getTooltipPositionsOrder} from './get-tooltip-positions-order';
import {EVO_TOOLTIP_OFFSET} from '../constants/evo-tooltip-offset';
import {EVO_CONNECTED_POSITION} from '../constants/evo-tooltip-connected-position';
import {EVO_TOOLTIP_ARROW_SIZE} from '../constants/evo-tooltip-arrow-size';
import {EVO_TOOLTIP_RADIUS} from '../constants/evo-tooltip-radius';

export function getTooltipConnectedPositions(
    position: EvoTooltipPosition,
    parentRef: ElementRef,
    hasArrow: boolean,
): ConnectedPosition[] {
    const parentWidth = parentRef.nativeElement.offsetWidth;
    const parentHeight = parentRef.nativeElement.offsetHeight;
    const maxSize = EVO_TOOLTIP_ARROW_SIZE + EVO_TOOLTIP_RADIUS * 2;

    const offset = EVO_TOOLTIP_OFFSET(hasArrow);

    const getStartOffset = (size: number): number => -(maxSize - size) / 2;
    const getEndOffset = (size: number): number => (maxSize - size) / 2;

    return getTooltipPositionsOrder(position).map((key: EvoTooltipPosition) => {
        const connectedPosition = {...EVO_CONNECTED_POSITION(offset)[key]};

        // offset X for small parent
        if (parentWidth <= maxSize) {
            switch (key) {
                case EvoTooltipPosition.BOTTOM_START:
                case EvoTooltipPosition.TOP_START:
                    connectedPosition.offsetX = getStartOffset(parentWidth);
                    break;
                case EvoTooltipPosition.BOTTOM_END:
                case EvoTooltipPosition.TOP_END:
                    connectedPosition.offsetX = getEndOffset(parentWidth);
                    break;
            }
        }

        // offset Y for small parent
        if (parentHeight <= maxSize) {
            switch (key) {
                case EvoTooltipPosition.LEFT_START:
                case EvoTooltipPosition.RIGHT_START:
                    connectedPosition.offsetY = getStartOffset(parentHeight);
                    break;
                case EvoTooltipPosition.LEFT_END:
                case EvoTooltipPosition.RIGHT_END:
                    connectedPosition.offsetY = getEndOffset(parentHeight);
                    break;
            }
        }

        return connectedPosition;
    });
}
