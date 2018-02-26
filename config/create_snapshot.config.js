var path = require('path');
var fs = require('fs');
var webpack = require('webpack');


var config = {
  target: 'node',

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: [path.resolve(__dirname), 'node_modules', 'src']
  },

  entry: './src/scripts/create_snapshot.tsx',

  output: {
    path: path.resolve('./build'),
    filename: './create_snapshot.js',
  },

  module: {
    loaders: [{
        test: /\.(jpe?g|png|gif)$/i,
        loader: 'url-loader?limit=1000&name=images/[hash].[ext]'
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loaders: 'ignore-loader'
      },
      {
        test: /\.svg(\?.*)?$/,
        loader: 'ignore-loader'
      }
    ]
  },

  plugins: [
      new webpack.LoaderOptionsPlugin({
        debug: false
      })
  ],


};

module.exports = config;