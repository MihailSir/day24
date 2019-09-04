'use strict';
let gulp = require('gulp');
let scss = require('gulp-sass');
let server = require('browser-sync');
let pug = require('gulp-pug');

gulp.task('css', function () {
    return gulp.src('scss/style.scss')
        .pipe(scss())
        .pipe(gulp.dest('css'))

});

gulp.task('pug', function () {
    return gulp.src('*.pug')
        .pipe(pug())
        .pipe(gulp.dest('pug'));

});
gulp.task('server', function () {
    server.init({
        server: '',
        notify: false
    });
    gulp.watch('scss/*{sass,scss}', gulp.series('css')).on('change', server.reload);
    gulp.watch('*.html').on('change', server.reload);
});
gulp.task('run', gulp.series('server'));