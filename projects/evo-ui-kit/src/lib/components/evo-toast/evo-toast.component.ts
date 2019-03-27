import { Component, OnInit } from '@angular/core';
import { EvoToast, EvoToastService } from './evo-toast.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

export enum EvoToastTypes {
    DEFAULT = 'default',
    DANGER = 'danger',
    SUCCESS = 'success',
}

@Component({
    selector: 'evo-toast',
    templateUrl: './evo-toast.component.html',
    styleUrls: [ './evo-toast.component.scss' ],
    animations: [
        trigger('appear', [
            transition('void => *', [
                style({
                    bottom: '-100px',
                }),
                animate('250ms', style({
                    bottom: '32px',
                })),
            ]),
        ]),
        trigger('disappear', [
            transition('in => void', [
                animate('250ms', style({
                    bottom: '-100px',
                })),
            ]),
        ]),
    ],
})
export class EvoToastComponent implements OnInit {

    toast: EvoToast;

    constructor(
        private toastService: EvoToastService,
    ) {

    }

    ngOnInit() {
        this.subscribeToToastPushes();
    }

    private subscribeToToastPushes() {
        this.toastService.pushEvents.subscribe((toast: EvoToast) => {
            this.toast = toast;
        });
    }

    appearDone() {
        setTimeout(() => {
            this.toast = null;
        }, 3000);
    }

    disappearDone() {
        this.toastService.toastComplete();
    }

}
