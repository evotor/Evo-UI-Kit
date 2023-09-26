import {Type} from '@angular/core';
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
    component?: Type<any>;
    closeOnNavigation?: boolean;
    size?: EvoSidebarSizes;
    data?: any;
    [property: string]: any;
}

export interface EvoOpenedSidebarActions {
    afterClosed: () => Observable<EvoSidebarParams>;
}
