import { ConnectedPosition } from '@angular/cdk/overlay';
import { EVO_TOOLTIP_POSITION } from '../enums/evo-tooltip-position';
import { EVO_TOOLTIP_OFFSET } from './evo-tooltip-offset';

export const EVO_CONNECTED_POSITION: { [key in EVO_TOOLTIP_POSITION]: ConnectedPosition } = {
    [EVO_TOOLTIP_POSITION.TOP]: {
        originX: 'center',
        originY: 'top',
        overlayX: 'center',
        overlayY: 'bottom',
        offsetY: -EVO_TOOLTIP_OFFSET,
        panelClass: EVO_TOOLTIP_POSITION.TOP
    },
    [EVO_TOOLTIP_POSITION.BOTTOM]: {
        originX: 'center',
        originY: 'bottom',
        overlayX: 'center',
        overlayY: 'top',
        offsetY: EVO_TOOLTIP_OFFSET,
        panelClass: EVO_TOOLTIP_POSITION.BOTTOM
    },
    [EVO_TOOLTIP_POSITION.LEFT]: {
        originX: 'start',
        originY: 'center',
        overlayX: 'end',
        overlayY: 'center',
        offsetX: -EVO_TOOLTIP_OFFSET,
        panelClass: EVO_TOOLTIP_POSITION.LEFT
    },
    [EVO_TOOLTIP_POSITION.RIGHT]: {
        originX: 'end',
        originY: 'center',
        overlayX: 'start',
        overlayY: 'center',
        offsetX: EVO_TOOLTIP_OFFSET,
        panelClass: EVO_TOOLTIP_POSITION.RIGHT
    },
    [EVO_TOOLTIP_POSITION.TOP_START]: {
        originX: 'start',
        originY: 'top',
        overlayX: 'start',
        overlayY: 'bottom',
        offsetY: -EVO_TOOLTIP_OFFSET,
        panelClass: EVO_TOOLTIP_POSITION.TOP_START
    },
    [EVO_TOOLTIP_POSITION.TOP_END]: {
        originX: 'end',
        originY: 'top',
        overlayX: 'end',
        overlayY: 'bottom',
        offsetY: -EVO_TOOLTIP_OFFSET,
        panelClass: EVO_TOOLTIP_POSITION.TOP_END
    },
    [EVO_TOOLTIP_POSITION.RIGHT_START]: {
        originX: 'end',
        originY: 'top',
        overlayX: 'start',
        overlayY: 'top',
        offsetX: EVO_TOOLTIP_OFFSET,
        panelClass: EVO_TOOLTIP_POSITION.RIGHT_START
    },
    [EVO_TOOLTIP_POSITION.RIGHT_END]: {
        originX: 'end',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'bottom',
        offsetX: EVO_TOOLTIP_OFFSET,
        panelClass: EVO_TOOLTIP_POSITION.RIGHT_END
    },
    [EVO_TOOLTIP_POSITION.BOTTOM_END]: {
        originX: 'end',
        originY: 'bottom',
        overlayX: 'end',
        overlayY: 'top',
        offsetY: EVO_TOOLTIP_OFFSET,
        panelClass: EVO_TOOLTIP_POSITION.BOTTOM_END
    },
    [EVO_TOOLTIP_POSITION.BOTTOM_START]: {
        originX: 'start',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'top',
        offsetY: EVO_TOOLTIP_OFFSET,
        panelClass: EVO_TOOLTIP_POSITION.BOTTOM_START
    },
    [EVO_TOOLTIP_POSITION.LEFT_END]: {
        originX: 'start',
        originY: 'bottom',
        overlayX: 'end',
        overlayY: 'bottom',
        offsetX: -EVO_TOOLTIP_OFFSET,
        panelClass: EVO_TOOLTIP_POSITION.LEFT_END
    },
    [EVO_TOOLTIP_POSITION.LEFT_START]: {
        originX: 'start',
        originY: 'top',
        overlayX: 'end',
        overlayY: 'top',
        offsetX: -EVO_TOOLTIP_OFFSET,
        panelClass: EVO_TOOLTIP_POSITION.LEFT_START
    },
};
