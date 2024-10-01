import {
    ApplicationRef,
    ComponentFactoryResolver,
    EnvironmentProviders,
    Injector,
    Provider,
    makeEnvironmentProviders,
} from '@angular/core';
import {merge} from 'lodash-es';
import {EvoAbstractPortal} from '../evo-portal';
import {EvoSidebarPortal} from './evo-sidebar-portal';
import {EvoSidebarConfig} from './interfaces';
import {EVO_SIDEBAR_CONFIG, evoSidebarDefaultConfig} from './tokens';

export const portalProvider: Provider = {
    provide: EvoAbstractPortal,
    useClass: EvoSidebarPortal,
    deps: [ApplicationRef, Injector, ComponentFactoryResolver],
};

export function provideSidebar(config: EvoSidebarConfig = {}): EnvironmentProviders {
    return makeEnvironmentProviders([
        portalProvider,
        {
            provide: EVO_SIDEBAR_CONFIG,
            useValue: merge(evoSidebarDefaultConfig, config),
        },
    ]);
}
