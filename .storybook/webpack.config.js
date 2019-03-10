// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
const path = require('path');
const localIdentName = '[name]__[local]___[hash:base64:5]';

module.exports = {
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.scss'],
    modules: [path.resolve('./src'), 'node_modules'],
  },
  plugins: [
    // your custom plugins
  ],
  module: {
    rules: [
      {
        test: /\.tsx?/,
        exclude: /node_modules|test.tsx?/,
        use: ['ts-loader'],
      },
      {
        test: /\.stories\.tsx?$/,
        exclude: /node_modules/,
        loaders: [require.resolve('@storybook/addon-storysource/loader')],
        enforce: 'pre',
      },
      {
        test: /\.scss/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              localIdentName,
            },
          },
          {
            loader: 'postcss-loader',
            options: { sourceMap: true, modules: true },
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true, modules: true },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              // outputPath: 'images/',
              // publicPath: 'images/',
            },
          },
        ],
      },
    ],
  },
};
