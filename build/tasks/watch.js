var gulp        = require('gulp'),
    utils       = require('../utils'),
    browserSync = require('browser-sync');

gulp.task('watch', ['serve'], function () {
  gulp.watch(utils.makeWatchPath('scripts'), ['build-system', browserSync.reload]).on('change', utils.reportChange);
  gulp.watch(utils.makeWatchPath('html'), ['build-html', browserSync.reload]).on('change', utils.reportChange);
  gulp.watch(utils.makeWatchPath('styles'), ['build-styles', browserSync.reload]).on('change', utils.reportChange);
  gulp.watch(utils.makeWatchPath('locales'), ['build-locales', browserSync.reload]).on('change', utils.reportChange);
  gulp.watch(utils.makeWatchPath('images'), ['build-images', browserSync.reload]).on('change', utils.reportChange);
  gulp.watch(utils.paths.index, ['build-index', browserSync.reload]).on('change', utils.reportChange);
  gulp.watch(utils.paths.config, ['build-config', browserSync.reload]).on('change', utils.reportChange);
});
