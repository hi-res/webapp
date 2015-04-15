gulp 	    = require 'gulp'
livereload  = require 'gulp-livereload'
source      = require 'vinyl-source-stream'
handleError = require '../util/handle_error'
browserSync = require 'browser-sync'

production = process.env.NODE_ENV is 'production'

# Files to watch
paths = 
	templates: require('./templates').paths
	styles: require('./styles').paths
	vendor: require('./vendor').paths
	scripts: require('./scripts').paths

gulp.task "watch", ->

	gulp.watch paths.templates.watch, ['templates', 'scripts', browserSync.reload]
	gulp.watch paths.styles.watch, ['styles']
	gulp.watch paths.vendor.watch, ['vendor', browserSync.reload]
	gulp.watch paths.scripts.watch, ['scripts', browserSync.reload]