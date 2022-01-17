import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {EvoTabsSize} from './enums/evo-tabs-size';

@Injectable()
export class EvoTabsSizeService {
    sizeChanges$: Observable<EvoTabsSize>;
    private size$ = new BehaviorSubject<EvoTabsSize>(EvoTabsSize.normal);

    constructor() {
        this.sizeChanges$ = this.size$.asObservable();
    }

    set size(value: EvoTabsSize) {
        if (value !== this.size$.value) {
            this.size$.next(value);
        }
    }

    get size(): EvoTabsSize {
        return this.size$.value;
    }
}
