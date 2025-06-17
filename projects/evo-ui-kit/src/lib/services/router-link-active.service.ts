import {Inject, Injectable, NgZone, Optional} from '@angular/core';
import {RouterLinkActive} from '@angular/router';
import {EMPTY, merge, Observable, timer} from 'rxjs';
import {distinctUntilChanged, map} from 'rxjs/operators';
import {ANIMATION_FRAME} from '../utils/tokens/animation-frame';
import {evoZoneOptimized} from '../utils/observables/zone-free';

/**
 * Сервис создает поток, отслеживающий состояние активности
 * `RouterLinkActive` в реальном времени с использованием `requestAnimationFrame`.
 *
 * Наследуется от `Observable<boolean>` и эмитит `true` или `false`, когда состояние `isActive`
 * меняется. Если `RouterLinkActive` не передан — поток будет пустым (`EMPTY`).
 */
@Injectable()
export class RouterLinkActiveService extends Observable<boolean> {
    constructor(
        @Optional()
        @Inject(RouterLinkActive)
        routerLinkActive: RouterLinkActive | null,
        @Inject(NgZone) ngZone: NgZone,
        @Inject(ANIMATION_FRAME) animationFrame$: Observable<number>,
    ) {
        const stream$ = routerLinkActive
            ? merge(timer(0), animationFrame$).pipe(
                  map(() => routerLinkActive.isActive),
                  distinctUntilChanged(),
                  evoZoneOptimized(ngZone),
              )
            : EMPTY;

        super((subscriber) => stream$.subscribe(subscriber));
    }
}
