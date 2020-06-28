/* eslint-disable */
const path = require('path');

global.PATH = {
  src: 'src',
  imgPath: 'images/',
  public: 'public',
  build: 'build',
};
global.config = {
  entry: {
    index: path.resolve(global.PATH.src, 'index.tsx')
  },
  output: {
    path: path.resolve(global.PATH.build),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [],
  },
  plugins: [],
  resolve: { alias: {} },
};
module.exports = (env) => {
  const generalConfig = [
    require('./webpack/assets/html'),
    require("./webpack/scripts/typescript&react"),
    require('./webpack/scripts/babel-loader&react'),
    // require('./webpack/scripts/babel-loader&react&styled-jsx'),//在typescript中使用styled jsx會出錯
    // require('./webpack/assets/url-loader&img-loader'),
    require('./webpack/assets/url-loader&img-loader&svgr'),
    // require('./webpack/scripts/preact_alias'),//跟dynamic-cdn一起使用，preact不會取代react
  ]
  const devConfig = [
    require('./webpack/styles/styleDevRules'),
    require('./webpack/scripts/source-map'),
    // require('./webpack/settings/devServer'),//設定 port:3000
  ]
  const prodConfig = [
    require('./webpack/styles/styleProdRules'),
    require('./webpack/settings/dynamic-cdn'),
    // require('./webpack/settings/compression'),//產生.gz
  ]
  if (env === 'dev') {
    for (let i = 0; i < generalConfig.length; i++) generalConfig[i].config()
    for (let i = 0; i < devConfig.length; i++) devConfig[i].config()
  }
  if (env === 'prod') {
    for (let i = 0; i < generalConfig.length; i++) generalConfig[i].config()
    for (let i = 0; i < prodConfig.length; i++) prodConfig[i].config()
  }
  if (env === 'install') {
    for (let i = 0; i < generalConfig.length; i++) generalConfig[i].install()
    for (let i = 0; i < devConfig.length; i++) devConfig[i].install()
    for (let i = 0; i < prodConfig.length; i++) prodConfig[i].install()
    console.log('All package installed!!');
    process.exit();
  }
  return global.config;
};
