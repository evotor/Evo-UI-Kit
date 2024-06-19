import {evoCreateTokenFromFactory} from '../../utils';
import {inject, Provider} from '@angular/core';
import {CATEGORY_BY_ICON_NAME} from '@evotor-dev/ui-kit/icons';
import {EVO_ASSETS_PATH, EVO_LOCAL_ASSETS_PATH} from './assets-path';

export const EVO_ICON_RESOLVER = evoCreateTokenFromFactory(() => {
    const assetsPath = inject(EVO_ASSETS_PATH);
    const localAssetsPath = inject(EVO_LOCAL_ASSETS_PATH);

    return (icon: string) => {
        if (!icon || icon.includes('/')) {
            return icon;
        } else {
            // if there is no icon in the ui-kit, use local resources
            if (!CATEGORY_BY_ICON_NAME.hasOwnProperty(icon)) {
                if (localAssetsPath) {
                    return `${localAssetsPath}/icons/${icon}.svg`;
                }

                throw new Error(
                    `No icon with name "${icon}" was found. Please check UI Kit icons or register local path to assets directory`,
                );
            }

            return `${assetsPath}/icons/${CATEGORY_BY_ICON_NAME[icon]}/${icon}.svg`;
        }
    };
}, 'EVO_ICON_RESOLVER');

export function evoIconResolverProvider(useValue: (s: string) => string): Provider {
    return {
        provide: EVO_ICON_RESOLVER,
        useValue,
    };
}
