let gulp = require("gulp")
let liveServer = require("gulp-live-server")
let uglify = require("gulp-uglify")
let sourcemaps = require("gulp-sourcemaps");

gulp.task('build-javascript', [], () => {
    return gulp.src(['./app/**/*.js'])
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write('.', {sourceRoot: '../app/'}))
        .pipe(gulp.dest('./dist/'))
})

gulp.task('build-html', [], () => {
    return gulp.src(['./app/**/*.html'])
        .pipe(gulp.dest('./dist/'))
});

gulp.task('build', ['build-javascript', 'build-html']);

gulp.task('watch', ['build'], () => {
    gulp.watch('./app/**/*.*', ['build'])
});

gulp.task('serve', ['watch'], () => {
    return liveServer
        .static('./dist', 3001)
        .start()
});

gulp.task('default', ['build']);
