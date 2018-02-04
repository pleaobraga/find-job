var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var BabelPlugin = require("babel-webpack-plugin");
var StaticSiteGeneratorPlugin = require('static-render-webpack-plugin');

const VENDOR_LIBS = [
  'react', 
  'lodash', 
  'redux', 
  'react-redux', 
  'react-router-dom',
  'redux-thunk',
  'material-ui',
];


// Define the routes we want in this project
var routes = [
  '/',
  /**
   * The 404 page doesn't render as index.html on a regular folder, 
   * so we use a special object to describe more accurately the 
   * behaviour we would like
   */

  {
    path: '/not-found', // this path will be passed to react-router
    output: '/404.html' // this is the output file
  }
];

module.exports = {
  entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[hash].js',
    libraryTarget: 'umd'
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
    new webpack.HotModuleReplacementPlugin(),
    new StaticSiteGeneratorPlugin('[name].[hash].js', routes),
    new BabelPlugin({
      test: /\.js$/,
      presets: [
        [
          'env',
          {
            exclude: [
              'transform-regenerator'
            ],
            loose: true,
            modules: false,
            targets: {
              browsers: [
                '>1%'
              ]
            },
            useBuiltIns: true
          }
        ]
      ],
     sourceMaps: false,
     compact: false
    })

  ],
  devServer: {
    inline:true,
    port: 3333,
    historyApiFallback: true,
    contentBase: './',
    hot: true
  }
};