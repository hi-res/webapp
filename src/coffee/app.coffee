class App

	constructor: ->

		window.c = require 'lib/log'
		c.enable = env.DEBUG

		window.app = @


		###
		Expose view classes
		###
		@views =
			'Home'  : require 'views/home'
			'About' : require 'views/about'

		###
		Start
		###
		nav = require 'controllers/navigation'

		do nav.start

module.exports = $ -> new App