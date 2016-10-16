let gulp = require("gulp")
let liveServer = require("gulp-live-server")
let uglify = require("gulp-uglify")
let sourcemaps = require("gulp-sourcemaps");
let ts = require('gulp-typescript');
let tsProject = ts.createProject('tsconfig.json');

gulp.task('build-typescript', [], () => {
    return gulp.src(['./app/**/*.ts'])
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .pipe(uglify())
        .pipe(sourcemaps.write('.', {sourceRoot: '../app'}))
        .pipe(gulp.dest('./dist/'))
})

gulp.task('build-html', [], () => {
    return gulp.src(['./app/**/*.html'])
        .pipe(gulp.dest('./dist/'))
});

gulp.task('build', ['build-typescript', 'build-html']);

gulp.task('watch', ['build'], () => {
    gulp.watch('./app/**/*.*', ['build'])
});

gulp.task('serve', ['watch'], () => {
    return liveServer
        .static('./dist', 3001)
        .start()
});

gulp.task('default', ['build']);
