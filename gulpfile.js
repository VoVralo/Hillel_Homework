const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

gulp.task('scripts', function() {
  return gulp.src('src/js/*.js')
    .pipe(concat('bundle.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('default', gulp.series('scripts'));