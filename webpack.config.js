
var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './scripts/App.js',
  output: {
    path: __dirname + '/dev',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js']
  },
  devtool: 'eval-source-map',
  devServer:{
    inline: true,
    proxy: {},
    contentBase: './dev',
    port:3000
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'scripts')
      }
    ]
  }
};
