var gulp = require( 'gulp');
var sass = require( 'gulp-sass');
var postcss = require( 'gulp-postcss');
var source = require( 'vinyl-source-stream');
var notify = require( 'gulp-notify');
var plumber = require( 'gulp-plumber');
var concat = require( 'gulp-concat');
var autoprefixer = require( 'autoprefixer');
var stripCssComments = require( 'gulp-strip-css-comments');
var sourcemaps = require( 'gulp-sourcemaps' );
var cssmin = require( 'gulp-cssmin' );

gulp.task( "build:sass", [ "build:sass:main", "build:sass:theme" ] );

gulp.task( "build:sass:main", () => {
    return gulp.src( "./src/app.sass" )
        .pipe( sourcemaps.init( { loadMaps: true }) )        
        .pipe( sass( { outputStyle: 'compressed' }) )
        .pipe( postcss( [
            autoprefixer( {
                browsers: [ 'last 2 versions' ]
            } )
        ] ) )        
        .pipe( concat( 'flat-admin.css' ) )
        .pipe( stripCssComments() )
        .pipe( sourcemaps.write( "." ) )
        .pipe( gulp.dest( './dist/html/assets/css/' ) )
} );


gulp.task( "build:sass:theme", () => {
    return gulp.src( [ "./src/style/theme/*.sass", "!./src/style/theme/mixin.sass" ] )
        .pipe( sourcemaps.init() )        
        .pipe( sass({ outputStyle: 'compressed' }) )
        .pipe( postcss( [
            autoprefixer( {
                browsers: [ 'last 2 versions' ]
            } )
        ] ) )
        .pipe( stripCssComments() )
        .pipe( sourcemaps.write( "." ) )
        .pipe( gulp.dest( './dist/html/assets/css/theme' ) )
} );
/*gulp.task( "sass", [ "sass:main", "sass:theme" ] );

gulp.task( "sass:main", () => {
    return gulp.src( "./src/app.sass" )
        .pipe( plumber( {
            errorHandler: notify.onError( {
                title: "CSS Error: Line <%= error.line %>",
                message: "<%= error.message %>"
            } )
        }) )
        .pipe( sourcemaps.init( { loadMaps: true }) )        
        .pipe( sass( { outputStyle: 'compressed' }) )
        .pipe( postcss( [
            autoprefixer( {
                browsers: [ 'last 2 versions' ]
            } )
        ] ) )        
        .pipe( concat( 'flat-admin.css' ) )
        .pipe( stripCssComments() )
        .pipe( sourcemaps.write( "." ) )
        .pipe( gulp.dest( './temp/html/assets/css/' ) )
});*/
/*
gulp.task( "sass:theme", () => {
    return gulp.src( [ "./src/style/theme/*.sass", "!./src/style/theme/mixin.sass" ] )
        .pipe( plumber( {
            errorHandler: notify.onError( {
                title: "CSS Error: Line <%= error.line %>",
                message: "<%= error.message %>"
            } )
        }) )
        .pipe( sourcemaps.init() )
        .pipe( sass({ outputStyle: 'compressed' }) )
        .pipe( postcss( [
            autoprefixer( {
                browsers: [ 'last 2 versions' ]
            } )
        ] ) )
        .pipe( stripCssComments() )
        .pipe( sourcemaps.write( "." ) )
        .pipe( gulp.dest( './temp/html/assets/css/theme' ) )
} );
*/
