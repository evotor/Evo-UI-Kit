import {EvoButtonTheme, EvoButtonThemeParams} from '../types';

export const EVO_BUTTON_THEMES_MAP: Map<EvoButtonTheme, EvoButtonThemeParams> = new Map([
    [
        'rectangle-outline',
        {
            shape: 'rectangle',
            isOutline: true,
        },
    ],
    [
        'rounded-outline',
        {
            shape: 'rounded',
            isOutline: true,
        },
    ],
    [
        'rounded-solid',
        {
            shape: 'rounded',
            isOutline: false,
        },
    ],
    [
        'semi-rectangle-solid',
        {
            shape: 'semi-rectangle',
            isOutline: false,
        },
    ],
]);
