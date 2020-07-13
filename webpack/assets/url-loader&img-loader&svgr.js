/* eslint-disable */
//小於Limit就會包進bundle
const urlLoaderLimit = 10;//單位:KB
module.exports = {
  install: function () {
    require('../helpers/install-D')(['imagemin', 'imagemin-gifsicle', 'imagemin-pngquant',
      'imagemin-svgo', 'imagemin-mozjpeg', 'file-loader', 'url-loader', 'img-loader', '@svgr/webpack'])
  },
  config: function () {
    const imageminGifsicle = require('imagemin-gifsicle');
    const imageminPngquant = require('imagemin-pngquant');
    const imageminMozjpeg = require('imagemin-mozjpeg');
    global.config.module.rules.push(
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loaders: [
          {
            loader: 'url-loader',
            options: {
              name: `${global.PATH.imgPath}[name].[ext]`,
              limit: 1024 * urlLoaderLimit,
            },
          },
          {
            loader: 'img-loader',
            options: {
              plugins: [
                imageminGifsicle({
                  interlaced: false,
                }),
                imageminMozjpeg({
                  progressive: true,
                  arithmetic: false,
                }),
                imageminPngquant({
                  quality: [0, 0.5],//Values: Array<0...1, 0...1>//壓縮:顏色會變,檔案變小
                  /**
                  Speed 10 has 5% lower quality, but is about 8 times faster than the default. 
                  Speed 11 disables dithering and lowers compression level.
                   */
                  // speed: 11,
                  // strip: false,//Remove optional metadata.
                  // dithering: 1,//抖動 0 (none) and 1 (full),false to disable//看不出差別
                  // posterize: 3,//1~4
                  // verbose: true,//Print verbose status messages.
                }),
              ],
            },
          },
        ],
      },
    );
  }
}