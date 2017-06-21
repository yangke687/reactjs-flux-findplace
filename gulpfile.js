// gulpfile.js
var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var runSequence = require('run-sequence');
var less = require('gulp-less');
var connect = require('connect');
var serve = require('serve-static');
var browsersync = require('browser-sync');
var buffer = require('vinyl-buffer');

gulp.task('build', function() {
  return browserify({
      entries: 'app.js',
      extensions: ['.jsx'],
      debug: true
    })
    .transform(babelify)
    .bundle()
    .on('error', function(err) {
      console.log(err.message);
      this.emit('end');
    })
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
    .pipe(browsersync.stream());;
});

gulp.task('less', function() {
  return gulp.src('less/style.less')
    .pipe(less())
    .pipe(gulp.dest('./dist/style'))
    .pipe(browsersync.stream());
});

gulp.task('compress', function() {
  return gulp.src('./dist/bundle.js')
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('copy', function() {
  gulp.src('./images/**/*')
    .pipe(gulp.dest('./dist/images'));
  gulp.src('./vendors/**/*')
    .pipe(gulp.dest('./dist/vendors'));
  gulp.src('./index.html')
    .pipe(gulp.dest('./dist/'));
});

gulp.task('browsersync', function() {
  browsersync({
    server: {
      baseDir: './dist'
    }
  });
  gulp.watch("./*.js", ['build']);
  gulp.watch("./components/**/*.jsx", ['build']);
  gulp.watch("./actions/*.js", ['build']);
  gulp.watch("./stores/*.js", ['build']);
  gulp.watch("./sources/*.js", ['build']);
  gulp.watch("./less/**/*.less", ['less']);
  gulp.watch("*.html").on('change', browsersync.reload);
  gulp.watch('./images/**/*', ['copy']);
});

gulp.task('default', function(cb) {
  runSequence('build', 'less', 'copy', 'browsersync');
});