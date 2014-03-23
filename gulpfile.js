var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var rename = require('gulp-rename');

gulp.task('default', [ 'less' ], function() {
  // place code for your default task here
});

gulp.task('less', function () {
  gulp.src('./less/bootstrap.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less') ]
    }))
    .pipe(rename('index.css'))
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
  gulp.watch('less/*.less', ['default']);
});

