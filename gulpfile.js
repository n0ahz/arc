const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

function defaultTask(cb) {
    // place code for your default task here
    cb();
}

function serve() {
    browserSync.init({
        server: "./app",
        open: false,
    });
    gulp.watch("./app/*.html").on("change", reload);
}


exports.default = defaultTask;
exports.serve = serve;