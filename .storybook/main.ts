import {StorybookConfig} from '@storybook/angular';

const config: StorybookConfig = {
    staticDirs: ['../dist/evo-ui-kit', '../src/assets'],
    stories: ['../src/**/*.stories.ts'],

    addons: ['@storybook/addon-controls', '@storybook/addon-actions'],

    framework: {
        name: '@storybook/angular',
        options: {enableIvy: true},
    },

    docs: {},
};

export default config;
