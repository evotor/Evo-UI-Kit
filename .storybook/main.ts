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
    webpackFinal: async (config: Configuration) => {
        if (config.plugins) {
            config.plugins = config.plugins.filter((plugin) => {
                if (plugin && plugin.constructor && plugin.constructor.name === 'DefinePlugin') {
                    const pluginAny = plugin as any;
                    if (pluginAny.definitions && pluginAny.definitions['process.env']) {
                        const hasNodeEnv = pluginAny.definitions['process.env'].NODE_ENV !== undefined;
                        if (hasNodeEnv) {
                            return false;
                        }
                    }
                }
                return true;
            });
        }
        return config;
    },
};

export default config;
