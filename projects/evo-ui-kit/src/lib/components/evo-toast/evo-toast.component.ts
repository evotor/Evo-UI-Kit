import { Component, OnInit } from '@angular/core';
import { EvoToast, EvoToastService } from './evo-toast.service';
import { animate, style, transition, trigger } from '@angular/animations';

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
            transition('void => in', [
                style({
                    bottom: '-100px',
                }),
                animate('250ms cubic-bezier(0, 0, 0.2, 1.40)', style({
                    bottom: '32px',
                })),
            ]),
            transition('in => void', [
                animate('250ms ease-in', style({
                    bottom: '-100px',
                })),
            ]),
        ]),
    ],
})
export class EvoToastComponent implements OnInit {

    toast: EvoToast;

    private appearTimeout: any;

    constructor(
        private toastService: EvoToastService,
    ) {

    }

    ngOnInit() {
        this.toastService.register();
        this.subscribeToToastPushes();
    }

    handleAnimationDone() {
        if (this.toast) {
            this.appearTimeout = setTimeout(() => {
                this.toast = null;
            }, 5000);
        } else {
            this.toastService.toastComplete();
        }
    }

    close() {
        clearTimeout(this.appearTimeout);
        this.toast = null;
    }

    private subscribeToToastPushes() {
        this.toastService.pushEvents.subscribe((toast: EvoToast) => this.toast = toast);
    }
}
