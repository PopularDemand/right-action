const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const merge = require('lodash/merge');
const get = require('lodash/get');
const { initApp } = require('./server/app');

const PAGES_DIR = path.resolve(__dirname, 'src/scripts/pages');
const STYLES_DIR = path.resolve(__dirname, 'src/stylesheets/pages');

const getFiles = (dir) => {
  const files = fs.readdirSync(dir);
  return files.reduce((pages, file) => {
    const name = file.match(/(.*)\..*/)[1];
    pages[name] = path.resolve(dir, file);
    return pages;
  }, {});
}


const getFilesWithWebpack = (dir) => {
  const files = getFiles(dir);
  files.webpack = 'webpack-hot-middleware';
  return files;
}

const entry = process.env === 'production' ? getFiles(PAGES_DIR) : getFilesWithWebpack(PAGES_DIR);

module.exports = {
  entry,
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.s?css/,
      use: [{
          loader: "style-loader" // creates style nodes from JS strings
      }, {
          loader: "css-loader" // translates CSS into CommonJS
      }, {
          loader: "sass-loader" // compiles Sass to CSS
      }]
    }]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};
