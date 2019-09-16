import { Component, OnInit } from '@angular/core';
import { EvoToast, EvoToastService } from './evo-toast.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { delay, filter, map, mergeMap, take, tap } from 'rxjs/operators';
import { BehaviorSubject, of, Subscription } from 'rxjs';

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

    private $appearTimeout: Subscription;
    private isForced = false;
    private isOpen$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

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
            this.$appearTimeout = of({}).pipe(
                delay(5000),
            ).subscribe(() => {
                this.toast = null;
            });
        } else if (!this.isForced) {
            this.toastService.toastComplete();
        }

        this.isOpen$.next(!!this.toast);
    }

    close() {
        this.$appearTimeout.unsubscribe();
        this.toast = null;
    }

    private subscribeToToastPushes() {
        this.toastService.pushEvents.pipe(
            tap(() => {
                this.toast = null;

                if (this.$appearTimeout && !this.$appearTimeout.closed) {
                    this.isForced = true;
                    this.$appearTimeout.unsubscribe();
                }
            }),
            mergeMap((toast: EvoToast) => {
                return this.isOpen$.pipe(
                    filter((isOpen: boolean) => !isOpen),
                    take(1),
                    map(() => toast),
                );
            }),
        ).subscribe((toast: EvoToast) => {
            this.toast = toast;
            this.isForced = false;
        });
    }
}
