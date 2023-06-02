import {InjectionToken} from '@angular/core';
import {EvoSidebarConfig} from './interfaces';

// Root ID
export const evoSidebarRootId = 'EVO_SIDEBAR_ROOT_ID';
export const EVO_SIDEBAR_ROOT_ID = new InjectionToken<string>(
    evoSidebarRootId
);

// Config
export const evoSidebarDefaultConfig: EvoSidebarConfig = {
    host: 'body',
};

export const EVO_SIDEBAR_CONFIG = new InjectionToken<EvoSidebarConfig>('EVO_SIDEBAR_CONFIG');

// Sidebar Data
export const EVO_SIDEBAR_DATA = new InjectionToken('EVO_SIDEBAR_DATA');
