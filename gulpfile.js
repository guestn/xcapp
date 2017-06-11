var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var notify = require('gulp-notify');


gulp.task('sass', function () {
  return gulp.src('./scss/*.scss')
    .pipe(sass({
      // includePaths: ['scss'],
      // errLogToConsole: true,
      // outputStyle: 'nested',
      // precision: 3
    }))
    .pipe(gulp.dest('./css'))
    .pipe(notify({ message: 'styles task complete', onLast: true }))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', ['sass'], function() {
  browserSync.init({
    proxy: "localhost/xcapp/",
    port: "3100",
  })
});

gulp.task('default', ['sass', 'browser-sync'], function () {
    gulp.watch('./scss/*.scss', ['sass']);
    gulp.watch("**/*.html").on('change', browserSync.reload);
});
