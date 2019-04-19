const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');

const webpackConfig = {
  mode: 'production',
  optimization: {
    minimizer: [new TerserJSPlugin({
      terserOptions: {
        output: {
          comments: false,
        },
      },
    }), new OptimizeCssAssetsPlugin({
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }],
      },
    })],
  },
};

module.exports = webpackConfig;
