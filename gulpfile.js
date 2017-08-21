// gulpfile.js
var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');
var rename = require('gulp-rename');
var runSequence = require('run-sequence');
var less = require('gulp-less');
var connect = require('gulp-connect');
var proxy = require('http-proxy-middleware');

gulp.task('js', function() {
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
    .pipe(connect.reload());
});

gulp.task('less', function() {
  return gulp.src('less/style.less')
    .pipe(less())
    .pipe(gulp.dest('./dist/style'))
    .pipe(connect.reload());
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

gulp.task('connect', function() {
  connect.server({
    root: './dist',
    livereload: true,
    port: 8810,
    middleware: function(connect, opt){
      return [
        proxy('/api',{
          target: 'http://127.0.0.1',
          changeOrigin: true,
          pathRewrite: {
            '^/api' : '/wechat/placeRent',
          },
        })
      ];
    },
  });
});

gulp.task('watch', function() {
  gulp.watch(['./**/*.jsx','./**/*.js'],['js']);
  gulp.watch("./**/*.less", ['less']);
});


gulp.task('default', ['connect','watch']);