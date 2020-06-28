module.exports = function (packageNameList) {
  let installList = require('./getInstallList')(packageNameList)
  let script = `npm install ${installList.join(' ')}`
  if (installList.length !== 0) {
    console.log("npm install", installList)
    require('./shellExec')(script)
  }
  else {
    console.log(packageNameList, "npm install 已經被安裝了")
  }
}