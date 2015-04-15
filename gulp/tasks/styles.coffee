config 		= require '../../package.json'
handleError = require '../util/handle_error'
gulp 	    = require 'gulp'
stylus      = require 'gulp-stylus'
nib 	    = require 'nib'
CSSmin      = require 'gulp-minify-css'
source      = require 'vinyl-source-stream'
prefix      = require 'gulp-autoprefixer'
rename      = require "gulp-rename"
browserSync = require 'browser-sync'
reload      = browserSync.reload

production = process.env.NODE_ENV is 'production'

exports.paths =
	source 		: './src/stylus/app.styl'
	watch 		: './src/**/*.styl'
	destination : './public/css/'
	release 	: "app.min.#{config.version}.css"

gulp.task 'styles', ->
	styles = gulp
		.src exports.paths.source
		.pipe(stylus({
			'include css'  : on
			'define'   	   :
				'namespace': config.name
			'use' 	       : nib()
			'linenos'  	   : !production
		}))
		.on 'error', handleError
		.pipe prefix 'last 2 versions', 'Chrome 34', 'Firefox 28', 'iOS 7'
		.pipe gulp.dest exports.paths.destination

	if production
		gulp.src(exports.paths.destination + 'app.css')
			.pipe CSSmin()
			.pipe(rename(exports.paths.release))
			.pipe(gulp.dest(exports.paths.destination))