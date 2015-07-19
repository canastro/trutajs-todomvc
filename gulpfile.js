'use strict';

var gulp = require('gulp');

// Loads all files from the /gulp directory
require('require-dir')('./gulp');

gulp.task('build', ['clean', 'copy', 'jade', 'sass', 'babel:sample']);

gulp.task('default', ['watch', 'build', 'serve']);
