import {ElementRef, inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';

/**
 * Безопасная обёртка над `MutationObserver`, которая гарантирует,
 * что код не упадёт в средах, где `MutationObserver` недоступен
 * (например, серверный рендеринг или тесты без DOM).
 *
 * Если `MutationObserver` существует — используется он.
 * Если нет — используется заглушка с пустыми методами.
 */
export const SafeObserver =
    typeof MutationObserver !== 'undefined'
        ? MutationObserver
        : class implements MutationObserver {
              observe(): void {}
              disconnect(): void {}
              takeRecords(): MutationRecord[] {
                  return [];
              }
          };

/**
 * Сервис `MutationObserverService` предоставляет поток `Observable<MutationRecord[]>`,
 * который эмитит записи изменений DOM для текущего элемента (`ElementRef`).
 *
 * Наблюдает за изменениями потомков, текстового содержимого и вложенных структур (`subtree: true`).
 *
 * Используется `SafeObserver`, чтобы гарантировать совместимость с SSR и тестовой средой.
 *
 * ⚠️ Важно: требует, чтобы `ElementRef` был доступен через DI-контекст (т.е. работает в компонентах/директивах).
 *
 * @example
 * this.mutationObserverService.subscribe(records => {
 *   console.log('Mutation detected!', records);
 * });
 */
@Injectable()
export class MutationObserverService extends Observable<readonly MutationRecord[]> {
    constructor() {
        const nativeElement: Node = inject(ElementRef).nativeElement;

        super((subscriber) => {
            const observer = new SafeObserver((records) => {
                subscriber.next(records);
            });

            observer.observe(nativeElement, {
                childList: true,
                characterData: true,
                subtree: true,
            });

            return () => {
                observer.disconnect();
            };
        });
    }
}
