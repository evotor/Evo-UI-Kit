import {addons} from '@storybook/manager-api';
import {create} from '@storybook/theming/create';

addons.setConfig({
    theme: create({
        base: 'dark',
        brandImage: `assets/sb/ui-kit-logo.png`,
    }),
});
