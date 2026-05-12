import {animationFrameScheduler, fromEvent, Observable} from 'rxjs';
import {filter, throttleTime} from 'rxjs/operators';
import {OverlayRef} from '@angular/cdk/overlay';

export function createScrollStream(document: Document, overlayRef: OverlayRef): Observable<Event> {
    return fromEvent(document, 'scroll', {capture: true, passive: true}).pipe(
        throttleTime(10, animationFrameScheduler, {leading: true, trailing: true}),
        filter((event): boolean => {
            const target = event.target as Node;

            return !overlayRef.overlayElement.contains(target);
        }),
    );
}
