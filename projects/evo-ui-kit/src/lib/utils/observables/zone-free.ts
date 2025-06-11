import {NgZone} from '@angular/core';
import {MonoTypeOperatorFunction, Observable, pipe} from 'rxjs';

/**
 * Кратко:
 * 🔥 evoZonefull — тащит всё в Angular-зону.
 * 🧊 evoZonefree — игнорирует Angular-зону, экономит CD.
 * ⚖️ evoZoneOptimized — как утро с кофе: просыпаешься вовремя и не дергаешь лишний раз change detection.
 */

/**
 * Оператор `evoZonefull` обеспечивает полное выполнение потока внутри зоны Angular.
 *
 * Все `next`, `error` и `complete` вызовы оборачиваются в `NgZone.run`, чтобы гарантировать
 * корректный запуск change detection.
 *
 * Используй, если поток формируется вне зоны или ты не уверен, что Angular узнает об изменениях.
 *
 * @param zone Сервис `NgZone` из Angular DI.
 * @returns Оператор, оборачивающий поток в `NgZone.run()`.
 *
 * @example
 * source$.pipe(evoZonefull(this.ngZone)).subscribe(...);
 */
export function evoZonefull<T>(zone: NgZone): MonoTypeOperatorFunction<T> {
    return (source) =>
        new Observable((subscriber) =>
            source.subscribe({
                next: (value) => zone.run(() => subscriber.next(value)),
                error: (error: unknown) => zone.run(() => subscriber.error(error)),
                complete: () => zone.run(() => subscriber.complete()),
            }),
        );
}

/**
 * Оператор `evoZonefree` исполняет весь поток вне зоны Angular.
 *
 * Это помогает избежать лишних срабатываний change detection и повысить производительность,
 * особенно для часто испускаемых потоков (например, `scroll`, `animationFrame`, таймеры).
 *
 * Используй, если тебе не нужно обновлять Angular view внутри этого потока.
 *
 * @param zone Сервис `NgZone` из Angular DI.
 * @returns Оператор, исполняющий подписку вне Angular-зоны.
 *
 * @example
 * source$.pipe(evoZonefree(this.ngZone)).subscribe(...);
 */
export function evoZonefree<T>(zone: NgZone): MonoTypeOperatorFunction<T> {
    return (source) => new Observable((subscriber) => zone.runOutsideAngular(() => source.subscribe(subscriber)));
}

/**
 * Оператор `evoZoneOptimized` — комбо из `evoZonefree` и `evoZonefull`.
 *
 * Сначала поток исполняется вне Angular-зоны (`runOutsideAngular`), чтобы избежать лишнего
 * change detection. Но события `next`, `error` и `complete` всё равно возвращаются в Angular-зону.
 *
 * Это идеальный баланс, если тебе нужен быстрый поток без лишнего CD, но ты всё равно хочешь,
 * чтобы Angular знал о результатах.
 *
 * @param zone Сервис `NgZone` из Angular DI.
 * @returns Оператор, оптимизированный по производительности.
 *
 * @example
 * source$.pipe(evoZoneOptimized(this.ngZone)).subscribe(...);
 */
export function evoZoneOptimized<T>(zone: NgZone): MonoTypeOperatorFunction<T> {
    return pipe(evoZonefree(zone), evoZonefull(zone));
}
