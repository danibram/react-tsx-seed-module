require('babel-register')

var webpack = require('webpack')
var path = require('path')

module.exports = {
  externals: {
    "react": "commonjs2 react"
  },

  entry: ["./src/index.ts"],

  output:{
    path: 'build',
    filename: '', //will be extended to dev or prod
    library: 'HelloWorldReact',
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      { test: /\.ts(x?)$/, loaders: ['babel','ts-loader'], exclude: /(node_modules)/ }
    ]
  },

  ts: {
    compiler: 'typescript'
  },

  resolve: {
       root: [path.resolve('node_modules'), path.resolve('src')],
       extensions: [
         '', '.js', '.jsx',
         '.ts', '.tsx'
       ],
       alias: {}
  }
}
