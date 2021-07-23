const { src, dest } = require('gulp');
const plumber = require('gulp-plumber');
const htmlmin = require('gulp-htmlmin');
const gulpif = require('gulp-if');
const changed = require('gulp-changed');
const config = require('./_config');

function html() {
  return src(`${config.path.src}/*.html`)
    .pipe(plumber())
    .pipe(gulpif(config.isProdMode, htmlmin({
      collapseBooleanAttributes: true,
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true,
      removeComments: true
    })))
    .pipe(gulpif(config.isDevMode, changed(config.path.serve)))
    .pipe(gulpif(config.isDevMode, dest(config.path.serve)))
    .pipe(gulpif(config.isProdMode, dest(config.path.dist)));
}

exports.html = html;
