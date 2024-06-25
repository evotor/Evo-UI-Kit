import {animate, state, style, transition, trigger} from '@angular/animations';

const closeStateStyles = style({
    height: '0px',
    marginBottom: '0px',
    paddingBottom: '0px',
});

const openStateStyles = style({
    height: '*',
    marginBottom: '*',
    paddingBottom: '*'
});

const openStep = [
    closeStateStyles,
    animate('200ms ease-in-out', openStateStyles)
];

const closeStep = [
    openStateStyles,
    animate('200ms ease-in-out', closeStateStyles),
];

export const expandAnimation = trigger('expand', [
    state('open', openStateStyles),
    state('close', closeStateStyles),
    transition(':enter', openStep),
    transition(':leave', closeStep),
    transition('open => close', closeStep),
    transition('close => open', openStep)
]);
