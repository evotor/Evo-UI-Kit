import { NgZone } from '@angular/core';
import { Observable } from 'rxjs';

export function enterZone(zone: NgZone) {
    return <T>(source: Observable<T>) =>
        new Observable<T>(observer =>
            source.subscribe({
                next: (x) => zone.run(() => observer.next(x)),
                error: (err) => observer.error(err),
                complete: () => observer.complete()
            })
        );
}
