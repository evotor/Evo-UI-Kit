import {animate, state, style, transition, trigger} from '@angular/animations';

export const evoSidebarAnimationDuration = 500;

export const sidebarAnimation = trigger('open', [
    state('visible', style({
        transform: 'translateX(0px)',
    })),
    transition('hidden => visible', animate(`${evoSidebarAnimationDuration}ms ease-out`)),
    transition('visible => hidden', animate(`${evoSidebarAnimationDuration}ms ease-out`)),
]);
