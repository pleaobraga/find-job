var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');


const VENDOR_LIBS = [
  'react', 
  'lodash', 
  'redux', 
  'react-redux', 
  'react-router-dom',
  'redux-thunk',
  'material-ui',
];

module.exports = {
  entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[hash].js'
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: ['style-loader', 'css-loader/locals'],
        test: /\.css$/
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new OpenBrowserPlugin({ url: 'http://localhost:3333' }),
    new webpack.HotModuleReplacementPlugin()

  ],
  devServer: {
    inline:true,
    port: 3333,
    historyApiFallback: true,
    contentBase: './',
    hot: true
  }
};