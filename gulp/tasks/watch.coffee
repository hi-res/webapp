gulp 	    = require 'gulp'
browserSync = require 'browser-sync'
handleError = require '../util/handleError'

production = process.env.NODE_ENV is 'production'

paths = 
	templates: require('./templates').paths
	vendor: require('./vendor').paths
	scripts: require('./scripts').paths
	styles: require('./styles').paths

gulp.task "watch", ->

	gulp.watch paths.styles.watch, ['styles']
	gulp.watch paths.templates.watch, ['templates', browserSync.reload]
	gulp.watch paths.vendor.watch, ['vendor', browserSync.reload]
	gulp.watch paths.scripts.watch, ['scripts', browserSync.reload]