config      = require '../../package.json'
path        = require 'path'
gulp        = require 'gulp'
svgSprite   = require 'gulp-svg-sprites'
handleError = require '../util/handle_error'
filter      = require 'gulp-filter'
svg2png     = require 'gulp-svg2png'
rename      = require "gulp-rename"
CSSmin      = require 'gulp-minify-css'

production  = process.env.NODE_ENV is 'production'
development = process.env.NODE_ENV is 'development'

exports.paths =
	source     : '../../src/assets/svg/*.svg'
	watch      : '../../src/assets/svg/*.svg'
	destination: '../../public/'
	release    : "sprite.min.#{config.version}.css"

gulp.task 'assets', ->

	gulp.src exports.paths.source
		.pipe svgSprite()
		.pipe gulp.dest exports.paths.destination

	# didn't work within the stream above so using seperate stream
	gulp.src '../../../public/svg/sprite.svg'
		.pipe svg2png()
		.pipe gulp.dest exports.paths.destination + 'svg'

	if production

		gulp.src exports.paths.destination + 'css/sprite.css'
			.pipe rename exports.paths.release
			.pipe CSSmin()
			.pipe gulp.dest exports.paths.destination + 'css'
		
gulp.task "default", ['assets']