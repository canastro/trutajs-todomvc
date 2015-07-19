var gulp = require('gulp');
var del = require('del');

gulp.task('clean', function (cb) {
    del([
        'dist/**/*'
    ], cb);
});

gulp.task('clean:jade', function (cb) {
    del([
        'dist/**/*.jade'
    ], cb);
});
