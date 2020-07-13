/* eslint-disable */
module.exports = {
  install: function () {
    require('../helpers/install-D')(['@fullhuman/postcss-purgecss', 'cssnano', 'autoprefixer', 'postcss-loader', 'precss', 'style-loader', 'css-loader', 'sass-loader', 'node-sass'])
  },
  config: function () {
    const cssRegex = /\.css$/;
    const cssModuleRegex = /\.module\.css$/;
    const sassRegex = /\.(scss|sass)$/;
    const sassModuleRegex = /\.module\.(scss|sass)$/;
    const postCssConfig = {
      loader: 'postcss-loader',
      options: {
        ident: 'postcss',
        plugins: [
          require('precss'),
          require('autoprefixer'),
          require('cssnano')({
            preset: ['default', {
              discardComments: {
                removeAll: true,
              },
            }],
          }),
          require('@fullhuman/postcss-purgecss')({
            content: [
              './src/*.*',
              './src/components/*.*',
              './src/pages/*.*',
              './src/pages/*/*.*',
            ],
          }),
        ],
      },
    };

    const cssRule = {
      test: cssRegex,
      exclude: cssModuleRegex,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
          },
        },
        postCssConfig,
      ],
    };
    const cssModuleRule = {
      test: cssModuleRegex,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              mode: 'local',
              localIdentName: '[hash:base64:5]',
            },
            importLoaders: 1,
          },
        },
        postCssConfig,
      ],
    };
    const sassRule = {
      test: sassRegex,
      exclude: sassModuleRegex,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
          },
        },
        postCssConfig,
        'sass-loader',
      ],
    };
    const sassModuleRule = {
      test: sassModuleRegex,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              mode: 'local',
              localIdentName: '[hash:base64:5]',
            },
            importLoaders: 1,
          },
        },
        postCssConfig,
        'sass-loader',
      ],
    };
    global.config.module.rules.push(
      cssRule,
      cssModuleRule,
      sassRule,
      sassModuleRule,
    );
  }
}

