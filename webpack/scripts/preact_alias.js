/* eslint-disable */
module.exports = {
  install: function () {
    require('../helpers/install')(['preact'])
  },
  config: function () {
    global.config.resolve.alias = {
      react: 'preact/compat',
      'react-dom': 'preact/compat',
    };
  }
}
