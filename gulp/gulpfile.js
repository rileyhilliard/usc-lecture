'use strict';
// These are npm modules
var g = require('gulp-load-plugins')({lazy: false});
var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var coffee = require('gulp-coffee');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');


var DEST = 'build/';

// Simple gulp task
gulp.task('default', function() {
  console.log("Hello World!");
  console.log('Default has been initiated! Starting count: ');
  for (var i = 1; i < 100; i++) {
    console.log(i +" bottles of beer on the wall");
  }
});



// example of gulp minify build
gulp.task('build', function() {
  console.log('Building your JS min files ...');
  return gulp.src('./examples/*.js')
    // This will output the non-minified version
    .pipe(gulp.dest(DEST))
    // This will minify and rename to foo.min.js
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest(DEST));
});


// example of Coffee Script compiler
gulp.task('coffee', function () {
  console.log('Brewing some Coffee...');
  return gulp.src([
    './examples/*.coffee'
  ])
    .pipe(g.coffee())
    // .pipe(uglify())
    .pipe(gulp.dest('./coffee'));
});

// Image Compressor
gulp.task('images', function () {
  return gulp.src('imgs/*')
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant()]
    }))
    .pipe(gulp.dest('compressed'));
});
