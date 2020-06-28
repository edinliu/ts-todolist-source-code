const fs = require('fs');

module.exports = function (packageName) {
  let pkgJSON = JSON.parse(fs.readFileSync('package.json'))
  let devDependenciesList = Object.keys(pkgJSON.devDependencies)
  return devDependenciesList.indexOf(packageName) !== -1
}
