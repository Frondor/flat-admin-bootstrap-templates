'use strict';

var gulp = require( "gulp" );
// var t imagemin from 'gulp-imagemin';

// gulp.task( 'image', function () {
//     return gulp.src( './src/assets/images/**/*' )
//         // .pipe(imagemin())
//         .pipe( gulp.dest( 'temp/html/assets/images' ) );
// });

gulp.task( 'image', function () {
    return gulp.src( './src/assets/images/**/*' )
        // .pipe(imagemin())
        .pipe( gulp.dest( 'dist/assets/images' ) );
});