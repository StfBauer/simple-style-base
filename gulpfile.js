let gulp = require('gulp'),
    browserSync = require('browser-sync'),
    $ = require('gulp-load-plugins')({
        lazy: true
    })
    ;

/* Configurations */
let config = require('./ssg.core.config');


// Gulp serve task
gulp.task('serve', [], () => {
    browserSync(config.server);
});