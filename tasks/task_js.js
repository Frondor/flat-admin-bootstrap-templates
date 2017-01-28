var gulp = require( "gulp" );
var browserify = require( "browserify" );
var source = require( 'vinyl-source-stream' );
var watchify = require( "watchify" );
var gutil = require( "gulp-util" );
var buffer = require( 'vinyl-buffer' );
var babelify = require( "babelify" );
var uglify = require( 'gulp-uglify' );
var sourcemaps = require('gulp-sourcemaps');            // sourcemap
var gulpPlumber = require( 'gulp-plumber' );            // catch Error 用
var notify = require('gulp-notify');
var path = require( 'path' );
// var envify = require( 'envify/custom' );
const SOURCE = [
    'src/app.js',
    'src/js/form.js',
    'src/js/dashboard.js',
];
gulp.task( 'js:watch', () => {
    return build( true );
});
gulp.task( 'js', () => {
    // process.env.NODE_ENV = "production";    
    return build( false );    
});

function build( watch ) {
    var streams = SOURCE.map( fileName => {        
        var b = browserify( fileName, {
                debug: true,
                cache: {},
                packageCache: {},
                ignore: /(bower_components)|(node_modules)/,
                ignoreWatch: [ '**/node_modules/**', '**/bower_components/**' ],                
                // plugin: [ hmr ],
            })
            .transform(
                babelify, {
                    presets: [ 'es2015' ],
                    // "plugins": ["syntax-async-functions","transform-regenerator"]
                }
            )
           /* .transform( envify( {
                NODE_ENV    : 'production',
                __API_NAME  :"'test123'"
            }) )*/
            // .transform( vueify );
         /*var bundler = watch ? watchify( browserify( props ) ) : browserify( props );
        bundler.transform( babelify )*/
        var bundler = watch ? b : watchify(b);        
        var watchfn = getWatchifyHandler(bundler, fileName );
        bundler.on('update', watchfn);
        bundler.on('log', gutil.log); 
        return watchfn(); 
    });
    return streams;
}

function getWatchifyHandler(bundler, fileName) {
    return function() {
        gutil.log("Begin build for", fileName);
        // var f = path.basename( fileName, 'js' ) + 'min.js';        
        // var f = fileName;
        var f = path.basename( fileName, 'js' ) + 'js';   
        return bundler.bundle()    
            .on( 'error', ( err ) => {
                gutil.log( 'Browserify Error', err );
            } )
            .pipe( source( f ) )
            .pipe( buffer() )
            .pipe( sourcemaps.init( { loadMaps: true }) ) // 從 browserify 文件載入 map
            .pipe( uglify()  )
            // .pipe( !injectData.IS_DEV_MODE ? uglify() : gutil.noop()  )
            .pipe( sourcemaps.write( '.' ) )            
            // .pipe( sourcemaps.write( '../_map', {sourceMappingURLPrefix: 'http://localhost:3000'} ) )
            .pipe( gulp.dest( "dist/asset/js/" ) ).on( 'end', () => {
                console.log(f);
                // gulp.start('update_time');
                gulp.start( "refresh" );
            });
    };
}