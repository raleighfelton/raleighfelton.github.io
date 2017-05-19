var gulp = require('gulp');
var postcss = require('gulp-postcss');
var gutil = require('gulp-util');
var atImport = require("postcss-import")
var autoprefixer = require('autoprefixer');
var cssnext = require('cssnext');
var precss = require('precss');
//var stylelint = require('gulp-stylelint');
var pxtorem = require('postcss-pxtorem');


gulp.task('default',['watch'], function() {
    console.log('Running Gulp');
});

gulp.task('css',function(){
  var processors = [
    atImport,
    cssnext,
    precss,
    //stylelint,
    pxtorem,
    autoprefixer
  ];
  return gulp.src('./src/css/*.css')
    .pipe(postcss(processors).on('error', gutil.log))
    .pipe(gulp.dest('./dest'));
})

gulp.task('watch',function(){
  gulp.watch(['./src/css/**/*.css'], ['css']);
})
