var source = require('vinyl-source-stream');
var gulp = require('gulp');
var gutil = require('gulp-util');
var notify = require("gulp-notify");
var args = require('yargs').argv;
var babelify = require('babelify');
var browserify = require('browserify');

var scriptsDir = './scripts';
var buildDir = './build';
var mainFile = "app.js";

var isProduction = !!args.production;
var watchify = !isProduction ? require('watchify') : {};

var vendorLibs = [
    'react', 'react-dom', 'isomorphic-fetch', 'jquery', 'redux', "react-router-redux", "react-router",
    'babel-polyfill', 'react-redux', 'redux-thunk', 'humps'
];


function handleErrors() {
    var args = Array.prototype.slice.call(arguments);
    notify.onError({
        title: "Compile Error",
        message: "<%= error.message %>"
    }).apply(this, args);
    this.emit('end'); // Keep gulp from hanging on this task
}

gulp.task('default', function () {
    return scripts(false);
});


gulp.task('watch-js', function () {
    return scripts(true);
});

function createBundler(watch, options) {
    var bundler = watch ? watchify(browserify(options)) : browserify(options);
    return bundler.transform(babelify, { presets: ["es2015", "react"] });
}


function scripts(watch) {
    var libBundlerOptions = browserify({
        debug: !isProduction
    });

    var libBundler = createBundler(false, libBundlerOptions);

    libBundler.require(vendorLibs);
    compile(libBundler, 'vendor.bundle.js');

    const options = {
        entries: ['./scripts/' + mainFile],
        debug: !isProduction,
        cache: {}, // required for watchify
        packageCache: {}, // required for watchify
        fullPaths: watch, // required to be true only for watchify
        extensions: ['.js', '.json', '.es6', 'jsx']
    };

    var bundler = createBundler(watch, options);

    bundler.external(vendorLibs);

    if (watch) {

        bundler.on('update', function () {
            return compile(bundler, mainFile);
        });
    };

    return compile(bundler, mainFile);
}

function compile(bundle, filename) {
    return bundle
        .bundle()
        .on('error', handleErrors)
        .pipe(source(filename))
        //.pipe(_if(isProduction, buffer()))
        //.pipe(_if(isProduction, uglify()))
        .pipe(gulp.dest(buildDir + '/'))
        .on('end', () => gutil.log("Compiled: " + filename));
}