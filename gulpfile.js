const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const sass = require('gulp-sass')(require('node-sass'));


function defaultTask(cb) {
    // place code for your default task here
    cb();
}

// Compile sass into CSS & auto-inject into browsers
function buildCSS() {
    return gulp.src("src/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
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
exports.css = buildCSS;
