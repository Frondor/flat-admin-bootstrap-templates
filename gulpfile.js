
var gulp = require('gulp');
var requireDir = require('require-dir');
var runSequence = require('run-sequence');

const tarks = requireDir( "./tasks" );

const BASE_TASKS = [ 'clean', 'html', 'sass', 'fonts', 'image', 'assets', 'vendor', 'pug' ];

gulp.task( 'default', () => {
    return runSequence.apply( null, BASE_TASKS.concat( [ 'js:watch', 'browser-sync', 'watch' ] ));
});
gulp.task( 'd', () => {
    return runSequence.apply( null, BASE_TASKS.concat( [ 'js:watch', 'browser-sync:open', 'watch' ] ));    
});
gulp.task( 'p', () => {
    return runSequence.apply( null, BASE_TASKS.concat( [ 'js' ] ) );
});