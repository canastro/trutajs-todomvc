var gulp = require('gulp');

gulp.task('copy', function () {
    gulp.src('./index.html')
        // Perform minification tasks, etc here
        .pipe(gulp.dest('./public'));
});


var gulp = require('gulp');
var merge = require('merge-stream');

gulp.task('copy', ['clean'], function (done) {

    var css = gulp.src('./node_modules/todomvc-app-css/index.css')
        .pipe(gulp.dest('./dist/vendors/todomvc-app-css/'));

    var commonjs = gulp.src('./node_modules/todomvc-common/base.js')
        .pipe(gulp.dest('./dist/vendors/todomvc-common/'));

    var commoncss = gulp.src('./node_modules/todomvc-common/base.css')
        .pipe(gulp.dest('./dist/vendors/todomvc-common/'));

    return merge(css, commonjs, commoncss);
});
