const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // installed via npm
const path = require('path');
const baseConfig = require('./webpack.base.conf');

module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: []
  },
  plugins: [
    new CleanWebpackPlugin(),
  ]
});
