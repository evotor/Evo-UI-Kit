import { EventEmitter, Injectable, TemplateRef } from '@angular/core';
import { EvoToastTypes } from './evo-toast.component';
import { Subject } from 'rxjs';

export interface EvoToast {
    type?: EvoToastTypes;
    message?: string;
    templateRef?: TemplateRef<any>;
}

@Injectable({
    providedIn: 'root',
})
export class EvoToastService {

    pushEvents: Subject<EvoToast> = new Subject<EvoToast>();

    private isComponentRegistered = false;
    private isToastInProgress = false;
    private queue: EvoToast[] = [];

    constructor() {

    }

    force(toast: EvoToast) {
        this.queue = [toast];
        this.isToastInProgress = true;
        this.pushEvents.next(toast);
    }

    push(toast: EvoToast) {
        this.queue.push(toast);

        if (!this.isToastInProgress) {
            this.isToastInProgress = true;
            this.pushEvents.next(this.queue[0]);
        }
    }

    toastComplete() {
        this.queue.shift();

        if (this.queue.length) {
            this.pushEvents.next(this.queue[0]);
        } else {
            this.isToastInProgress = false;
        }
    }

    register() {
        if (this.isComponentRegistered) {
            throw Error('[EvoUiKit]: Another evo-toast already registered. Only one toast component available in app!');
        } else {
            this.isComponentRegistered = true;
        }
    }
}
