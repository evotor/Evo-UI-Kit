import { Component, OnInit } from '@angular/core';
import { EvoToast, EvoToastService } from './evo-toast.service';
import { animate, style, transition, trigger } from '@angular/animations';

export enum EvoToastTypes {
    DEFAULT = 'default',
    DANGER = 'danger',
    SUCCESS = 'success',
}

const animationDuration = 250;

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
                animate(`${animationDuration}ms cubic-bezier(0, 0, 0.2, 1.40)`, style({
                    bottom: '32px',
                })),
            ]),
            transition('in => void', [
                animate(`${animationDuration}ms ease-in`, style({
                    bottom: '-100px',
                })),
            ]),
        ]),
    ],
})
export class EvoToastComponent implements OnInit {

    toast: EvoToast;
    private _toast: EvoToast;
    private appearTimeout: number;

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
            this.resetTimeoutToHide();
        } else {
            this.toastService.toastComplete();
        }
    }

    close() {
        this.clearTimeoutToHide();
        this.toast = null;
    }

    private setTimeoutToHide(): void {
        this.appearTimeout = window.setTimeout(() => {
            this.toast = null;
        }, 5000);
    }

    private clearTimeoutToHide(): void {
        if (this.appearTimeout) {
            window.clearTimeout(this.appearTimeout);
        }
    }

    private resetTimeoutToHide(): void {
        this.clearTimeoutToHide();
        this.setTimeoutToHide();
    }

    private subscribeToToastPushes() {
        this.toastService.pushEvents.subscribe((toast: EvoToast) => {
            if (toast.skipQueue) {
                this.clearTimeoutToHide();
                if (this.toast) {
                    if (!this._toast) {
                        this.toast = null;
                        this._toast = toast;
                        window.setTimeout(() => {
                            this.toast = this._toast;
                            this._toast = null;
                        }, animationDuration);
                    } else {
                        this._toast = toast;
                        this.resetTimeoutToHide();
                    }
                } else {
                    this.toast = toast;
                }
            } else {
                this.toast = toast;
            }
        });
    }
}
