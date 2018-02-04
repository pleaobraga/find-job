// src/AppPrerenderer.js
import AppContainer from './AppContainer'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
exports.prerender = function () {
  return ReactDOMServer.renderToString(<AppContainer />)
}