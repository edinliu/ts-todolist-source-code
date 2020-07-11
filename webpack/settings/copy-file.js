const shellExec = require('../helpers/shellExec')

module.exports = {
  install: function () { },
  config: function () {
    shellExec('cp public/* ./build')
  }
};