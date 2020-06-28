/* eslint-disable */
module.exports = {
  install: function () {
    require('../helpers/install-D')(['compression-webpack-plugin'])
  },
  config: function () {
    const CompressionPlugin = require('compression-webpack-plugin');
    config.plugins.push(new CompressionPlugin());
  }
}
