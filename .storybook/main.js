module.exports = {
    staticDirs: ['../dist/evo-ui-kit', '../src/assets'],
    stories: ['../src/**/*.stories.ts'],
    addons: [
        '@storybook/addon-actions',
        '@storybook/addon-essentials',
        '@storybook/addon-links',
    ],
    framework: {name: '@storybook/angular'},
    core: {
        builder: 'webpack5',
    },
};
