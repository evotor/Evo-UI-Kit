import {concat, Observable, of, Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

export function switchQueryToList(
    queryStream: Subject<string>,
    // eslint-disable-next-line
    switchMapFn: (query: string) => Observable<any[]>,
    initialList = [],
    debounce = 300,
    // eslint-disable-next-line
): Observable<any[]> {
    return concat(
        of(initialList),
        queryStream.pipe(debounceTime(debounce), distinctUntilChanged(), switchMap(switchMapFn)),
        // eslint-disable-next-line
    ) as Observable<any[]>;
}
