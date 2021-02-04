import { trigger, transition, style, animate } from "@angular/animations";

export const expandAnimation = trigger('expand', [
    transition(':enter', [
        style({
            height: '0px'
        }),
        animate('200ms ease-in-out', style({
            height: '*',
        }))
    ]),
    transition(':leave', [
        style({
            height: '*'
        }),
        animate('200ms ease-in-out', style({
            height: '0px',
        })),
    ])
]);