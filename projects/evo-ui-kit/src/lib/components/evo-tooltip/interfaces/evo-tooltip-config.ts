import {EvoScrollStrategy} from '../../../common/scroll/types/evo-scroll-strategy';

export interface EvoTooltipConfig {
    // The default delay in ms before hiding the tooltip
    hideDelay?: number;
    showDelay?: number;
    scrollStrategy?: EvoScrollStrategy;
}
