const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const watch = require('gulp-watch');


gulp.task('scripts', function() {
  return gulp.src('src/js/*.js')
    .pipe(concat('bundle.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});


gulp.task('watch', function() {
  watch('src/js/*.js', gulp.series('scripts'));
});

gulp.task('default', gulp.series('scripts', 'watch'));