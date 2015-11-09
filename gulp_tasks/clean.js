const gulp = require('gulp'),
    clean = require('gulp-clean');

module.exports = function () {
    return gulp.src('www', {read: false})
        .pipe(clean());
};
