bowser   = (require 'bowser').browser
isMobile = require 'ismobilejs'

module.exports = new class Device

	constructor: ->

		@retina   = window.devicePixelRatio >= 1.5
		@ie 	  = bowser.msie
		@firefox  = bowser.firefox
		@ltie10	  = bowser.msie and bowser.version < 10
		@name     = bowser.name
		@version  = bowser.version
		@mobile   = isMobile.phone
		@tablet   = isMobile.tablet
		@handheld = isMobile.any

		if @ltie10
			Modernizr.csstransforms = off

		cls = @name.split(' ').join('_') + '_' + @version.split('.').join '_'

		$('html').addClass cls