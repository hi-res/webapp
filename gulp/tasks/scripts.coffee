config      = require '../../package.json'
gulp 		= require 'gulp'
uglify      = require 'gulp-uglify'
gulpif      = require 'gulp-if'
classify    = require 'gulp-ng-classify'
coffee 		= require 'gulp-coffee'
concat 		= require 'gulp-concat'
rename      = require "gulp-rename"
handleError = require '../util/handleError'

development = process.env.NODE_ENV is 'development'
production  = process.env.NODE_ENV is 'production'

exports.paths =
	source: './src/coffee/**/*.coffee'
	watch: './src/coffee/**/*.coffee'
	destination: './public/js/'
	filename: 'app.js'
	release: "app.min.#{config.version}.js"

gulp.task 'scripts', ->

	if production
		filename = exports.paths.release
	else
		filename = exports.paths.filename

	gulp.src exports.paths.source

		.pipe classify()
		.pipe coffee bare: false
		.pipe concat exports.paths.filename
		.pipe gulpif production, uglify()
		.pipe rename filename
		.pipe gulp.dest exports.paths.destination

		.on 'error', handleError