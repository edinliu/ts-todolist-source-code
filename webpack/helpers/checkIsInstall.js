const fs = require('fs');

module.exports = function (packageName) {
  let pkgJSON = JSON.parse(fs.readFileSync('package.json'))
  let dependenciesList = Object.keys(pkgJSON.dependencies)
  return dependenciesList.indexOf(packageName) !== -1
}
