/* eslint-disable */
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
              limit: 9999999999999,
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
                  floyd: 0.5,
                  speed: 2,
                }),
              ],
            },
          },
        ],
      },
    );
  }
}