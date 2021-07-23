const { watch, series } = require('gulp');
const { reload } = require('./browser-sync');
const { html } = require('./pages');
const styles = require('./styles');
const scripts = require('./scripts');
const { img, pic, sprites } = require('./images');
const config = require('./_config');

function watcher() {
  watch(`${config.path.src}/*.html`, series(html, reload));
  watch(`${config.path.src}/scss/**/*`, styles);
  watch(`${config.path.src}/js/**/*`, series(scripts, reload));
  watch([
    `${config.path.src}/img/**/*`,
    `!${config.path.src}/img/sprites/**`,
    `!${config.path.src}/img/embedded/**`
  ], series(img, reload));
  watch(`${config.path.src}/pic/**/*`, series(pic, reload));
  watch(`${config.path.src}/img/sprites/*.svg`, series(sprites, reload));
}

exports.watch = watcher;
