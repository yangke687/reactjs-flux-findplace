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
var historyFallback = require('connect-history-api-fallback');

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
    .pipe(gulp.dest('dist/place-rent/'))
    .pipe(connect.reload());
});

gulp.task('less', function() {
  return gulp.src('less/style.less')
    .pipe(less())
    .pipe(gulp.dest('./dist/place-rent/style'))
    .pipe(connect.reload());
});

gulp.task('copy', function() {
  gulp.src('./images/**/*')
    .pipe(gulp.dest('./dist/place-rent/images'));
  gulp.src('./vendors/**/*')
    .pipe(gulp.dest('./dist/place-rent/vendors'));
  gulp.src('./index.html')
    .pipe(gulp.dest('./dist/place-rent'));
});

gulp.task('connect', function() {
  connect.server({
    root: './dist',
    livereload: true,
    port: 8810,
    middleware: function(connect, opt){
      return [
        proxy('/api',{
          target: 'http://192.168.2.227',
          changeOrigin: true,
          pathRewrite: {
            '^/api' : '/wechat/placeRent',
          },
        }),
        historyFallback(),
      ];
    },
  });
});

gulp.task('watch', function() {
  gulp.watch(['./app.js','./components/**/*.jsx','./components/**/*.js'],['js']);
  gulp.watch("./less/**/*.less", ['less']);
});


gulp.task('default', ['js','connect','watch']);
gulp.task('build',['js','less','copy']);