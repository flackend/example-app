var gulp = require('gulp'),
    gutil = require('gulp-util'),
    source = require('vinyl-source-stream'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    // This is the main js file. The app entry point.
    main = './' + require('./package.json').main;

gulp.task('bundle', function(){
    bundleSource(false);
});

gulp.task('watch', function () {
    bundleSource(true);
});

function bundleSource(watch) {
    var bundler;

    if (watch) {
        // Create options form the required options (provided nicely by
        // watchify)
        var options = watchify.args;
        // Add our own option(s). We want to specify debug to include
        // sourcemaps from browserify.
        options.debug = true;
        // Initialize browserify and pass it to watchify and assign it to a
        // variable.
        bundler = watchify(browserify(main, options));
        // On change, rebundle!
        bundler.on('update', function() {
            gutil.log('Watchify detected a change in the JS...');
            exec(bundler);
        });
    } else {
        // Bundle our JavaScript!
        bundler = browserify(main, {debug: true});
    }

    function exec (bundler) {
        gutil.log('Bundling JS...');
        return bundler
            .bundle()
            .on('error', function(e) {
                gutil.error('Browserify Error', e.message);
            })
            .pipe(source('bundled.js'))
            .pipe(gulp.dest('./'));
    }

    return exec(bundler);
}