const merge = require('webpack-merge');
const path = require('path');
const baseConfig = require('./webpack.base.conf');
const webpack = require('webpack');
const { plugins } = require('./webpack.base.conf');
module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    open: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});
