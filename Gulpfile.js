import gulp from 'gulp'
import postcss from 'gulp-postcss'
import tailwindcss from 'tailwindcss'
import sourcemaps from 'gulp-sourcemaps'

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
