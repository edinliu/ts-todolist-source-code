/* eslint-disable */
module.exports = {
  install: function () {
    require('../helpers/install-D')(['html-webpack-plugin', 'dynamic-cdn-webpack-plugin', 'module-to-cdn'])
  },
  config: function () {
    const DynamicCdnWebpackPlugin = require('dynamic-cdn-webpack-plugin');
    const HtmlWebpackPlugin = require('html-webpack-plugin');

    const isTrue = (element) => element === true;
    if (config.plugins.map((plugin) => plugin instanceof HtmlWebpackPlugin)
      .findIndex(isTrue) === -1) {
      config.plugins.push(new HtmlWebpackPlugin());
    }
    config.plugins.push(new DynamicCdnWebpackPlugin());
  }
}
