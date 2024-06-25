import {InjectionToken} from '@angular/core';

export function evoCreateToken<T>(defaults: T, description?: string): InjectionToken<T> {
    return evoCreateTokenFromFactory(() => defaults, description);
}

export function evoCreateTokenFromFactory<T>(factory: () => T, description?: string): InjectionToken<T> {
    return new InjectionToken<T>(description || '', {factory});
}
