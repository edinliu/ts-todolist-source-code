module.exports = function (packageNameList) {
  let installList = []
  for (i in packageNameList) {
    if (!require('./checkIsInstall')(packageNameList[i])) {
      installList.push(packageNameList[i])
    }
  }
  return installList
}