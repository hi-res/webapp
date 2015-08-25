require('dotenv').config(path: '.env.'+ process.env.NODE_ENV)

config 		= require '../../package.json'
path 		= require 'path'
gulp 		= require 'gulp'
jade        = require 'gulp-jade'
gulpif      = require 'gulp-if'
handleError = require '../util/handleError'

development = process.env.NODE_ENV is 'development'
production  = process.env.NODE_ENV is 'production'

exports.paths =
	source: './src/jade/**/*.jade'
	watch: './src/jade/**/*.jade'
	destination: './public/'

gulp.task 'templates', ->

	gulp.src exports.paths.source

		.pipe(jade(
			pretty: true
			locals:
				namespace: config.name
				env: process.env.NODE_ENV
				google_analytics: process.env.GOOGLE_ANALYTICS
				version: config.version
				debug: !production
				production: production
		))
		.pipe gulp.dest exports.paths.destination
		.on 'error', handleError