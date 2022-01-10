module.exports = {
    stories: ['../src/**/*.stories.ts'],
    core: {
        builder: 'webpack5',
    },
    addons: ['@storybook/addon-actions', '@storybook/addon-links', '@storybook/addon-notes'],
};
