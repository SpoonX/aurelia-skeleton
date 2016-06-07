var gulp       = require('gulp');
var paths      = require('../paths');
var del        = require('del');
var vinylPaths = require('vinyl-paths');

// deletes all files in the output path

gulp.task('clean-tmp', ['unbundle'], function () {
  return gulp.src([paths.tmpRoot]).pipe(vinylPaths(del));
});

gulp.task('clean-dev', ['unbundle'], function () {
  return gulp.src([paths.devRoot]).pipe(vinylPaths(del));
});

gulp.task('clean-dist', ['unbundle'], function () {
  return gulp.src([paths.distRoot]).pipe(vinylPaths(del));
});

gulp.task('clean', ['unbundle'], function() {
  return gulp.src([paths.clean]).pipe(vinylPaths(del));
});
