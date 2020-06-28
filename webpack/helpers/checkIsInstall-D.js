const fs = require('fs');

let pkgJSON = JSON.parse(fs.readFileSync('package.json'))
let devDependenciesList = Object.keys(pkgJSON.devDependencies)
module.exports = function (packageName) {
  return devDependenciesList.indexOf(packageName) !== -1
}
