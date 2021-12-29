import { Type } from '@angular/core';
import { Observable } from 'rxjs';
import { EvoSidebarCloseTargets, EvoSidebarSizes } from './evo-sidebar.component';

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
    afterClosed: () => Observable<EvoSidebarState>;
}
