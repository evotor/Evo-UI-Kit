import {EvoTooltipScrollStrategy} from '../types/evo-tooltip-scroll-strategy';

export interface EvoTooltipConfig {
    // The default delay in ms before hiding the tooltip
    hideDelay?: number;
    showDelay?: number;
    scrollStrategy?: EvoTooltipScrollStrategy;
}
