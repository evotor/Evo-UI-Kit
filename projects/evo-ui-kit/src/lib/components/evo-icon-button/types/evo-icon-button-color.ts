import {EvoColor} from '../../../common/types';

export type EvoIconButtonColor = Extract<EvoColor, 'success' | 'link' | 'error'> | 'custom';
