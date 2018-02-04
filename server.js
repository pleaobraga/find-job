const express = require('express');
const path = require('path');

const app = express();

const React = require('react');
const renderToString = require ('react-dom/server');
const AvaiableJobs = require('./src/pages/AvailableJobs');

// Server routes...
if (process.env.NODE_ENV !== 'production') {
  const webpackMiddleware = require('webpack-dev-middleware');
  const webpack = require('webpack');
  const webpackConfig = require('./webpack.config.js');
  app.use(webpackMiddleware(webpack(webpackConfig)));
} else {
  app.use(express.static('dist'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
}

app.listen(process.env.PORT || 3333, () => console.log('Listening'));