const path = require('path');

module.exports = {
  extends: [
    "stylelint-config-recommended-scss",
    path.join(path.dirname(require.resolve('prettier-stylelint')), 'config.js'),
  ],
};
