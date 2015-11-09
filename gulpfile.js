const gulp = require('gulp');

const ts = require('./gulp_tasks/ts'),
    html = require('./gulp_tasks/html'),
    clean = require('./gulp_tasks/clean'),
    build = require('./gulp_tasks/build');

gulp.task('clean:build', clean);

//gulp.task('serve', ['ts:serve', 'html:serve', 'scss:serve'], serve);

gulp.task('ts:build', ['clean:build'], ts);

gulp.task('html:build', ['clean:build'], html);
//gulp.task('html-watch:serve', html);
//
//gulp.task('scss:serve', ['clean:serve'], scss);
//gulp.task('scss-watch:serve', scss);

gulp.task('build', ['ts:build', 'html:build'], build);
