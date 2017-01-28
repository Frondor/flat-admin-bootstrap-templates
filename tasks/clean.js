var gulp = require("gulp")
var clean = require('gulp-clean');

/*gulp.task('clean', ()=> {
    return gulp.src('temp', { read: false })
        .pipe(clean());
});*/
gulp.task('clean', ()=> {
    return gulp.src('dist', { read: false })
        .pipe(clean());
});