var gulp = require('gulp');
var jade = require('gulp-jade');
var merge = require('merge-stream');

gulp.task('jade', ['clean'], function (done) {

    var index = gulp.src('./index.jade')
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('./dist'));

    var views = gulp.src('./components/**/index.jade')
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('./dist/components/'));

    return merge(views, index);
});
