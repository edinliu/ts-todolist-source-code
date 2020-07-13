/* eslint-disable */
module.exports = {
  install: function () {
    require('../helpers/install-D')(['webpack-bundle-analyzer'])
  },
  config: function () {
    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
    global.config.plugins.push(new BundleAnalyzerPlugin())
  }
}
