const merge = require('webpack-merge');
const baseConfigGenerator = require('./webpack.config.base.js');
const prodConfig = require('./webpack.config.prod.js');
const devConfig = require('./webpack.config.dev.js');

function webpackEnviromentSelector(env) {
  let config;
  console.log(!!JSON.parse(env.mock));
  if (env.production) config = prodConfig;
  if (env.development) config = devConfig(env);

  const baseConfig = baseConfigGenerator(env);

  return merge(baseConfig, config);
}

module.exports = webpackEnviromentSelector;
