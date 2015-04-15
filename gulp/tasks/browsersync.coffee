gulp 		= require 'gulp'
browserSync = require 'browser-sync'

gulp.task 'browser-sync', ->
	browserSync
		proxy: "localhost:3000"