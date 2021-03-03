import { ComponentRef, Injectable, InjectionToken, Injector, Type } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { distinctUntilChanged, filter, tap } from 'rxjs/operators';
import { cloneDeep, isEqual } from 'lodash-es';
import { evoSidebarAnimationDuration, EvoSidebarCloseTargets, EvoSidebarComponent } from './evo-sidebar.component';
import { EvoPortalService } from '../evo-portal';

export interface EvoSidebarState {
    id: string;
    isOpen: boolean;
    params?: EvoSidebarParams;
}

export interface EvoSidebarParams {
    closeTarget?: EvoSidebarCloseTargets;
    component?: Type<any>;
    data?: any;
    [property: string]: any;
}


export const evoSidebarRootId = 'EVO_SIDEBAR_ROOT_ID';
export const EVO_SIDEBAR_ROOT_ID = new InjectionToken(evoSidebarRootId);

@Injectable()
export class EvoSidebarService {

    private sidebarEvents$: Subject<EvoSidebarState> = new Subject<EvoSidebarState>();
    private registeredSidebars: {[id: string]: EvoSidebarState} = {};
    private rootCompRef: ComponentRef<EvoSidebarComponent>;

    constructor(
        private portalService: EvoPortalService,
    ) {}

    deregister(id: string) {
        delete this.registeredSidebars[id];
    }

    register(id: string) {
        this.registeredSidebars[id] = {id, isOpen: false};
    }

    open(params: EvoSidebarParams): void;
    open(id: string, params?: EvoSidebarParams): void;
    open(idOrParams: string | EvoSidebarParams, params?: EvoSidebarParams): void {
        if (typeof idOrParams === 'string') {
            this.sidebarEvents$.next({id: idOrParams, isOpen: true, params});
        } else {
            this.openWithDefaultHost(idOrParams);
        }
    }

    openWithDefaultHost(params: EvoSidebarParams) {
        if (!this.rootCompRef) {
            const injector: Injector = Injector.create({
                providers: [{
                    provide: EVO_SIDEBAR_ROOT_ID,
                    useValue: evoSidebarRootId,
                }]
            });
            this.rootCompRef = this.portalService.attach<EvoSidebarComponent>(
                EvoSidebarComponent,
                document.body,
                injector,
            );
            setTimeout(() => {
                this.open(evoSidebarRootId, params);
            }, 0);
        } else {
            this.open(evoSidebarRootId, params);
        }
    }

    close(params?: EvoSidebarParams): void;
    close(id: string, params?: EvoSidebarParams): void;
    close(idOrParams?: string | EvoSidebarParams, params?: EvoSidebarParams): void {
        if (typeof idOrParams === 'string') {
            this.sidebarEvents$.next({id: idOrParams, isOpen: false, params});
        } else {
            this.closeWithDefaultHost(idOrParams);
        }
    }

    closeWithDefaultHost(params?: EvoSidebarParams) {
        this.sidebarEvents$.next({id: evoSidebarRootId, isOpen: false, params});

        if (this.rootCompRef) {
            setTimeout(() => {
                this.rootCompRef.destroy();
                this.rootCompRef = null;
            }, evoSidebarAnimationDuration + 20);
        }
    }

    getEventsSubscription(id: string, immediate?: boolean): Observable<EvoSidebarState> {
        return this.sidebarEvents$.pipe(
            filter((data: EvoSidebarState) => data.id === id),
            filter((data: EvoSidebarState) => {
                if (!data.isOpen) {
                    return data.params && data.params.closeTarget ? true : immediate;
                }

                return true;
            }),
            distinctUntilChanged((prev: EvoSidebarState, next: EvoSidebarState) => {
                return immediate ? false : isEqual(prev, next);
            }),
            tap((data: EvoSidebarState) => {
                if (!immediate) {
                    this.registeredSidebars[data.id] = cloneDeep(data);
                }
            }),
        );
    }
}
