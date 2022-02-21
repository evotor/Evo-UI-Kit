import { EvoColor } from '../../../common/types';

export type EvoButtonColor = Extract<EvoColor,
    'secondary' |
    'success' |
    'bonus' |
    'link' |
    'error' |
    'white' |
    'primary'>
