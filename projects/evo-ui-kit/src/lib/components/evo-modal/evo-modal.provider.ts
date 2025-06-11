import {EnvironmentProviders, makeEnvironmentProviders} from "@angular/core";
import {EvoModalPortal} from './evo-modal-portal';
import {EVO_MODAL_CONFIG, EVO_MODAL_DEFAULT_CONFIG, EVO_MODAL_DEFAULT_ROOT_ID, EVO_MODAL_ROOT_ID} from './tokens';
import {EvoModalConfig} from './interfaces';
import {merge} from 'lodash-es';

export function provideModal(config: EvoModalConfig = {}): EnvironmentProviders {
    return makeEnvironmentProviders([
        EvoModalPortal,
        {
            provide: EVO_MODAL_ROOT_ID,
            useValue: EVO_MODAL_DEFAULT_ROOT_ID,
        },
        {
            provide: EVO_MODAL_CONFIG,
            useValue: merge(EVO_MODAL_DEFAULT_CONFIG, config),
        },
    ]);
}
