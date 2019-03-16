const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefix = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

sass.compiler = require('node-sass');

gulp.task('sass:mini', () => {
  return gulp
    .src('./sass/stylish.scss')
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
    .pipe(rename('stylish.min.css'))
    .pipe(gulp.dest('.'));
});

gulp.task('sass:var', () => {
  return gulp.src('./sass/_variables.scss').pipe(gulp.dest('.'));
});

gulp.task('js:minify', () => {
  return gulp
    .src('js/*.js')
    .pipe(
      babel({
        presets: ['@babel/preset-env']
      })
    )
    .pipe(uglify())
    .pipe(concat('stylish.min.js'))
    .pipe(gulp.dest('.'));
});

gulp.task('js', gulp.series(['js:minify']));
gulp.task('sass', gulp.series(['sass:mini', 'sass:var']));

gulp.task('watch', () => {
  gulp.watch('./sass/*.scss', gulp.series(['sass']));
  gulp.watch('./js/*.js', gulp.series(['js:minify']));
});
