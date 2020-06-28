/* eslint-disable */
module.exports = {
  install: function () {
    require('../helpers/install-D')(['imagemin', 'imagemin-gifsicle', 'imagemin-pngquant',
      'imagemin-svgo', 'imagemin-mozjpeg', 'file-loader', 'url-loader', 'img-loader'])
  },
  config: function () {
    const imageminGifsicle = require('imagemin-gifsicle');
    const imageminPngquant = require('imagemin-pngquant');
    const imageminMozjpeg = require('imagemin-mozjpeg');
    const imageminSvgo = require('imagemin-svgo');
    global.config.module.rules.push(
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          {
            loader: 'url-loader',
            options: {
              name: `${global.PATH.imgPath}[name].[ext]`,
              limit: false,
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
                imageminSvgo({
                  plugins: [
                    { removeTitle: true },
                    { convertPathData: false },
                  ],
                }),
              ],
            },
          },
        ],
      },
    );
  }
}