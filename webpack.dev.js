const merge = require('webpack-merge')
const common = require('./webpack.common.js')
// const path = require('path')

console.log('dev config: ', process.argv.mode)
module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    watchContentBase: true,
    compress: true,
    hot: true,
    writeToDisk: true,
  },
})
