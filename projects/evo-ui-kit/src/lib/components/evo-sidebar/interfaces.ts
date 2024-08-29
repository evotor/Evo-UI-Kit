import {Injector, Type} from '@angular/core';
import {Observable} from 'rxjs';
import {EvoSidebarCloseTargets} from './enums/evo-sidebar-close-targets';
import {EvoSidebarSizes} from './enums/evo-sidebar-sizes';

export interface EvoSidebarConfig {
    host?: string;
}

export interface EvoSidebarState {
    id: string;
    isOpen: boolean;
    params?: EvoSidebarParams;
}

export interface EvoSidebarParams {
    closeTarget?: EvoSidebarCloseTargets;
    // eslint-disable-next-line
    component?: Type<any>;
    closeOnNavigation?: boolean;
    size?: EvoSidebarSizes;
    // eslint-disable-next-line
    data?: any;
    injector?: Injector;
    // eslint-disable-next-line
    [property: string]: any;
}

export interface EvoOpenedSidebarActions {
    afterClosed: () => Observable<EvoSidebarParams>;
}
