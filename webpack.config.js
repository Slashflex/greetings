const {resolve} = require('path');

module.exports = {
    entry: resolve('./script.js'),
    mode: 'development',
    output: {
      path: resolve('./'),
      filename: './dist/bundle.min.js'
    }
  }