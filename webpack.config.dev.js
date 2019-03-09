const webpackConfig = ({ mock }) => ({
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    ...(!!JSON.parse(mock)
      ? require('./src/config/mockServer').devServerOptions
      : {}),
  },
});

module.exports = webpackConfig;
