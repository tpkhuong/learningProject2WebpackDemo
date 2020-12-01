require("dotenv").config();
var express = require("express");
var webpack = require("webpack");
var webpackDevMiddleware = require("webpack-dev-middleware");

var PORT = process.env.PORT || 3000;

var app = express();
var config = require("./webpack.config.js");
var compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
);

// Serve the files on port 3000.

app.listen(PORT, function () {
  console.log(`listening on ${PORT}`);
});
