import { animate, state, style, transition, trigger } from '@angular/animations';

export const EVO_TOOLTIP_FADEIN_ANIMATION = trigger('fadeIn', [
    state('void', style({opacity: 0})),
    state('*', style({opacity: 1})),
    transition(':enter', animate('0.3s ease-in')),
    transition(':leave', animate('0.3s ease-out'))
]);
