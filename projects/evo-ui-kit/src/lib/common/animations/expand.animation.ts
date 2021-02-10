import { trigger, transition, style, animate } from '@angular/animations';

export const expandAnimation = trigger('expand', [
    transition(':enter', [
        style({
            height: '0px',
            marginBottom: '0px',
            paddingBottom: '0px'
        }),
        animate('200ms ease-in-out', style({
            height: '*',
            marginBottom: '*',
            paddingBottom: '*'
        }))
    ]),
    transition(':leave', [
        style({
            height: '*',
            marginBottom: '*',
            paddingBottom: '*'
        }),
        animate('200ms ease-in-out', style({
            height: '0px',
            marginBottom: '0px',
            paddingBottom: '0px'
        })),
    ])
]);
