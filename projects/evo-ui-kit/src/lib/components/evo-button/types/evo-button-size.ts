import {EvoSize} from '../../../common/types';

/**
 * Sync with $evo-button-sizes SCSS variable
 */
export type EvoButtonSize = Extract<EvoSize, 'small' | 'normal' | 'large'>;
