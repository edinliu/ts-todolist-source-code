const fs = require('fs');

let pkgJSON = JSON.parse(fs.readFileSync('package.json'))
let dependenciesList = Object.keys(pkgJSON.dependencies)
module.exports = function (packageName) {
  return dependenciesList.indexOf(packageName) !== -1
}
