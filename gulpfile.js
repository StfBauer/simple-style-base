/* GULP Configuration */
let gulp = require('gulp'),
    $ = require('gulp-load-plugins')({
        lazy: true
    });

/* Browser Sync */
let browserSync = require('browser-sync'),
    reload = browserSync.reload;

/* Configurations */
let config = require('./ssg.core.config');

// watchs on file system
let watches = () => {

    // watch all style changes in app/styles
    console.log(config.watches.styles);
    gulp.watch(config.watches.styles, ['sass:compile'], reload);

}

// SASS compilation
gulp.task('sass:compile', () => {

    var watches = config.watches.styles;

    return gulp.src(watches)
        .pipe($.plumber())
        .pipe($.sourcemaps.init())
        .pipe($.sass.sync({
            outputStyle: 'expanded',
            precision: 10,
            includePaths: ['.']
        }).on('error', $.sass.logError))
        .pipe($.autoprefixer({
            browsers: ['> 1%', 'last 2 versions', 'Firefox ESR']
        }))
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest(config.target.styles))
        .pipe(reload({
            stream: true
        }));

});

// Gulp serve task
gulp.task('serve', [], () => {

    // init all watches
    watches();

    // start browser sync
    browserSync(config.server);

});