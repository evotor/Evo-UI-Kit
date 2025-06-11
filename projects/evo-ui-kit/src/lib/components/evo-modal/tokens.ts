import {InjectionToken} from '@angular/core';
import {EvoModalConfig} from "./interfaces";

export const EVO_MODAL_CONFIG = new InjectionToken<EvoModalConfig>('EVO_MODAL_CONFIG');

// Root ID
export const EVO_MODAL_DEFAULT_ROOT_ID = 'EVO_MODAL_ROOT_ID';
export const EVO_MODAL_ROOT_ID = new InjectionToken<string>('EvoModal default root ID');

// Config
export const EVO_MODAL_DEFAULT_CONFIG: EvoModalConfig = {
    host: 'body',
};

// Modal Data
export const EVO_MODAL_DATA = new InjectionToken('EVO_MODAL_DATA');
