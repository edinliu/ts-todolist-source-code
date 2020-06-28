module.exports = function (packageNameList) {
  let installList = []
  for (i in packageNameList) {
    if (!require('./checkIsInstall-D')(packageNameList[i])) {
      installList.push(packageNameList[i])
    }
  }
  return installList
}