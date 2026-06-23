import { StorybookConfig } from '@storybook/angular';
import type { Configuration } from 'webpack';

const config: StorybookConfig = {
    staticDirs: [{ from: '../src/assets', to: 'assets/sb' }],
    stories: ['../src/**/*.stories.ts'],
    addons: [],
    framework: {
        name: '@storybook/angular',
        options: {},
    },
    typescript: {
        check: false
    }
};

export default config;
