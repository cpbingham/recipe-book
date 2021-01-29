const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist')
  },
  resolve: {
      extensions: ["*", ".js"]
  },
  module: {
      rules: [
          {
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: ["babel-loader"]
          }
      ]
  }
}