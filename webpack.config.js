var path =require("path");
var webpack=require("webpack");
var BUILD_DIR = path.resolve(__dirname, 'src/');
var APP_DIR = path.resolve(__dirname, 'src/react');

var config = {
  module : {
      loaders : [
        {
          test : /\.jsx?/,
          include : APP_DIR,
          loader : 'babel-loader'
        }
      ]
    },
  //entry: APP_DIR + '/editapp.jsx',
  entry: APP_DIR + '/app.jsx',
  output: {
    path: BUILD_DIR,
    //filename: 'editapp.js'
    filename:'app.js'
  }
};

module.exports = config;