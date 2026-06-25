import {animationFrameScheduler, fromEvent, merge, Observable} from 'rxjs';
import {filter, throttleTime} from 'rxjs/operators';
import {OverlayRef} from '@angular/cdk/overlay';
import {getScrollableAncestors} from './get-scrollable-ancestors';

/**
 * Emits when any scroll container that can move the overlay's anchor is scrolled.
 *
 * Used by the close strategy (EvoCloseScrollStrategy). The overlay must close when ANY
 * container that moves the anchor scrolls, including arbitrary `overflow: auto` blocks
 * (modal bodies, sidebars, nested lists). CDK's CloseScrollStrategy only reacts to the
 * window plus containers explicitly registered via the `cdkScrollable` directive, and
 * measures its threshold from the viewport scroll position — neither fits an arbitrary
 * inner container, and as a reusable library we cannot require consumers to mark every
 * such container. (The reposition strategy solves the same blind spot differently: it feeds a
 * capture-phase window scroll listener into CDK's ScrollDispatcher and reuses the stock
 * RepositionScrollStrategy — see EvoRepositionScrollStrategy.)
 *
 * Mechanism (mirrors Floating UI's getOverflowAncestors): walk the anchor's DOM
 * ancestors, keep only real scroll containers, and attach one passive listener per
 * ancestor plus the window. Unlike a global capture-phase document listener, this reacts
 * only to the handful of containers in the anchor's chain rather than to every scroll on
 * the page. The close strategy additionally measures movement from the anchor's
 * getBoundingClientRect(), which is correct regardless of which container scrolled.
 */
export function createScrollStream(overlayRef: OverlayRef, origin: Element | null): Observable<Event> {
    const targets: (Element | Window)[] = origin ? getScrollableAncestors(origin) : [window];
    const scrollStreams = targets.map((target) => fromEvent<Event>(target, 'scroll', {passive: true, capture: true}));

    return merge(...scrollStreams).pipe(
        throttleTime(0, animationFrameScheduler, {leading: true, trailing: true}),
        filter((event): boolean => {
            const target = event.target as Node;

            return !overlayRef.overlayElement.contains(target);
        }),
    );
}
