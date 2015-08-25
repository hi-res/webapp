config      = require '../../package.json'
gulp 	    = require 'gulp'
gulpif 	    = require 'gulp-if'
CSSmin      = require 'gulp-minify-css'
browserSync = require 'browser-sync'
sourcemaps  = require 'gulp-sourcemaps'
sass  		= require 'gulp-sass'
rename      = require 'gulp-rename'

development = process.env.NODE_ENV is 'development'
production  = process.env.NODE_ENV is 'production'

exports.paths =
	source: './src/sass/app.scss'
	watch: './src/sass/*.scss'
	destination: './public/css'
	filename: 'app.css'
	release: "app.min.#{config.version}.css"

gulp.task 'styles', ->

	if production
		filename = exports.paths.release
	else
		filename = exports.paths.filename

	outputStyle = if production then 'compressed' else 'expanded'
	
	gulp
		.src exports.paths.source
		.pipe gulpif development, sourcemaps.init()
		.pipe(sass({
			outputStyle: outputStyle
		}).on('error', sass.logError))
		.pipe gulpif development, sourcemaps.write()
		.pipe gulpif production, CSSmin()
		.pipe rename filename
		.pipe gulp.dest exports.paths.destination
		.pipe gulpif development, browserSync.stream()