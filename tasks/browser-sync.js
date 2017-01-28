'use strict';

var gulp = require('gulp');
var browserSync = require( 'browser-sync' );

const SERVE_CONFIG = {
    port: 3400,
    server: {
        baseDir: "./dist"
    },
    // files: ["src/**/*.html", "src/**/*.css"],
    open:false,
    ui: {
        port: 3402
    }
};
const server = browserSync.create()

gulp.task( 'browser-sync', () => {
    server.init( SERVE_CONFIG );
});
gulp.task( 'browser-sync:open', () => {
    SERVE_CONFIG.open = true;
    server.init( SERVE_CONFIG );
});

gulp.task( "browser-sync-stream", cb => {
    server.stream( { match: '**/*.css' })
    cb();
});
gulp.task( "refresh", ( cb ) => {
    // server.stream()
    server.reload();
    cb();
    /*return gulp.src( "./src/app.js" )
        .pipe( server.stream() )*/
});