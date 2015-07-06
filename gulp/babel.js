var gulp = require("gulp");
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('babel:sample', function() {
    var extensions = ['.js','.json','.es6'];

    browserify({
        entries: './index.js',
        debug: true,
        extensions: extensions
    })
    .transform(

        babelify.configure({

            // load the runtime to be able to use Object.assign
            optional: ["runtime"],
            extensions: extensions
        })
    )
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./dist/scripts'));
});
