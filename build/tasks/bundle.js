var runSequence = require('run-sequence');
var gulp        = require('gulp');
var fs          = require('fs');
var path        = require('path');
var paths       = require('../paths');
var bundler     = require('aurelia-bundler');
var bundles     = require('../bundles');

var config = {
  force:      true,
  configPath: './src/config.js',
  bundles:    bundles.bundles
};

gulp.task('copy-jspm', function() {
  return gulp.src(path.join(paths.jspmPackages, '!(*.src)*.js*')).pipe(gulp.dest(paths.distRoot + 'jspm_packages'));
});

gulp.task('copy-config', function() {
  return gulp.src(paths.config).pipe(gulp.dest(paths.distRoot));
});

gulp.task('copy-index', function() {
  return gulp.src(paths.index).pipe(gulp.dest(paths.distRoot));
});

gulp.task('copy-locales', function() {
  return gulp.src(paths.root + paths.locales + '**/*.json').pipe(gulp.dest(paths.distRoot + paths.locales));
});

gulp.task('copy-scripts', function() {
  return gulp.src(paths.tmpRoot + paths.scripts + 'app-build.js').pipe(gulp.dest(paths.distRoot + paths.scripts));
});

gulp.task('copy-styles', function() {
  return gulp.src(paths.tmpRoot + paths.styles + '**/*').pipe(gulp.dest(paths.distRoot + paths.styles));
});

gulp.task('bundle', function(callback) {
  return runSequence(
    'prepare-bundle',
    ['copy-jspm', 'copy-config', 'copy-index', 'copy-scripts', 'copy-styles', 'copy-locales'],
    'clean-tmp',
    callback
  );
});

gulp.task('prepare-bundle', ['build-dist'], function() {
  config.baseURL = './.tmp';
  var srcPath    = path.resolve(__dirname + '/../../src/jspm_packages');
  var destPath   = path.resolve(__dirname + '/../../.tmp/jspm_packages');

  fs.symlinkSync(srcPath, destPath, 'dir');

  return bundler.bundle(config);
});

gulp.task('unbundle', function() {
  config.baseURL = '.';

  return bundler.unbundle(config);
});
