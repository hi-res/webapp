config 		   = require '../../package.json'
gulp   		   = require 'gulp'
concat 		   = require 'gulp-concat'
uglify 		   = require 'gulp-uglify'
gulpif 		   = require 'gulp-if'
mainBowerFiles = require 'main-bower-files'

production = process.env.NODE_ENV is 'production'

exports.paths =
	source: mainBowerFiles()
	destination: './public/js/'
	filename: 'vendor.js'
	release: "vendor.min.#{config.version}.js"

gulp.task 'vendor', ->

	if production
		filename = exports.paths.release
	else
		filename = exports.paths.filename

	gulp
		.src exports.paths.source
		.pipe concat filename
		.pipe gulpif production, uglify()
		.pipe gulp.dest exports.paths.destination