'use strict';

var gulp = require( 'gulp' );
var fileinclude = require( 'gulp-file-include' );
var htmlhint = require( "gulp-htmlhint" );

// gulp.task( 'html', () => {
//     return gulp.src( [ 'src/html/**/*.html', '!src/html/include/*.html' ] )
//         .pipe( fileinclude( {
//             prefix: '@@',
//             basepath: '@file'
//         } ) )
//         .pipe( htmlhint() )
//         .pipe( htmlhint.reporter() )
//         .pipe( gulp.dest( 'temp/html/' ) );
// } );

gulp.task( 'html', () => {
    return gulp.src( [ 'src/html/**/*.html', '!src/html/include/*.html' ] )
        .pipe( fileinclude( {
            prefix: '@@',
            basepath: '@file'
        } ) )
        .pipe( htmlhint() )
        .pipe( htmlhint.reporter() )
        .pipe( gulp.dest( 'dist/' ) );
} );