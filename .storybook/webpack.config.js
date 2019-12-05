module.exports = ({ config, mode }) => {
  config.module.rules.push({
      test: [/\.stories\.ts$/],
      use: [{
        loader: require.resolve('@storybook/addon-storysource/loader'),
        options: { parser: 'typescript' },
      }]
    }, {
      test: /\projects\.ts$/,
      use: [{
        loader: require.resolve('awesome-typescript-loader'),
      }],
    }, {
      test: /\.css$/,
      use: [{
        loader: require.resolve('style-loader'),
      }, {
        loader: 'css-loader',
        options: {
          sourceMap: true,
        },
      }],
    });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};