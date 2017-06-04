'use strict';
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

const path = require('path')
const express = require('express')

if (process.env.NODE_ENV !== 'production') {

  new WebpackDevServer(webpack(config), {
    hot: true,
    historyApiFallback: true,
    contentBase: './public/',
  }).listen(3000, 'localhost', function(err, result) {
    if (err) {
      return console.log(err);
    }

    console.log('Listening at http://localhost:3000/');
  });


} else {
  const app = express()
  const indexPath = path.join(__dirname, 'public/index.html')
  const publicPath = express.static(path.join(__dirname, 'public'))
  const port = (process.env.PORT || 3000)

  app.use('/public', publicPath)
  app.get('/', function(_, res) {
    res.sendFile(indexPath)
  })

  app.listen(port)
  console.log(`Listening at http://localhost:${port}`)
}
