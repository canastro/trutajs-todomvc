var gulp = require('gulp');
var livereload = require('gulp-livereload');

gulp.task('watch', function() {
  gulp.watch('assets/**/*.scss', ['copy', 'sass']);
  gulp.watch('components/**/*.css', ['copy']);

  gulp.watch('node_modules/truta-js/lib/**/*.js', ['babel:sample']);
  gulp.watch('components/**/*.js', ['babel:sample']);
  gulp.watch('lib/**/*.js', ['babel:sample']);
  gulp.watch('index.js', ['babel:sample']);

  gulp.watch('components/**/*.jade', ['jade']);
  gulp.watch('*.jade', ['jade']);

  livereload.listen(1234);
});
