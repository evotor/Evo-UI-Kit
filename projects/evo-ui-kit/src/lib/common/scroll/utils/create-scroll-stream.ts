import {animationFrameScheduler, fromEvent, Observable} from 'rxjs';
import {filter, throttleTime} from 'rxjs/operators';
import {OverlayReference} from '@angular/cdk/overlay/overlay-reference';

export function createScrollStream(document: Document, overlayRef: OverlayReference): Observable<Event> {
    return fromEvent(document, 'scroll', {capture: true, passive: true}).pipe(
        throttleTime(10, animationFrameScheduler, {leading: true, trailing: true}),
        filter((event) => {
            const target = event.target as Node;

            return !overlayRef.overlayElement.contains(target);
        }),
    );
}
