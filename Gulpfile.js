var gulp          = require("gulp");
    autoprefixer  = require("gulp-autoprefixer");
    jade          = require("gulp-jade");
    sass          = require("gulp-sass");
    svgstore      = require("gulp-svgstore");
    svgmin        = require("gulp-svgmin");
    sourcemaps    = require('gulp-sourcemaps');


gulp.task("jade", function() {
  gulp.src("./jade/*.jade")
    .pipe(jade({
      errLogToConsole: true
    }))
    .pipe(gulp.dest("./"));
  });

gulp.task("svgstore", function() {
  return gulp
    .src("./svg/svg-defs/*.svg")
    .pipe(svgmin())
    .pipe(svgstore())
    .pipe(gulp.dest("./svg"));
});

gulp.task("sass", function() {
  gulp.src("./scss/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(autoprefixer("last 2 versions"))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./css"))
});

gulp.task("watch", function() {
  gulp.watch("./jade/*.jade", ["jade"])
  gulp.watch("./svg/**/*.svg", ["svgstore"])
  gulp.watch("./scss/**/*.scss", ["sass"])
})

gulp.task("default", ["jade", "svgstore", "sass", "watch"]);
