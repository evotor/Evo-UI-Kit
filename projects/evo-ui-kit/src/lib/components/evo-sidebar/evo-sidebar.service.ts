import { Inject, Injectable, Optional } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { distinctUntilChanged, filter, take, tap } from 'rxjs/operators';
import { cloneDeep, isEqual } from 'lodash-es';
import { EvoSidebarState, EvoSidebarConfig, EvoSidebarParams, EvoOpenedSidebarActions } from './interfaces';
import { evoSidebarDefaultConfig, evoSidebarRootId, EVO_SIDEBAR_CONFIG } from './tokens';
import { EvoSidebarAbstractPortal } from './evo-sidebar-abstract-portal';

@Injectable()
export class EvoSidebarService {

    private sidebarEvents$ = new Subject<EvoSidebarState>();
    private registeredSidebars: {[id: string]: EvoSidebarState} = {};
    private config: EvoSidebarConfig;

    constructor(
        private portal: EvoSidebarAbstractPortal, // EvoSidebarPortal provided
        @Optional()
        @Inject(EVO_SIDEBAR_CONFIG) private _config: EvoSidebarConfig,
    ) {
        this.config = {
            ...evoSidebarDefaultConfig,
            ..._config,
        };
    }

    deregister(id: string) {
        delete this.registeredSidebars[id];
    }

    register(id: string) {
        if (this.registeredSidebars[id]) {
            throw Error(`[EvoUiKit]: Another evo-sidebar with id = "${id}" already registered!`);
        } else {
            this.registeredSidebars[id] = { id, isOpen: false };
        }
    }

    open(params: EvoSidebarParams): EvoOpenedSidebarActions;
    open(id: string, params?: EvoSidebarParams): EvoOpenedSidebarActions;
    open(idOrParams: string | EvoSidebarParams, params?: EvoSidebarParams): EvoOpenedSidebarActions {
        if (typeof idOrParams === 'string') {
            this.sidebarEvents$.next({
                id: idOrParams,
                isOpen: true,
                params,
            });
            return this.getOpenedSidebarActions(idOrParams);
        } else {
            this.openWithDefaultHost(idOrParams);
            return this.getOpenedSidebarActions(evoSidebarRootId);
        }
    }

    openWithDefaultHost(params: EvoSidebarParams) {
        if (!this.portal.hasAttachedPortal()) {
            this.portal.attach(this.config.host);
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

    cleanupDefaultHost() {
        if (!this.portal.hasAttachedPortal()) {
            return;
        }
        this.portal.detach();
    }

    getOpenedSidebarActions(id: string): EvoOpenedSidebarActions {
        return {
            afterClosed: () => {
                return this.getEventsSubscription(id).pipe(
                    filter(({ isOpen }) => !isOpen),
                    take(1),
                );
            }
        };
    }

}
