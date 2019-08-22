import { Subject, concat, of, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

export function switchQueryToList (
    queryStream: Subject<string>,
    switchMapFn: (query: string) => Observable<any[]>,
    initialList = [],
    debounce = 300): Observable<any[]> {
    return concat<Observable<any[]>, Observable<any[]>>(
        of(initialList),
        queryStream.pipe(
            debounceTime(debounce),
            distinctUntilChanged(),
            switchMap(switchMapFn)
        )
    );
}
