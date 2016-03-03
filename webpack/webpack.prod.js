var webpack = require('webpack')
var config =  require('./webpack.config.base')

config.output.filename = 'HelloWorld-React.min.js'
config.plugins = [
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      warnings: false
    }
  })
]

module.exports = config
