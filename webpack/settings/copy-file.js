const shellExec = require('../helpers/shellExec');

module.exports = {
  install() { },
  config() {
    shellExec('rm build/*');
    shellExec('rm -r build/*');
    shellExec('cp public/* ./build');
    shellExec('cp -r public/* ./build');
  },
};
