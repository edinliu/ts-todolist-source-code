/* eslint-disable */
module.exports = {
  install: function () { },
  config: function () {
    global.config.resolve.alias = {
      './lib/browser-router': './lib/hash-router',
    };
  }
}
