import { EvoButtonColor, EvoButtonShape } from '../types';
import { EvoButtonStyles } from '../enums/evo-button-styles';

/**
 * @deprecated TODO: remove backward compatibility next major release
 */
export const EVO_BUTTON_OLD_STYLES_MAP: Map<EvoButtonStyles, {color: EvoButtonColor, shape: EvoButtonShape, isOutline: boolean}> = new Map([
    [EvoButtonStyles.lined, {
        color: 'primary',
        shape: 'rounded',
        isOutline: true,
    }],
    [EvoButtonStyles.darkblue, {
        color: 'secondary',
        shape: 'rounded',
        isOutline: false,
    }],
    [EvoButtonStyles.darkblueLined, {
        color: 'secondary',
        shape: 'rounded',
        isOutline: true,
    }],
    [EvoButtonStyles.green, {
        color: 'success',
        shape: 'rounded',
        isOutline: false,
    }],
    [EvoButtonStyles.greenlined, {
        color: 'success',
        shape: 'rounded',
        isOutline: true,
    }],
    [EvoButtonStyles.purple, {
        color: 'bonus',
        shape: 'rounded',
        isOutline: false,
    }],
    [EvoButtonStyles.red, {
        color: 'error',
        shape: 'rounded',
        isOutline: false,
    }],
]);
