var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');

gulp.task('sass', ['clean'], function (done) {

    return gulp.src('./assets/styles/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/assets/styles'))
        .pipe(livereload());
});
