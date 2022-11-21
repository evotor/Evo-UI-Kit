import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class EvoExpandedService {
    isExpandedChange$: Observable<boolean>;
    private readonly isExpanded$ = new BehaviorSubject<boolean>(false);

    constructor() {
        this.isExpandedChange$ = this.isExpanded$.asObservable();
    }

    set isExpanded(value: boolean) {
        if (value !== this.isExpanded$.value) {
            this.isExpanded$.next(value);
        }
    }

    get isExpanded(): boolean {
        return this.isExpanded$.value;
    }
}
