var path       = require('path'),
    sourceRoot = 'src/';

module.exports = {
  sourceRoot  : sourceRoot,
  devRoot     : '.dev/',
  tmpRoot     : '.tmp/',
  distRoot    : 'dist/',
  jspmPackages: path.join(__dirname, '/../src/jspm_packages'),
  lessIncludes: ['node_modules'],
  styles      : {match: '*.less', dir: 'styles', watch: '**/*.less'},
  scripts     : {match: '**/*.js', dir: 'scripts'},
  html        : {match: '**/*.html', dir: 'scripts'},
  locales     : {match: '**/*', dir: 'scripts/config/locale'},
  images      : {match: '**/*', dir: 'images'},
  index       : sourceRoot + 'index.html',
  config      : sourceRoot + 'config.js',
  doc         : './doc',
  e2eSpecsSrc : 'test/e2e/src/*.js',
  e2eSpecsDist: 'test/e2e/dist/'
};
