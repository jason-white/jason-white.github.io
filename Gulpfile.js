const gulp = require('gulp')
const postcss = require('gulp-postcss')
const tailwindcss = require('tailwindcss')
const sourcemaps = require('gulp-sourcemaps')

gulp.task('css', function () {
  return gulp.src('./src/css/**/*.css')
    .pipe(sourcemaps.init())
    .pipe(postcss([
      tailwindcss('./tailwind.js'),
      require('autoprefixer')
    ]))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./build/css/'))
})

gulp.task('watch', function () {
  gulp.watch('./src/css/**/*.css', ['css'])
})

gulp.task('default', ['css', 'watch'])
