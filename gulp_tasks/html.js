const gulp = require('gulp');

module.exports = function () {
    return gulp.src(['app/modules/**/*.html'])
        .pipe(gulp.dest('www/modules'));
};
