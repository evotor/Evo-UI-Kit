import { InjectionToken } from '@angular/core';
import { EvoModalConfig } from './interfaces';

export const evoModalRootId = 'EVO_MODAL_ROOT_ID';

// Config
export const evoModalDefaultConfig: EvoModalConfig = {
    host: 'body',
};

export const EVO_MODAL_CONFIG = new InjectionToken('EVO_MODAL_CONFIG');

// Modal Data
export const EVO_MODAL_DATA = new InjectionToken('EVO_MODAL_DATA');
