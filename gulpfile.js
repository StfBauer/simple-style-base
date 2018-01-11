/** Gulp base **/
/* GULP Configuration */
const gulp = require('gulp'),
    $ = require('gulp-load-plugins')({
        lazy: true
    }),
    gulpif = require('gulp-if'),
    ts = require('gulp-typescript'),
    gulpStylelint = require('gulp-stylelint');
    markdown = require('gulp-marked-json'),
    jsoncombine = require('gulp-jsoncombine'),
    del = require('del');

/* Browser Sync */
const browserSync = require('browser-sync'),
    reload = browserSync.reload;

/* Configurations */
const config = require('./ssg.core.config');

/* core engine */
const ssgCore = require('./ssg-core-engine/ssg.core.precompile'),
    ssgCoreConfig = require('./ssg-core-engine/ssg.core.genConfig');


// watchs on file system
let watches = () => {

    // watch all style changes in app/styles
    gulp.watch(config.watches.styles, ['sass:compile'], reload);

    // watch for all typescript files in app/scripts
    gulp.watch(config.watches.scripts, ['ts:compile'], reload);

    // Update configuration
    gulp.watch(config.watches.ssg)
        // item was changed
        .on('change', ssgCoreConfig.fsEvents);

    // Precompile all patterns
    gulp.watch(config.watches.ssg, ['ssg:precompile'], reload);

    // Watch for documentation changes
    gulp.watch(config.watches.documentation, ['doc:markdown'], reload);

    // Watch for configuration changes
    gulp.watch(config.watches.staticFiles)
        .on('change', reload);

};

// Generate index file for all pattern
gulp.task('ssg:config', () => {

    // Get pattern path
    var patternPath = config.ssg.path;

    var curConfig = {
        patterns: patternPath,
        configFile: config.ssg.config
    };

    // parse configuration and log
    gulp.src(patternPath)
        .pipe(ssgCoreConfig
            .createConfig(curConfig));

});

// Generate Dockumentation
gulp.task('doc:markdown', () => {

    return gulp.src(config.watches.documentation)
        .pipe(markdown({
            pedantic: true,
            smartypants: true
        }))
        .pipe(jsoncombine(config.documentation.path, function (data) {

            var keys = [],
                name,
                newDocData = {};

            for (name in data) {

                // check for slashes in variable name
                var newname = name.replace(new RegExp(/\/|\\/g), '_');

                // create a new object property with normalized name
                newDocData[newname] = {
                    title: data[name].title,
                    body: data[name].body
                }

            }

            // return new buffer in wrapped table
            return new Buffer("var ssgDoc = " + JSON.stringify(newDocData));

        }))
        .pipe(gulp.dest('.tmp/'))
        .pipe(reload({
            stream: true
        }));
});


// Precompile handle bar templates
gulp.task('ssg:precompile', ['ssg:config'], () => {
    return ssgCore(config.ssg);
});

// General typescript compilation
gulp.task('ts:compile', () => {

    var tsProject = ts.createProject(config.tsconfig);

    return gulp.src(config.watches.scripts)
        .pipe(
            $.plumber()
        )
        .pipe(
            $.tslint({
                configuration: "tslint.json",
                formatter: "prose"
            })
        )
        .pipe(
            ts(config.tsconfig)
        )
        .pipe(
            gulp.dest(config.target.scripts)
        )
        .pipe(reload({
            stream: true
        }));

});

// SASS compilation
gulp.task('sass:compile', () => {

    var watches = config.watches.styles;

    return gulp.src(watches)
        .pipe($.plumber())
        .pipe($.sourcemaps.init())
        .pipe(gulpStylelint({
            reporters: [
              {formatter: 'string', console: true}
            ]
          }))
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

// cleans everythign up
gulp.task('clean', () => {
    return del.sync('dist');
});

// Gulp serve task
gulp.task('serve', ['ssg:precompile', 'sass:compile', 'doc:markdown'], () => {

    // start browser sync
    browserSync(config.server);

    // init all watches
    watches();

});

gulp.task('html:dist', () => {

    return gulp.src('app/*.html')
        .pipe(
            $.useref({
                searchPath: ['.', 'node_modules']
            })
        )
        // .pipe(gulpif('*.js', $.minify()))
        .pipe(gulp.dest('dist'));

});

gulp.task('serve:dist', ['dist'], () => {
    browserSync.init({
        notify: false,
        port: 9000,
        server: {
            baseDir: ['dist']
        }
    });
});


// Gulp serve task
gulp.task('dist', ['clean', 'html:dist', 'ssg:precompile', 'sass:compile', 'doc:markdown'], () => {

    // del.sync(['dist']);

    gulp.src([
            './.tmp/**/*'
        ])
        .pipe(gulp.dest('dist'));

    gulp.src([
            './app/_config/*',
        ])
        .pipe(gulp.dest('dist/_config'));

    gulp.src([
            './app/_data/*',
        ])
        .pipe(gulp.dest('dist/_data'));

    gulp.src([
            './ssg-core/ui/**/*',
        ])
        .pipe(gulp.dest('dist/'));

});