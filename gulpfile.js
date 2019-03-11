const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefix = require('gulp-autoprefixer');

sass.compiler = require('node-sass');

gulp.task('sass', () => {
  return gulp
    .src('./sass/main.scss')
    .pipe(
      sass({
        outputStyle: 'compressed'
      }).on('error', sass.logError)
    )
    .pipe(
      autoprefix({
        browsers: ['> 1%', 'last 2 versions', 'Firefox ESR'],
        cascade: false
      })
    )
    .pipe(gulp.dest('.'));
});

gulp.task('sass:watch', () => {
  gulp.watch('./sass/*.scss', ['sass']);
});
