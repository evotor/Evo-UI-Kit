import {concat, Observable, of, Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

export function switchQueryToList(
    queryStream: Subject<string>,
    switchMapFn: (query: string) => Observable<any[]>,
    initialList = [],
    debounce = 300,
): Observable<any[]> {
    return concat(
        of(initialList),
        queryStream.pipe(debounceTime(debounce), distinctUntilChanged(), switchMap(switchMapFn)),
    ) as Observable<any[]>;
}
