import { Type } from "@angular/core";
import { Observable } from "rxjs";
import { EvoSidebarCloseTargets } from "./evo-sidebar.component";

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
    data?: any;
    [property: string]: any;
}

export interface EvoOpenedSidebarActions {
    afterClosed: () => Observable<EvoSidebarParams>
}