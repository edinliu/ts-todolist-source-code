module.exports = function (packageNameList) {
  let installList = require('./getInstallList-D')(packageNameList)
  let script = `npm install -D ${installList.join(' ')}`
  if (installList.length !== 0) {
    console.log("npm install -D", installList)
    require('./shellExec')(script)
  }
  else {
    console.log(packageNameList, "npm install -D 已經被安裝了")
  }
}