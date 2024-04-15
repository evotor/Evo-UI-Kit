import {EvoColor} from '../../../common/types';

/**
 * Sync with $evo-button-colors SCSS variable
 */
export type EvoButtonColor =
    | Extract<EvoColor, 'secondary' | 'success' | 'bonus' | 'link' | 'error' | 'white' | 'primary' | 'text'>
    | 'custom';
