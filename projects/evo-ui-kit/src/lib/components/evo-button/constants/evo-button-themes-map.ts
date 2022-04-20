import { EvoButtonShape, EvoButtonTheme } from '../types';

export const EVO_BUTTON_THEMES_MAP: Map<EvoButtonTheme, {shape: EvoButtonShape, isOutline: boolean}> = new Map([
    ['rectangle-outline', {
        shape: 'rectangle',
        isOutline: true,
    }],
    ['rounded-outline', {
        shape: 'rounded',
        isOutline: true,
    }],
    ['rounded-solid', {
        shape: 'rounded',
        isOutline: false,
    }],
    ['semi-rectangle-solid', {
        shape: 'semi-rectangle',
        isOutline: false,
    }],
]);
