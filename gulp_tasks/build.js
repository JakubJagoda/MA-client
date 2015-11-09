const gulp = require('gulp'),
    inject = require('gulp-inject'),
    wiredep = require('wiredep').stream,
    usemin = require('gulp-usemin'),
    uglify = require('gulp-uglify'),
    rev = require('gulp-rev');

module.exports = function () {
    //gulp.src('app/components/**/*').pipe(gulp.dest('www/components'));

    gulp.src('app/index.html')
        .pipe(inject(gulp.src('www/*.js', {read: false}), {
            ignorePath: 'www/',
            addRootSlash: false
        }))
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
