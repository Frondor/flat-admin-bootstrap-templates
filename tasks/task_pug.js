'use strict';
var gulp = require( 'gulp' );
var pug = require( 'gulp-pug' );
var hash_src = require( "gulp-hash-src" );
var runSequence = require( 'run-sequence' );
var rename = require( "gulp-rename" );
const SOURCE = [
    'src/pug/*.pug',
    '!src/pug/_*.pug',
    '!src/pug/include/*'
];
gulp.task( 'pug', () => {
    console.log( 'pug' );
    gulp.watch( 'src/pug/**/*.pug', () => {
        return runSequence( "pug", "refresh" );  
    } );        
    return gulp.src( SOURCE )        
        .pipe( pug( {
            pretty:true
        }) )
        // .pipe( rename( { prefix: "m." }) )        
        .pipe( gulp.dest( './dist' ) )    
        /*.pipe( hash_src( { build_dir: "./dist", src_path: "./dist" }) )        
        .pipe( gulp.dest( './dist' ) )    */
});