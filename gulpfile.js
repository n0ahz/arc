const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

function defaultTask(cb) {
    // place code for your default task here
    cb();
}

function serve() {
    browserSync.init({
        server: "./src",
        open: false,
    });
    gulp.watch("./src/*.html").on("change", reload);
}


exports.default = defaultTask;
exports.serve = serve;