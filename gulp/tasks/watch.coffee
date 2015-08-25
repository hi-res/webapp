gulp 	    = require 'gulp'
browserSync = require 'browser-sync'

production  = process.env.NODE_ENV is 'production'

# Files to watch
paths =
	templates: require('./templates').paths
	styles: require('./styles').paths
	scripts: require('./scripts').paths

gulp.task "watch", ->

	gulp.watch paths.templates.watch, ['templates', browserSync.reload]
	gulp.watch paths.styles.watch, ['styles']
	gulp.watch paths.scripts.watch, ['scripts', browserSync.reload]