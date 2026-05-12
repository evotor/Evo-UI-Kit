import {ElementRef} from '@angular/core';

export interface EvoCloseScrollStrategyParams {
    /** Amount of pixels the user has to scroll before the overlay is closed. */
    threshold: number;
    triggerRef: ElementRef;
}
