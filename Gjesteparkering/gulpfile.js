var source = require('vinyl-source-stream');
var gulp = require('gulp');
var gutil = require('gulp-util');
var browserify = require('browserify');
var watchify = require('watchify');
var notify = require("gulp-notify");
var babelify = require("babelify");

var scriptsDir = './scripts';
var buildDir = './build';
var mainFile = "app.js";


function handleErrors() {
    var args = Array.prototype.slice.call(arguments);
    notify.onError({
        title: "Compile Error",
        message: "<%= error.message %>"
    }).apply(this, args);
    this.emit('end'); // Keep gulp from hanging on this task
}


// Based on: http://blog.avisi.nl/2014/04/25/how-to-keep-a-fast-build-with-browserify-and-reactjs/
function buildScript(file, watch) {

    var props = {
        entries: ['./scripts/' + file],
        debug: true,
        cache: {},
        packageCache: {},
        fullPaths: true,
        extensions: ['.js', '.json', '.es6', 'jsx']
    };

    var bundler = watch ? watchify(browserify(props)) : browserify(props);
    bundler = bundler.transform(babelify, { presets: ["es2015", "react"] });

    function rebundle() {
        var stream = bundler.bundle();
        return stream.on('error', handleErrors)
        .pipe(source(file))
        .pipe(gulp.dest(buildDir + '/'));
    }
    bundler.on('update', function () {
        rebundle();
        gutil.log('Rebundle...');
    });
    return rebundle();
}


gulp.task('build', function () {
    return buildScript(mainFile, false);
});


gulp.task('default', ['build'], function () {
    return buildScript(mainFile, true);
});