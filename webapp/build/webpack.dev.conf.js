var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
  // var BrowserSyncPlugin = require('browser-sync-webpack-plugin')

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function(name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new FriendlyErrorsPlugin(),
    // // https://www.npmjs.com/package/browser-sync-webpack-plugin
    // new BrowserSyncPlugin(
    //   // BrowserSync options 
    //   {
    //     // browse to http://localhost:3000/ during development 
    //     // proxy the Webpack Dev Server endpoint 
    //     // (which should be serving on http://localhost:3100/) 
    //     // through BrowserSync 
    //     proxy: 'http://localhost:8080/'
    //   },
    //   // plugin options 
    //   {
    //     // prevent BrowserSync from reloading the page 
    //     // and let Webpack Dev Server take care of this 
    //     reload: false
    //   }
    // )
  ]
})