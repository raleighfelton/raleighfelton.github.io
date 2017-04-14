var gulp = require('gulp');
var postcss = require('gulp-postcss');
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
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dest'));
})

gulp.task('watch',function(){
  gulp.watch(['./src/css/**/*.css'], ['css']);
})


/*OLD*/
/*gulp.task('css', function () {
  var processors = [
    atImport,
    cssnext,
    precss,
    //stylelint,
    pxtorem,
    autoprefixer
  ];
  return gulp.src('./src/css/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dest'));
});


gulp.task('copy', function () {
    gulp.src('./index.html')
    .pipe(gulp.dest('./dest/'));
});
*/
