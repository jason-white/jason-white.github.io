var gulp          = require("gulp");
    autoprefixer  = require("gulp-autoprefixer");
    pug           = require("gulp-pug");
    sass          = require("gulp-sass");
    svgstore      = require("gulp-svgstore");
    svgmin        = require("gulp-svgmin");
    sourcemaps    = require('gulp-sourcemaps');


gulp.task("pug", function() {
  gulp.src("./pug/*.pug")
    .pipe(pug({
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
  gulp.watch("./pug/*.pug", ["pug"])
  gulp.watch("./svg/**/*.svg", ["svgstore"])
  gulp.watch("./scss/**/*.scss", ["sass"])
})

gulp.task("default", ["pug", "svgstore", "sass", "watch"]);
