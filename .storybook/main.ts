import {StorybookConfig} from '@storybook/angular';

const config: StorybookConfig = {
    staticDirs: [{from: '../src/assets', to: 'assets/sb'}],
    stories: ['../src/**/*.stories.ts'],
    addons: ['@storybook/addon-controls', '@storybook/addon-actions'],
    framework: {
        name: '@storybook/angular',
        options: {enableIvy: true},
    },
};
export default config;
