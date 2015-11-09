const gulp = require('gulp'),
    wiredep = require('wiredep').stream,
    usemin = require('gulp-usemin'),
    uglify = require('gulp-uglify'),
    rev = require('gulp-rev');

module.exports = function () {
    gulp.src('app/index.html')
        .pipe(wiredep())
        .pipe(usemin({
            //css: [ rev() ],
            //html: [ minifyHtml({ empty: true }) ],
            js: [ uglify(), rev() ]
            //inlinejs: [ uglify() ],
            //inlinecss: [ minifyCss(), 'concat' ]
        }))
        .pipe(gulp.dest('www'));
};
