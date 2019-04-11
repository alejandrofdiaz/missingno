const webpackConfig = ({ mock }) => ({
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    ...(!!JSON.parse(mock || false)
      ? require('./src/config/mockServer').devServerOptions
      : {}),
  },
});

module.exports = webpackConfig;
