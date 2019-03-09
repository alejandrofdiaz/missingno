const dotEnvValues = require('dotenv').config();
const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtract = require('mini-css-extract-plugin');

const basePath = __dirname;
const distPath = 'dist';

const indextInput = './src/index.html';
const indexOutput = 'index.html';

const envVariables = (env) =>
  JSON.stringify(
    Object.entries(env).reduce(
      (acc, [attribute, value]) => {
        console.log(attribute, value);
        acc[attribute] = JSON.parse(value);
        return acc;
      },
      {
        ...dotEnvValues.parsed,
        ...(!!JSON.parse(env.mock)
          ? { WP_ENDPOINT: process.env.WP_MOCK_ENDPOINT }
          : {}),
      },
    ),
  );

function webpackConfigGenerator(env) {
  const isDevelopment = !!JSON.parse(env.development);
  const sourcemaps = isDevelopment;
  const localIdentName = isDevelopment
    ? '[local]--[hash:base64:5]'
    : '[hash:base64:2]';

  const isMock = !!env.mock;

  const webpackInitConfig = {
    resolve: {
      extensions: ['.js', '.ts', '.tsx', '.scss'],
    },
    entry: {
      app: ['./src/index.tsx'],
    },
    output: {
      path: path.join(basePath, distPath),
      filename: '[chunkhash][name].js',
    },
    module: {
      rules: [
        {
          test: /\.tsx?/,
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
        ENV: envVariables(env),
      }),
    ],
  };

  return webpackInitConfig;
}

module.exports = webpackConfigGenerator;
