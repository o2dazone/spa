var gulp = require('gulp');
var connect = require('gulp-connect');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var webpack = require('webpack-stream');
var compass = require('gulp-compass');
var gulpConfig = require('./gulp.config');

// Tasks
gulp.task('default', ['hint', 'scripts', 'compass']);

gulp.task('scripts', function() {
	return gulp.src(gulpConfig.scripts.paths.entry)
		.pipe(webpack(gulpConfig.webpack))
		.pipe(gulp.dest(gulpConfig.scripts.paths.output.dev))
		.pipe(connect.reload())
		.pipe(uglify())
		.pipe(gulp.dest(gulpConfig.scripts.paths.output.prod));
});

gulp.task('hint', function() {
	return gulp.src(gulpConfig.scripts.paths.all)
		.pipe(jshint('.jshintrc'))
		.pipe(jshint.reporter('default'));
});

gulp.task('compass', function() {
  gulp.src(gulpConfig.styles.paths.all)
    .pipe(compass({
      config_file: './config.rb',
      css: gulpConfig.styles.paths.output.dev,
      sass: 'sass'
    }))
    .pipe(gulp.dest(gulpConfig.styles.paths.output.prod));
});

gulp.task('watch', ['default'], function() {
	gulp.watch(gulpConfig.scripts.paths.all, ['scripts', 'hint']);
	gulp.watch(gulpConfig.styles.paths.all, ['compass']);
	connect.server({
		port: gulpConfig.connect.port,
		root: gulpConfig.ports.expressRoot,
		livereload: true
	});
});



