var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browser = require('browser-sync');
var reload = browser.reload;
var spritesmith = require('gulp.spritesmith');
var phantomjssmith = require('phantomjssmith');
var rev = require('gulp-rev');
var autoprefixer = require('gulp-autoprefixer');
var htmllint = require('gulp-htmllint');
var eslint = require('gulp-eslint');
var plumber = require('gulp-plumber');
var run = require('gulp-run');

gulp.task('rev', function () {
    gulp.src('*.html')
        .pipe(rev())
        .pipe(gulp.dest('.'));
});

gulp.task('serve', ['sass'], function() {
    browser({
        port: process.env.PORT || 4500,
        open: false,
        ghostMode: false,
        server: {
            baseDir: '.'
        }
    });
});
gulp.task('watch', function() {
    gulp.watch(['*.html', 'app/**/*.js'], reload);
});
gulp.task('sass', function () {
    gulp.src('./src/sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./static/css'))
        .pipe(reload({
            stream: true
        }));
});
gulp.task('htmllint', function() {
    return gulp.src('index.html')
        .pipe(htmllint());
});
gulp.task('lint', function () {
    return gulp.src(['static/js/main.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
});
gulp.task('default', ['sass', 'watch', 'serve']);
gulp.task('compile', ['sass']);
gulp.task('publish', ['rev', 'autoprefixer', 'htmllint', 'lint']);
