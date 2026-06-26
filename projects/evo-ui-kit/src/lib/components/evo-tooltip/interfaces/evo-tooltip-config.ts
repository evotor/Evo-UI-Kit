import {EvoScrollStrategy} from '../../../common/scroll';

export interface EvoTooltipConfig {
    // The default delay in ms before hiding the tooltip
    hideDelay?: number;
    showDelay?: number;
    scrollStrategy?: EvoScrollStrategy;
}
