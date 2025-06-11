import {distinctUntilChanged, filter} from 'rxjs/operators';
import {inject, Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {isEqual} from 'lodash-es';
import {EvoSidebarState} from '../evo-sidebar';
import {EvoModalPortal} from "./evo-modal-portal";
import {EVO_MODAL_CONFIG, EVO_MODAL_ROOT_ID} from './tokens';
import {
    EvoConfiguredModalParams,
    EvoDynamicModalParams,
    EvoModalConfig,
    EvoModalParams,
    EvoModalState
} from './interfaces';
import {isConfiguredModalParams, isDynamicModalParams} from './utils';

@Injectable({providedIn: 'root'})
export class EvoModalService {

    private readonly portal = inject(EvoModalPortal);
    private readonly config = inject<EvoModalConfig>(EVO_MODAL_CONFIG);
    private readonly evoModalRootId = inject(EVO_MODAL_ROOT_ID);

    private readonly modalEvents$ = new Subject<EvoModalState>();
    private readonly registeredModals = new Map<string, EvoModalState>();

    register(id: string): void {
        this.registeredModals.set(id, {id, isOpen: false});
    }

    unregister(id: string): void {
        this.registeredModals.delete(id);
    }

    open<T>(params: EvoConfiguredModalParams<T>);
    open(params: EvoDynamicModalParams);
    open(id: string, params?: EvoModalParams);
    open(idOrParams: string | EvoDynamicModalParams | EvoConfiguredModalParams, params?: EvoModalParams): void {
        if (typeof idOrParams === 'string') {
            this.modalEvents$.next({id: idOrParams, isOpen: true, params});
        } else if (isDynamicModalParams(idOrParams)) {
            this.openDynamicModal(idOrParams);
        } else if (isConfiguredModalParams(idOrParams)) {
            this.openConfiguredModal(idOrParams);
        }
    }

    close(id = this.evoModalRootId, agreement = false, params?: EvoModalParams): void {
        this.modalEvents$.next({id, isOpen: false, agreement, params});
    }

    getEventsSubscription(id: string): Observable<EvoModalState> {
        return this.modalEvents$.pipe(
            filter(({id: currentId}: EvoSidebarState) => currentId === id),
            distinctUntilChanged((a, b) => isEqual(a, b)),
        );
    }

    openDynamicModal(params: EvoDynamicModalParams): void {
        this.attachPortal();

        this.modalEvents$.next({id: this.evoModalRootId, isOpen: true, params});
    }

    openConfiguredModal(idOrParams: EvoConfiguredModalParams): void {
        this.attachPortal();

        this.modalEvents$.next({id: this.evoModalRootId, isOpen: true, params: idOrParams});
    }

    cleanupDefaultHost(): void {
        if (!this.portal.hasAttachedPortal()) {
            return;
        }

        this.portal.detach();
    }

    private attachPortal(): void {
        if (this.portal.hasAttachedPortal()) {
            return;
        }

        this.portal.attach(this.config.host);
    }
}
