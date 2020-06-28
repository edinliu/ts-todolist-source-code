/* eslint-disable */
module.exports = {
  install: function () {
    require('../helpers/install')(['react', 'react-dom'])
    require('../helpers/install-D')(['@types/react', '@types/react-dom', 'typescript', 'ts-loader'])
  },
  config: function () {
    global.config.resolve.extensions = [".wasm", ".ts", ".tsx", ".mjs", ".cjs", ".js", ".json"]
    global.config.module.rules.push(
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },
    )
  }
}