import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class EvoIfExpandedService {
    private expanded$ = new BehaviorSubject<boolean>(false);
    public expandedChange$: Observable<boolean> = this.expanded$.asObservable();

    set expanded(value: boolean) {
        if (value !== this.expanded$.value) {
            this.expanded$.next(value);
        }
    }

    get expanded(): boolean {
        return this.expanded$.value;
    }
}
