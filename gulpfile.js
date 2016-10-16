let gulp = require("gulp")
let liveServer = require("gulp-live-server")
let uglify = require("gulp-uglify")
let sourcemaps = require("gulp-sourcemaps");
let ts = require('gulp-typescript');

var tsProject = ts.createProject('tsconfig.json');

gulp.task('default', ['build-javascript', 'build-typescript']);

gulp.task('serve', [], () => {
    return liveServer
        .static('./', 3001)
        .start()
});

gulp.task('build-javascript', ['build-javascript-html'], () => {
    return gulp.src(['./javascript/**/*.js', '!./javascript/dist'])
        .pipe(sourcemaps.init())
        .pipe(uglify({mangle: true}))
        .pipe(sourcemaps.write('.', {sourceRoot: '../'}))
        .pipe(gulp.dest('./javascript/dist/'))
})

gulp.task('build-javascript-html', [], () => {
    return gulp.src(['./javascript/**/*.html', '!./javascript/dist'])
        .pipe(gulp.dest('./javascript/dist/'))
});


gulp.task('build-typescript', ['build-typescript-html'], () => {
    return gulp.src(['./typescript/**/*.ts', '!./typescript/dist'])
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .pipe(uglify())
        .pipe(sourcemaps.write('.', {sourceRoot: '../'}))
        .pipe(gulp.dest('./typescript/dist/'))
})

gulp.task('build-typescript-html', [], () => {
    return gulp.src(['./typescript/**/*.html', '!./typescript/dist'])
        .pipe(gulp.dest('./typescript/dist/'))
});