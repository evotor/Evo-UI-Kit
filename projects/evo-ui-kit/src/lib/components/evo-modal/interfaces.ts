import { Type } from '@angular/core';
import { Observable } from 'rxjs';

export interface EvoModalConfig {
    host?: string;
}

export interface EvoModalParams {
    component?: Type<any>;
    data?: any;
    closeOnNavigation?: boolean;
    [property: string]: any;
}

export interface EvoModalState {
    id: string;
    isOpen: boolean;
    agreement?: boolean;
    params?: EvoModalParams;
}

export interface EvoOpenedModalActions {
    afterClosed: () => Observable<EvoModalState>;
}
