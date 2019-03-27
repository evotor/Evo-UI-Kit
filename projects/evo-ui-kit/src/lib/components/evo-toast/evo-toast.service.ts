import { EventEmitter, Injectable } from '@angular/core';
import { EvoToastTypes } from './evo-toast.component';

export interface EvoToast {
    type?: EvoToastTypes;
    message: string;
}

@Injectable({
    providedIn: 'root',
})
export class EvoToastService {
    pushEvents: EventEmitter<EvoToast> = new EventEmitter<EvoToast>();

    private isToastInProgress = false;
    private queue: EvoToast[] = [];

    constructor() {
    }

    push(toast: EvoToast) {
        this.queue.push(toast);

        if (!this.isToastInProgress) {
            this.isToastInProgress = true;
            this.pushEvents.emit(this.queue.shift());
        }
    }

    toastComplete() {
        if (this.queue.length) {
            this.pushEvents.emit(this.queue.shift());
        } else {
            this.isToastInProgress = false;
        }
    }
}
