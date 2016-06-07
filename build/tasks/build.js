var gulp            = require('gulp'),
    runSequence     = require('run-sequence'),
    changed         = require('gulp-changed'),
    plumber         = require('gulp-plumber'),
    to5             = require('gulp-babel'),
    removeCode      = require('gulp-remove-code'),
    less            = require('gulp-less'),
    sourcemaps      = require('gulp-sourcemaps'),
    paths           = require('../paths'),
    fs              = require('fs'),
    utils           = require('../utils.js'),
    path            = require('path'),
    compilerOptions = require('../babel-options'),
    assign          = Object.assign || require('object.assign'),
    notify          = require("gulp-notify");

gulp.task('build-index', function () {
  return gulp.src(paths.index).pipe(gulp.dest(paths.devRoot));
});

gulp.task('build-config', function () {
  return gulp.src(paths.config).pipe(gulp.dest(paths.devRoot));
});

gulp.task('build-images', function () {
  return gulp.src(utils.makeMatchPath('images')).pipe(gulp.dest(utils.makeOutputPath('images')));
});

gulp.task('build-locales', function () {
  return gulp.src(utils.makeMatchPath('locales')).pipe(gulp.dest(utils.makeOutputPath('locales')));
});

gulp.task('build-html', function () {
  return gulp.src(utils.makeMatchPath('html')).pipe(gulp.dest(utils.makeOutputPath('html')));
});

gulp.task('build-jspm-dev', function () {
  return fs.symlinkSync(paths.jspmPackages, path.join(paths.devRoot, 'jspm_packages'), 'dir');
});

gulp.task('build-jspm-bundle', function () {
  return fs.symlinkSync(paths.jspmPackages, paths.tmpRoot + paths.sourceRoot + 'jspm_packages', 'dir');
});

gulp.task('build-jspm-dist', function () {
  return gulp.src(path.join(paths.jspmPackages, '!(*.src)*.js*')).pipe(gulp.dest(paths.distRoot + 'jspm_packages'));
});

gulp.task('build-styles', function () {
  var outputPath = utils.makeOutputPath('styles');

  return gulp.src(utils.makeMatchPath('styles'))
    .pipe(less({paths: paths.lessIncludes}))
    .pipe(gulp.dest(outputPath));
});

gulp.task('build-system', function () {
  var outputPath        = utils.makeOutputPath('scripts');
  var removeCodeOptions = {};

  removeCodeOptions[process.env.BUILD_TYPE || 'development'] = true;

  return gulp.src(utils.makeMatchPath('scripts'))
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(changed(outputPath, {extension: '.js'}))
    .pipe(removeCode(removeCodeOptions))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(to5(assign({}, compilerOptions, {modules: 'system'})))
    .pipe(sourcemaps.write({includeContent: true}))
    .pipe(gulp.dest(outputPath));
});

gulp.task('build', function (callback) {
  return runSequence(
    'clean-dev',
    ['build-system', 'build-styles', 'build-images', 'build-locales', 'build-html', 'build-index', 'build-config'],
    callback
  );
});

gulp.task('build-dev', function (callback) {
  return runSequence('build', 'build-jspm-dev', callback);
});

gulp.task('build-dist', function (callback) {
  return runSequence('build', callback);
});
