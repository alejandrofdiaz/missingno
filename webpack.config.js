const merge = require('webpack-merge');
const baseConfigGenerator = require('./webpack.config.base.js');
const prodConfig = require('./webpack.config.prod.js');
const devConfig = require('./webpack.config.dev.js');

function webpackEnviromentSelector(env) {
  let config;

  const isDevelopment = !!JSON.parse(env.development);

  console.log('DEVELOPMENT: ', isDevelopment);

  if (isDevelopment) {
    config = devConfig(env);
  } else {
    config = prodConfig;
  }

  const baseConfig = baseConfigGenerator(env);

  return merge(baseConfig, config);
}

module.exports = webpackEnviromentSelector;
