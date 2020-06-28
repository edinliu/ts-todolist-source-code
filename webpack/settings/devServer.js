/* eslint-disable */
const path = require('path');

module.exports = {
  install: function () { },
  config: function () {
    global.config.devServer = {
      contentBase: path.resolve(global.PATH.public),
      compress: true,
      port: 3000,
    };
  }
}
