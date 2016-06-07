var gulp        = require('gulp'),
    paths       = require('../paths'),
    runSequence = require('run-sequence'),
    bundler     = require('aurelia-bundler'),
    config      = {
      force: true,
      packagePath: './.tmp',
      bundles: {
        "scripts/app-build": {
          includes: [
            'app.js',
            'app.html!text',
            '*/**/*.js',
            '*.js',
            '*.html',
            '*/**/*.html!text',
            '*/**/*.css!text',
            'aurelia-bootstrapper',
            'aurelia-fetch-client',
            'aurelia-router',
            'aurelia-templating-binding',
            'aurelia-validation',
            'aurelia-i18n',
            'aurelia-templating-router',
            'aurelia-loader-default',
            'aurelia-history-browser',
            'aurelia-templating-resources',
            'spoonx/aurelia-orm',
            'spoonx/aurelia-orm/component/association-select.js',
            'spoonx/aurelia-orm/component/association-select.html!text',
            'aurelia-validation/resources/**/*'
          ],
          options : {
            inject: true,
            minify: true
          }
        }
      }
    };

gulp.task('copy-package.json', function () {
  return gulp.src('package.json').pipe(gulp.dest(paths.tmpRoot));
});

gulp.task('copy-index-dist', function () {
  return gulp.src(paths.tmpRoot + paths.sourceRoot + 'index.html').pipe(gulp.dest(paths.distRoot));
});

gulp.task('copy-config-dist', function () {
  return gulp.src(paths.tmpRoot + paths.sourceRoot + 'config.js').pipe(gulp.dest(paths.distRoot));
});

gulp.task('copy-styles-dist', function () {
  return gulp.src(paths.tmpRoot + paths.sourceRoot + paths.styles.dir + '/**/*').pipe(gulp.dest(paths.distRoot + paths.styles.dir));
});

gulp.task('copy-images-dist', function () {
  return gulp.src(paths.tmpRoot + paths.sourceRoot + paths.images.dir + '/**/*').pipe(gulp.dest(paths.distRoot + paths.images.dir));
});

gulp.task('copy-scripts-dist', function () {
  return gulp.src(paths.tmpRoot + paths.sourceRoot + paths.scripts.dir + '/app-build.js').pipe(gulp.dest(paths.distRoot + paths.scripts.dir));
});

gulp.task('copy-locales-dist', function () {
  return gulp.src(paths.tmpRoot + paths.sourceRoot + paths.locales.dir + '/**/*').pipe(gulp.dest(paths.distRoot + paths.locales.dir));
});

gulp.task('prepare-tmp', ['build-dist', 'copy-package.json'], function () {
  return gulp.src(paths.devRoot + '**/*').pipe(gulp.dest(paths.tmpRoot + paths.sourceRoot));
});

gulp.task('run-bundler', function () {
  return bundler.bundle(config);
});

gulp.task('bundle', function (callback) {
  process.env.BUILD_TYPE = 'production';

  return runSequence(
    'clean-dist',
    'clean-tmp',
    'prepare-tmp',
    'build-jspm-bundle',
    'run-bundler',
    'build-jspm-dist',
    'copy-index-dist',
    'copy-config-dist',
    'copy-styles-dist',
    'copy-images-dist',
    'copy-scripts-dist',
    'copy-locales-dist',
    'clean-dev',
    'clean-tmp',
    callback
  );
});
