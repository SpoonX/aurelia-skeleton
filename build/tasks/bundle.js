'use strict';

const runSequence = require('run-sequence');
const gulp        = require('gulp');
const fs          = require('fs');
const path        = require('path');
const del         = require('del');
const jspm        = require('jspm');
const paths       = require('../paths');
const bundler     = require('aurelia-bundler');
const bundles     = require('../bundles');
const resources   = require('../export.js');

var config = {
  force:      true,
  configPath: './src/config.js',
  bundles:    bundles.bundles
};

function normalizeExportPaths() {
  const pathsToNormalize = resources.normalize;

  let promises =  pathsToNormalize.map(pathSet => {
    const packageName = pathSet[ 0 ];
    const fileList = pathSet[ 1 ];

    return jspm.normalize(packageName).then((normalized) => {
      const packagePath = normalized.substring(normalized.indexOf('jspm_packages'), normalized.lastIndexOf('.js'));
      return fileList.map(file => paths.root + packagePath + file);
    });
  });

  return Promise.all(promises)
    .then((normalizedPaths) => {
      return normalizedPaths.reduce((prev, curr) => prev.concat(curr), []);
    });
}

gulp.task('export-normalized-resources', function() {
  return normalizeExportPaths().then(normalizedPaths => {
    return gulp.src(normalizedPaths, { base: paths.root })
      .pipe(gulp.dest(paths.distRoot));
  });
});


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
  return gulp.src(paths.tmpRoot + paths.scripts + '{app-build,vendor}.js')
  .pipe(gulp.dest(paths.distRoot + paths.scripts));
});

gulp.task('copy-styles', function() {
  return gulp.src(paths.tmpRoot + paths.styles + '**/*').pipe(gulp.dest(paths.distRoot + paths.styles));
});

gulp.task('bundle', function(callback) {
  return runSequence(
    'prepare-bundle',
    ['copy-jspm', 'copy-config', 'copy-index', 'copy-scripts', 'copy-styles', 'copy-locales', 'export-normalized-resources'],
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
