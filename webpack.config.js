const {resolve} = require('path');

module.exports = {
  entry: resolve('./script.js'),
  mode: 'development',
  output: {
    path: resolve('./'),
    filename: './dist/bundle.min.js'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
}