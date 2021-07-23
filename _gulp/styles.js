const { src, dest } = require('gulp');
const plumber = require('gulp-plumber');
const sassGlob = require('gulp-sass-glob');
const gulpif = require('gulp-if');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const { server } = require('./browser-sync');
const config = require('./_config');

sass.compiler = require('node-sass');

function styles() {
  return src(`${config.path.src}/scss/main.scss`)
    .pipe(plumber())
    .pipe(gulpif(config.isDevMode, sourcemaps.init()))
      .pipe(sassGlob())
      .pipe(sass({
        includePaths: ['node_modules'],
        outputStyle: 'expanded'
      }).on('error', sass.logError))
      .pipe(autoprefixer({
        cascade: false,
        remove: false
      }))
      .pipe(gulpif(config.isProdMode, cleanCSS()))
      .pipe(rename('styles.min.css'))
    .pipe(gulpif(config.isDevMode, sourcemaps.write('.')))
    .pipe(gulpif(config.isDevMode, dest(`${config.path.serve}/css`)))
    .pipe(gulpif(config.isProdMode, dest(`${config.path.dist}/css`)))
    .pipe(gulpif(config.isDevMode, server.stream()));

}

module.exports = styles;
