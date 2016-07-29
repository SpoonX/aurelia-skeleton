var root       = 'src/';
var scriptRoot = root + 'scripts/';
var devRoot    = '.dev/';
var tmpRoot    = '.tmp/';
var distRoot   = 'dist/';

module.exports = {
  root:         root,
  scriptRoot:   scriptRoot,
  source:       scriptRoot + '**/*.js',
  html:         scriptRoot + '**/*.html',
  css:          scriptRoot + '**/*.css',
  less:         root + 'styles/main.less',
  style:        root + 'styles/**/*.css',
  styles:       'styles/',
  scripts:      'scripts/',
  locales:      'scripts/config/locale/',
  devRoot:      devRoot,
  tmpRoot:      tmpRoot,
  distRoot:     distRoot,
  clean:        [tmpRoot, devRoot, distRoot],
  config:       root + 'config.js',
  index:        root + 'index.html',
  jspmPackages: root + 'jspm_packages',
  doc:          './doc',
  e2eSpecsSrc:  'test/e2e/src/**/*.js',
  e2eSpecsDist: 'test/e2e/dist/'
};
