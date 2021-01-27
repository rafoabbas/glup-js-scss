'use strict';

const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass');


var styleSRC = './src/scss/app.scss';
var generalStyleSRC = './src/scss/**/**.scss';

var styleDIST = './dist/css';

gulp.task('style', function (){
   return gulp.src( styleSRC )
       .pipe(sass({
           errorLogToConsole: true,
           outputStyle: 'compressed'
       }))
       .on('error', console.error.bind(console))
       .pipe(rename( { suffix: '.min' }))
       .pipe(gulp.dest(styleDIST));
});


gulp.task('watch', function (){
   gulp.watch(generalStyleSRC, gulp.series('style'))
});


gulp.task('default', gulp.series('watch'));