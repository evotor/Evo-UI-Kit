import {evoCreateToken} from '../../utils';
import {ValueProvider} from '@angular/core';

export const EVO_ASSETS_PATH = evoCreateToken('assets/ui-kit', 'EVO_ASSETS_PATH');
export const EVO_LOCAL_ASSETS_PATH = evoCreateToken(null, 'EVO_LOCAL_ASSETS_PATH');

/**
 * Переопределяет дефолтный путь к assets ui-kit-а.
 */
export function evoAssetsPathProvider(useValue: string): ValueProvider {
    return {
        provide: EVO_ASSETS_PATH,
        useValue,
    };
}

/**
 * Определяет путь к assets проекта.
 */
export function evoLocalAssetsPathProvider(useValue: string): ValueProvider {
    return {
        provide: EVO_LOCAL_ASSETS_PATH,
        useValue,
    };
}
