import { EvoColor } from '../../../common/types';

export type EvoButtonColor = Extract<EvoColor,
    'secondary' |
    'success' |
    'bonus' |
    'text' |
    'link' |
    'error' |
    'white' |
    'primary'>
