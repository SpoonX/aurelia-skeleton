var gulp       = require('gulp'),
    paths      = require('../paths'),
    del        = require('del'),
    vinylPaths = require('vinyl-paths');

// deletes all files in the output path
gulp.task('clean-dev', function () {
  return gulp.src([paths.devRoot])
    .pipe(vinylPaths(del));
});

gulp.task('clean-dist', function () {
  return gulp.src([paths.distRoot])
    .pipe(vinylPaths(del));
});

gulp.task('clean-tmp', function () {
  return gulp.src([paths.tmpRoot])
    .pipe(vinylPaths(del));
});
