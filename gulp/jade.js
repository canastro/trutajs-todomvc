var gulp = require('gulp');
var jade = require('gulp-jade');
var merge = require('merge-stream');
var livereload = require('gulp-livereload');

gulp.task('jade', ['clean'], function (done) {

    var index = gulp.src('./index.jade')
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('./dist'))
        .pipe(livereload());

    var views = gulp.src('./components/**/index.jade')
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('./dist/components/'))
        .pipe(livereload());

    return merge(views, index);
});
