import {EventEmitter, Type} from '@angular/core';
import {Observable} from 'rxjs';
import {EvoSidebarCloseTargets, EvoSidebarSizes} from './enums';

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

export interface EvoSidebar {
    backButton: boolean;
    id: string;
    header: string;
    size: EvoSidebarSizes;
    relativeFooter: boolean;

    back: EventEmitter<void>;

    closeSidebar(source: EvoSidebarCloseTargets): void;
}
