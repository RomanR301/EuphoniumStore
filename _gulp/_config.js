const env = process.env.NODE_ENV;
const isDevMode = (env === 'development');
const isProdMode = (env === 'production');

module.exports = {
  isDevMode,
  isProdMode,
  path: {
    dist: './dist',
    serve: './serve',
    src: './src'
  }
};
