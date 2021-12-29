import { distinctUntilChanged, filter, take, tap } from 'rxjs/operators';
import { Inject, Injectable, Optional } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { isEqual } from 'lodash-es';
import { EvoModalState, EvoModalParams, EvoModalConfig, EvoOpenedModalActions } from './interfaces';
import { evoModalDefaultConfig, evoModalRootId, EVO_MODAL_CONFIG } from './tokens';
import { EvoModalAbstractPortal } from './evo-modal-abstract-portal';

@Injectable()
export class EvoModalService {

    private modalEvents$ = new Subject<EvoModalState>();
    private registeredModals: {[modalId: string]: EvoModalState} = {};
    private config: EvoModalConfig;

    constructor(
        private portal: EvoModalAbstractPortal, // EvoModalPortal provided
        @Optional()
        @Inject(EVO_MODAL_CONFIG) private _config: EvoModalConfig,
    ) {
        this.config = {
            ...evoModalDefaultConfig,
            ..._config,
        };
    }

    register(id: string) {
        this.registeredModals[id] = {id, isOpen: false};
    }

    unregister(id: string) {
        delete this.registeredModals[id];
    }

    open(params: EvoModalParams): EvoOpenedModalActions;
    open(id: string, params?: EvoModalParams): EvoOpenedModalActions;
    open(idOrParams: string | EvoModalParams, params?: EvoModalParams): EvoOpenedModalActions {
        if (typeof idOrParams === 'string') {
            this.modalEvents$.next({
                id: idOrParams,
                isOpen: true,
                params,
            });
            return this.getOpenedModalActions(evoModalRootId);
        } else {
            this.openWithDefaultHost(idOrParams);
            return this.getOpenedModalActions(evoModalRootId);
        }
    }

    openWithDefaultHost(params: EvoModalParams) {
        if (!this.portal.hasAttachedPortal()) {

            this.portal.attach(this.config.host);
            setTimeout(() => {
                this.open(evoModalRootId, params);
            }, 0);
        } else {
            this.open(evoModalRootId, params);
        }
    }

    cleanupDefaultHost() {
        if (!this.portal.hasAttachedPortal()) {
            return;
        }
        this.portal.detach();
    }

    close(agreement: boolean, params?: EvoModalParams): void;
    close(id: string, agreement: boolean, params?: EvoModalParams): void;
    close(idOrAgreement: string | boolean, agreementOrParams?: boolean | EvoModalParams, params?: EvoModalParams) {
        if (
            typeof idOrAgreement === 'string' &&
            typeof agreementOrParams === 'boolean'
        ) {
            this.modalEvents$.next({
                id: idOrAgreement,
                isOpen: false,
                agreement: agreementOrParams,
                params,
            });
        } else if (
            typeof idOrAgreement === 'boolean'
        ) {
            this.closeWithDefaultHost(idOrAgreement, agreementOrParams as EvoModalParams);
        } else {
            throw new Error('EvoModal: wrong params passed to method');
        }
    }

    closeWithDefaultHost(agreement: boolean, params?: EvoModalParams) {
        this.close(this.config.host, agreement, params);
    }

    getEventsSubscription(id: string): Observable<EvoModalState> {
        return this.modalEvents$.pipe(
            filter((data: EvoModalState) => data.id === id),
            distinctUntilChanged((a, b) => isEqual(a, b)),
            tap((evoModalState: EvoModalState) => evoModalState[id]),
        );
    }

    getOpenedModalActions(id: string): EvoOpenedModalActions {
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
