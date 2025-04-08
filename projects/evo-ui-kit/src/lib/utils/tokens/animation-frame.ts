import {InjectionToken} from '@angular/core';
import {Observable} from 'rxjs';
import {share} from 'rxjs/operators';

/**
 * Токен `ANIMATION_FRAME` предоставляет поток значений времени из `requestAnimationFrame`,
 * испускаемый каждый кадр анимации.
 *
 * Может быть полезен для задач, которые требуют частого обновления, например, отслеживания
 * активности или плавной анимации в UI.
 */
export const ANIMATION_FRAME = new InjectionToken<Observable<DOMHighResTimeStamp>>('[ANIMATION_FRAME]', {
    factory: () => {
        const animationFrame$ = new Observable<DOMHighResTimeStamp>((subscriber) => {
            let id = NaN;
            const callback = (timestamp: DOMHighResTimeStamp): void => {
                subscriber.next(timestamp);
                id = requestAnimationFrame(callback);
            };

            id = requestAnimationFrame(callback);

            return () => {
                cancelAnimationFrame(id);
            };
        });

        return animationFrame$.pipe(share());
    },
});
