const { src, dest } = require('gulp');
const plumber = require('gulp-plumber');
const gulpif = require('gulp-if');
const webpack = require('webpack-stream');
const config = require('./_config');

function scripts() {
  return src(`${config.path.src}/js/main.js`)
    .pipe(plumber())
    .pipe(gulpif(config.isDevMode, webpack(require('./webpack/webpack.dev'))))
    .pipe(gulpif(config.isProdMode, webpack(require('./webpack/webpack.prod'))))
    .pipe(gulpif(config.isDevMode, dest(`${config.path.serve}/js`)))
    .pipe(gulpif(config.isProdMode, dest(`${config.path.dist}/js`)));
}

module.exports = scripts;
