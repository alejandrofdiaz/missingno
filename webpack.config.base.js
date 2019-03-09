const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtract = require('mini-css-extract-plugin');

const basePath = __dirname;
const distPath = 'dist';

const indextInput = './src/index.html';
const indexOutput = 'index.html';

function webpackConfigGenerator(env) {
  const sourcemaps = !!env.development;
  const localIdentName = !!env.development
    ? '[local]--[hash:base64:5]'
    : '[hash:base64:2]';

  const webpackInitConfig = {
    resolve: {
      extensions: ['.js', '.ts', '.tsx', '.scss'],
    },
    entry: {
      app: ['./src/index.ts'],
    },
    output: {
      path: path.join(basePath, distPath),
      filename: '[chunkhash][name].js',
    },
    module: {
      rules: [
        {
          test: /\.ts/,
          exclude: /node_modules/,
          use: ['ts-loader', 'tslint-loader'],
        },
        {
          test: /\.css/,
          exclude: /node_modules/,
          use: [
            MiniCSSExtract.loader,
            { loader: 'css-loader', options: { sourceMap: sourcemaps } },
            { loader: 'postcss-loader', options: { sourceMap: sourcemaps } },
          ],
        },
        {
          test: /\.scss/,
          exclude: /node_modules/,
          use: [
            MiniCSSExtract.loader,
            'css-modules-typescript-loader',
            {
              loader: 'css-loader',
              options: {
                sourceMap: sourcemaps,
                modules: true,
                localIdentName,
              },
            },
            {
              loader: 'postcss-loader',
              options: { sourceMap: sourcemaps, modules: true },
            },
            {
              loader: 'sass-loader',
              options: { sourceMap: sourcemaps, modules: true },
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
    plugins: [
      new HTMLWebpackPlugin({
        filename: indexOutput,
        template: indextInput,
      }),
      new MiniCSSExtract({
        filename: '[name].css',
        chunkFilename: '[id].css',
      }),
      new webpack.DefinePlugin({
        ENV: JSON.stringify(env),
      }),
    ],
  };

  return webpackInitConfig;
}

module.exports = webpackConfigGenerator;
