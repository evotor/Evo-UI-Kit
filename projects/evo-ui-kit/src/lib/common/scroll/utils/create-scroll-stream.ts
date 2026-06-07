import {animationFrameScheduler, fromEvent, Observable} from 'rxjs';
import {filter, throttleTime} from 'rxjs/operators';
import {OverlayRef} from '@angular/cdk/overlay';

/**
 * TODO(MRK-4890): revisit whether CDK's own scroll strategies can be reused here.
 *
 * The custom strategies built on top of this stream exist because they listen to
 * scroll events on the whole document in the capture phase. CDK's reposition/close
 * strategies react only to containers registered in the ScrollDispatcher (i.e. those
 * marked with `cdkScrollable`), so overlays anchored inside arbitrary `overflow: auto`
 * containers are not handled. The capture-phase listener below covers those cases.
 */
export function createScrollStream(document: Document, overlayRef: OverlayRef): Observable<Event> {
    return fromEvent(document, 'scroll', {capture: true, passive: true}).pipe(
        throttleTime(10, animationFrameScheduler, {leading: true, trailing: true}),
        filter((event): boolean => {
            const target = event.target as Node;

            return !overlayRef.overlayElement.contains(target);
        }),
    );
}
