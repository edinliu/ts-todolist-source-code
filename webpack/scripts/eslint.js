/* eslint-disable */
module.exports = {
  install: function () {
    require('../helpers/install-D')(['eslint'])
    require('../helpers/shellExec')('npx eslint --init')
  },
  config: function () { }
}
