import {Injector, TemplateRef, Type} from '@angular/core';
import {EvoButtonColor, EvoButtonTheme} from '../evo-button/types';
import {Observable} from 'rxjs';

export interface EvoModalConfig {
    host?: string;
}

export interface EvoModalState {
    id: string;
    isOpen: boolean;
    agreement?: boolean;
    params?: EvoModalCombinedParams;
}

export interface EvoDynamicModalParams {
    component: Type<unknown>;
    data?: unknown;
    injector?: Injector;
}

interface EvoConfiguredBaseModalParams {
    acceptButtonColor?: EvoButtonColor;
    acceptButtonTheme?: EvoButtonTheme;
    acceptText?: string;
    asyncAccept?: () => Observable<unknown>;
    declineButtonColor?: EvoButtonColor;
    declineButtonTheme?: EvoButtonTheme;
    declineText?: string
    titleText?: string;
}

export interface EvoConfiguredTemplateModalParams<T> extends EvoConfiguredBaseModalParams {
    template: TemplateRef<{data: T}>;
    component?: never;
    data?: T;
    injector?: never;
}

export interface EvoConfiguredComponentModalParams<T> extends EvoConfiguredBaseModalParams {
    component: Type<unknown>;
    data?: T;
    injector?: Injector;
    template?: never;
}

export type EvoConfiguredModalParams<T = unknown> = EvoConfiguredTemplateModalParams<T> | EvoConfiguredComponentModalParams<T>;

export interface EvoModalParams {
    [property: string]: unknown;
}

export type EvoModalCombinedParams = EvoModalParams | EvoDynamicModalParams | EvoConfiguredModalParams;
