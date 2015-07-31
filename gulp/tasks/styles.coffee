config 		= require '../../package.json'
gulp 	    = require 'gulp'
nib 	    = require 'nib'
CSSmin      = require 'gulp-minify-css'
prefix      = require 'gulp-autoprefixer'
rename      = require "gulp-rename"
stylus 		= require 'gulp-stylus'
nib 	    = require 'nib'
jeet 	    = require 'jeet'
rupture 	= require 'rupture'
typographic = require 'typographic'
axis 		= require 'axis'
browserSync = require 'browser-sync'
handleError = require '../util/handleError'

production = process.env.NODE_ENV is 'production'

exports.paths =
	source 		: './src/stylus/app.styl'
	watch 		: './src/stylus/**/*.styl'
	destination : './public/css/'
	release 	: "site.min.#{config.version}.css"

gulp.task 'styles', ->
	 
	 gulp
		.src exports.paths.source
		.pipe(stylus({
			set: ['include css'],
			use: [nib(), jeet(), typographic(), rupture(), axis()]
		}))
		.on 'error', handleError
		.pipe prefix 'last 2 versions', 'Chrome 34', 'Firefox 28', 'iOS 7'
		.pipe gulp.dest exports.paths.destination
		.pipe browserSync.reload(stream:true)

	if production
		gulp.src(exports.paths.destination + 'app.css')
			.pipe CSSmin()
			.pipe(rename(exports.paths.release))
			.pipe(gulp.dest(exports.paths.destination))