import { Component, OnInit } from '@angular/core';
import { EvoToast, EvoToastService } from './evo-toast.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { tap, throttleTime } from 'rxjs/operators';

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
    private nextToast: EvoToast;
    private appearTimeout: number;
    private isAnimationRun = false;

    constructor(
        private toastService: EvoToastService,
    ) {

    }

    ngOnInit() {
        this.toastService.register();
        this.subscribeToToastPushes();
    }

    handleAnimationStart() {
        this.isAnimationRun = true;
    }

    handleAnimationDone() {
        if (this.toast) {
            this.resetTimeoutToHide();
        } else {
            if (this.nextToast) {
                this.toast = this.nextToast;
                this.nextToast = null;
            } else {
                this.toastService.toastComplete();
            }
        }
        this.isAnimationRun = false;
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
        this.toastService.pushEvents.pipe(
            throttleTime(animationDuration + 50),
            tap((toast: EvoToast) => {
                if (this.toast) {
                    this.clearTimeoutToHide();
                    if (!this.isAnimationRun) {
                        this.toast = null;
                    }
                    this.nextToast = toast;
                } else {
                    this.toast = toast;
                }
            })
        ).subscribe();
    }
}
