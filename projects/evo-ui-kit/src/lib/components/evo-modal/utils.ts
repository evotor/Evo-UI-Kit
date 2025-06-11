import {
    EvoConfiguredComponentModalParams,
    EvoConfiguredModalParams, EvoConfiguredTemplateModalParams,
    EvoDynamicModalParams,
    EvoModalCombinedParams
} from './interfaces';

export function isDynamicModalParams(params?: EvoModalCombinedParams): params is EvoDynamicModalParams {
    return params && !isConfiguredModalParams(params) && params?.hasOwnProperty('component');
}

export function isConfiguredModalParams(params?: EvoModalCombinedParams): params is EvoConfiguredModalParams {
    return params &&
        (params.hasOwnProperty('titleText') ||
            params.hasOwnProperty('acceptText') ||
            params.hasOwnProperty('declineText') ||
            params.hasOwnProperty('acceptButtonColor') ||
            params.hasOwnProperty('acceptButtonTheme') ||
            params.hasOwnProperty('declineButtonColor') ||
            params.hasOwnProperty('declineButtonTheme') ||
            params.hasOwnProperty('asyncAccept'));
}

export function isConfiguredTemplateModalParams(params?: EvoModalCombinedParams): params is EvoConfiguredTemplateModalParams<unknown> {
    return params && isConfiguredModalParams(params) && params.hasOwnProperty('template');
}

export function isConfiguredComponentModalParams(params?: EvoModalCombinedParams): params is EvoConfiguredComponentModalParams<unknown> {
    return params && isConfiguredModalParams(params) && params.hasOwnProperty('component');
}
