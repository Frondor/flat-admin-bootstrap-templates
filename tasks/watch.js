var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task( "watch", () => {
  gulp.watch( [ "./src/**/*.sass" ], [ "sass", "browser-sync-stream" ] );
  gulp.watch( [ "./src/**/*.html" ], [ "html", "refresh" ] );    
});

// gulp.task("angularjs:watch", () => {
//   gulp.watch(['./src/angularjs/**/*.html'], ["angularjs:html", "refresh"])
// })