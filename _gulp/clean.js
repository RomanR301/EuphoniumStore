const del = require('del');
const config = require('./_config');

function clean() {
  if (config.isDevMode) {
    return del(`${config.path.serve}/**/*`);
  } else {
    return del(`${config.path.dist}/**/*`);
  }
}

module.exports = clean;
